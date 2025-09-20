"use server";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

export async function signInWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const { data: successData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }
  return successData;
}

export async function signUpNewUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return data;
}

export async function signInWithGmail() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/google/callback`,
    },
  });

  if (error) {
    console.error("OAuth initiation error:", error);
    redirect("/auth/auth-code-error?error=oauth_init_failed");
  }
  if (data.url) {
    redirect(data.url);
  }
}
