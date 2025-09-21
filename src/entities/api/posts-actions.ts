import { createClient } from "@/shared/api/supabase/server";
import { Post } from "../models/post/postSchema";

export async function getPosts(): Promise<{
  success: boolean;
  data?: Post[];
  message?: string;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { success: false, message: error.message };
  }

  console.log(data);
  return { success: true, data: data };
}
