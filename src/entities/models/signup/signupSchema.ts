import { z } from "zod";

export const SignupSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    reppassword: z.string().min(8),
  })
  .refine((data) => data.password === data.reppassword, {
    message: "Passwords don't match",
  });

export type SignupInputs = z.infer<typeof SignupSchema>;
