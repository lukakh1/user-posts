"use server";
import { createClient } from "@/shared/api";
import { type Post } from "../models";
import { revalidatePath } from "next/cache";
import { userActions } from ".";

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

  const user = await userActions.getUser();
  if (!user) return { success: false, message: "User not authenticated" };
  const userId = user.id;

  const { error: insertError } = await supabase
    .from("likes")
    .insert({ post_id: postId, user_id: userId });

  if (insertError) {
    console.error(insertError);
    return { success: false, message: insertError.message };
  }

  const { data: currentPost, error: fetchError } = await supabase
    .from("posts")
    .select("likes")
    .eq("id", postId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    await supabase
      .from("likes")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", userId);
    return { success: false, message: fetchError.message };
  }

  const newLikesCount = (currentPost.likes || 0) + 1;
  const { error: updateError } = await supabase
    .from("posts")
    .update({ likes: newLikesCount })
    .eq("id", postId);

  if (updateError) {
    console.error(updateError);
    await supabase
      .from("likes")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", userId);
    return { success: false, message: updateError.message };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function unlikePost(postId: number): Promise<{
  success: boolean;
  message?: string;
}> {
  const supabase = await createClient();

  const user = await userActions.getUser();
  if (!user) return { success: false, message: "User not authenticated" };
  const userId = user.id;

  const { data: existingLike, error: checkError } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (checkError) {
    if (checkError.code === "PGRST116") {
      return { success: false, message: "Like not found" };
    }
    return { success: false, message: checkError.message };
  }

  const { error: deleteError } = await supabase
    .from("likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);

  if (deleteError) {
    console.error(deleteError);
    return { success: false, message: deleteError.message };
  }

  const { data: currentPost, error: fetchError } = await supabase
    .from("posts")
    .select("likes")
    .eq("id", postId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    await supabase
      .from("likes")
      .insert({ post_id: postId, user_id: userId });
    return { success: false, message: fetchError.message };
  }

  const newLikesCount = Math.max((currentPost.likes || 0) - 1, 0);
  const { error: updateError } = await supabase
    .from("posts")
    .update({ likes: newLikesCount })
    .eq("id", postId);

  if (updateError) {
    console.error(updateError);
    await supabase
      .from("likes")
      .insert({ post_id: postId, user_id: userId });
    return { success: false, message: updateError.message };
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
  const user = await userActions.getUser();
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