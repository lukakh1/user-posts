import { z } from "zod";

export const PublicUserSchema = z.object({
  id: z.email(),
  name: z.string().optional(),
  nick: z.string().optional(),
});

export type PublicUser = z.infer<typeof PublicUserSchema>;
