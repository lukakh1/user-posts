import { z } from "zod";

export const AddPostSchema = z.object({
  name: z.string().min(2).max(50),
  subname: z.string().min(2).max(100).optional(),
  content: z.string().min(10).max(1000),
  tags: z.array(z.string()).optional(),
});

export type AddPost = z.infer<typeof AddPostSchema>;
