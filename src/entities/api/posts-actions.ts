"use server";
import { createClient } from "@/shared/api/supabase/server";
import { Post } from "../models/post/postSchema";
import { getUser } from "./user-actions";
import { revalidatePath } from "next/cache";

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

  return { success: true, data: data };
}

export async function likePost(postId: number): Promise<{
  success: boolean;
  message?: string;
}> {
  const supabase = await createClient();

  const user = await getUser();
  if (!user) return { success: false, message: "User not authenticated" };
  const userId = user.id;

  const { error } = await supabase
    .from("likes")
    .insert({ post_id: postId, user_id: userId });

  if (error) {
    console.error(error);
    return { success: false, message: error.message };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function unlikePost(postId: number): Promise<{
  success: boolean;
  message?: string;
}> {
  const supabase = await createClient();

  const user = await getUser();
  if (!user) return { success: false, message: "User not authenticated" };
  const userId = user.id;

  const { error } = await supabase
    .from("likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    return { success: false, message: error.message };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function isLiked(postId: number): Promise<{
  success: boolean;
  liked?: boolean;
  message?: string;
}> {
  const supabase = await createClient();
  const user = await getUser();
  if (!user) return { success: false, message: "User not authenticated" };
  const userId = user.id;
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();
  if (error) {
    if (error.code === "PGRST116") {
      return { success: true, liked: false };
    }
    return { success: false, message: error.message };
  }
  return { success: true, liked: !!data };
}
