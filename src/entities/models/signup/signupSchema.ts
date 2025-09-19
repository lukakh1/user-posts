import { z } from "zod";

export const SignupSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(2),
  age: z.number().min(18).max(100),
});

export type SignupInputs = z.infer<typeof SignupSchema>;
