'use client'

import {FieldPath, useForm} from "react-hook-form";
import {z} from "zod";
import {MembershipSchema} from "@/lib/validations";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useTransition} from "react";
import {RefreshCw} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

const problemSolvingExperienceLevels: string[] = [
  'None ( 0 <= Problem Solved )',
  'Newbie ( 0 < Problem Solved <= 100 )',
  'Beginner ( 1 * 10 ^ 2 < Problem Solved <= 3*10^2  + 50)',
  'Intermediate (  0b101011110 < Problem Solved <= 0b10000000000  )',
  'Advance ( −999998983  mod (10^9 + 7) < Problem Solved )'
];

export default function MembershipForm() {
  const [pending, startTransition] = useTransition();

  // Hopefully this is the new batch :3
  const newBatch = new Date().getFullYear() - 1999;

  const form = useForm<z.infer<typeof MembershipSchema>>({
    resolver: zodResolver(MembershipSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      education: 'CSE',
      batch: newBatch,
      roll: 1,
      problem_solving_experience: '',
      expectation: '',
      facebook: '',
      linkedin: '',
      github: '',
      transaction_id: '',
      image: null
    }
  });

  const onSubmit = (data: z.infer<typeof MembershipSchema>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.set('image', data.image[0]);

    startTransition(async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/members/`, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          }
        });

        if (res.ok) {
          toast({
            title: 'Welcome to DCC Programing Club!',
            description: 'Please follow the instructions provided in your mail.'
          });
          form.reset();
        } else if (res.status == 400) {
          const errors = await res.json();
          for (const key in errors) {
            const field = key as FieldPath<z.infer<typeof MembershipSchema>>;
            form.setError(field, {
              message: (errors[key] as string[]).join(''),
            }, {shouldFocus: true});
          }

          toast({
            title: 'Validation error!',
            variant: 'destructive'
          });
        }
      } catch (err) {
        toast({
          title: 'Something went wrong!',
          description: 'Please contact the club secretary.',
          variant: 'destructive'
        });
        console.log(err);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-3'}>
        <small className={'text-destructive'}>Required fields are indicated using (*)</small>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Name*</FormLabel>
              <FormControl>
                <Input type={'text'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'name'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input type={'email'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'email'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Phone*</FormLabel>
              <FormControl>
                <Input type={'tel'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'phone'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Address*</FormLabel>
              <FormControl>
                <Input type={'text'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'address'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Education Level*</FormLabel>
              <FormControl>
                <RadioGroup
                  onChange={field.onChange}
                  defaultValue={field.value}>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="CSE"/>
                    </FormControl>
                    <FormLabel className="font-normal">
                      Computer Science and Engineering
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="HSC"/>
                    </FormControl>
                    <FormLabel className="font-normal">
                      Higher Secondary Certificate
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'education'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Batch*</FormLabel>
              <FormControl>
                <Input type={'number'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'batch'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Roll*</FormLabel>
              <FormControl>
                <Input type={'number'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'roll'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Problem Solving Experience Level*</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your experience level"/>
                  </SelectTrigger>
                  <SelectContent>
                    {problemSolvingExperienceLevels.map((level, index) => (
                      <SelectItem value={level} key={index}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'problem_solving_experience'}/>
          <FormField render={({field}) => (
            <FormItem className={'md:col-span-2'}>
              <FormLabel>Expectations*</FormLabel>
              <FormControl>
                <Textarea {...field}></Textarea>
              </FormControl>
              <FormMessage/>
              <FormDescription>Tell us about your programming journey and what do you expect from the
                club?</FormDescription>
            </FormItem>
          )} name={'expectation'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input type={'url'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'facebook'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input type={'url'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'linkedin'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>GitHub</FormLabel>
              <FormControl>
                <Input type={'url'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'github'}/>
          <FormField render={({field}) => (
            <FormItem>
              <FormLabel>Transaction ID</FormLabel>
              <FormControl>
                <Input type={'text'} {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} name={'transaction_id'}/>
        </div>
        <FormField render={({field}) => (
          <FormItem>
            <FormLabel>Your formal photo</FormLabel>
            <FormControl>
              <Input
                type={'file'}
                accept={'image/*'}
                onChange={(e) => field.onChange(e.target.files)}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )} name={'image'} />
        <Button
          type={'submit'}
          variant={'default'}
          size={'lg'}
          disabled={pending}
          className={'w-full'}>
          Submit
          {pending && <RefreshCw className={'animate-spin'}/>}
        </Button>
      </form>
    </Form>
  )
}