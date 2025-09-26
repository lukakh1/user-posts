import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  user_id: z.uuid(),
  name: z.string().min(2).max(50),
  subname: z.string().min(2).max(100).optional(),
  content: z.string().min(10).max(1000),
  created_at: z.date(),
  tags: z.array(z.string()).optional(),
  likes: z.number().min(0).default(0),
});

export type Post = z.infer<typeof PostSchema>;
