"use server";
import { createClient } from "@/shared/api/supabase/server";
import { cache } from "react";

const getUser = cache(async () => {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) return null;
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
});

export const getPublicUser = cache(async () => {
  const supabase = await createClient();
  const user = await getUser();
  if (!user) return null;
  const userId = user.id;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) {
    console.error("Error fetching public user:", error);
    return null;
  }
  return data;
});
