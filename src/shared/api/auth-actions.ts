import { createClient } from "./supabase/client";

export async function signInWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();
  const { data: successData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  }
  console.log("signInWithEmail", { successData });
  return successData;
}
