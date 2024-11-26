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

export default function MembershipForm() {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof MembershipSchema>>({
    resolver: zodResolver(MembershipSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      batch: 0,
      roll: 0,
      problem_solving_experience: '',
      expectation: '',
      facebook: '',
      linkedin: '',
      github: '',
      transaction_id: '',
    }
  });

  const onSubmit = (data: z.infer<typeof MembershipSchema>) => {
    startTransition(async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/members/`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
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
            <FormLabel>Education*</FormLabel>
            <FormControl>
              <Input type={'text'} {...field}/>
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
            <FormLabel>Problem Solving Experience*</FormLabel>
            <FormControl>
              <Input type={'text'} {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )} name={'problem_solving_experience'}/>
        <FormField render={({field}) => (
          <FormItem>
            <FormLabel>Expectations*</FormLabel>
            <FormControl>
              <Input type={'text'} {...field}/>
            </FormControl>
            <FormMessage/>
            <FormDescription>What do you expect from the club?</FormDescription>
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
        <Button
          type={'submit'}
          variant={'outline'}
          size={'lg'}
          disabled={pending}
          className={'w-full text-primary'}>
          Submit
          {pending && <RefreshCw className={'animate-spin'}/>}
        </Button>
      </form>
    </Form>
  )
}