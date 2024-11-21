import {z} from "zod";

export const ContactSchema = z.object({
  email: z.string().email({message: "Please enter a valid email"}),
  name: z.string().min(1, "Please enter your name").max(150),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  message: z.string().min(5, "Please enter your message").max(1500)
});