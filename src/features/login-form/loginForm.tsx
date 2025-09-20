"use client";
import { LoginInputs, LoginSchema } from "@/entities/models/login/loginSchema";
import { signInWithEmail, signInWithGmail } from "@/shared/api/auth-actions";
import Button from "@/shared/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mutation = useMutation({
    mutationFn: signInWithEmail,
    onSuccess: () => {
      router.push(searchParams.get("redirectTo") || "/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => mutation.mutate(data);

  const handleGmailLogin = async () => {
    await signInWithGmail();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 border border-slate-100 rounded-3xl p-8 bg-slate-600"
    >
      <Button
        type="button"
        className="w-full mb-4 flex items-center justify-center gap-2"
        onClick={handleGmailLogin}
        color="primary"
        size="large"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </Button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-slate-400"></div>
        <span className="px-4 text-slate-300">or</span>
        <div className="flex-grow border-t border-slate-400"></div>
      </div>

      <label htmlFor="email" className="text-slate-200">
        Email
      </label>
      <input
        id="email"
        className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 focus:outline-none"
        placeholder="jonjones@gmail.com"
        type="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-300">This field is required</span>
      )}

      <label htmlFor="password" className="text-slate-200">
        Password
      </label>
      <input
        id="password"
        className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 focus:outline-none"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-300">{errors.password.message}</span>
      )}

      <Button
        className="w-1/2 mx-auto my-4"
        type="submit"
        size="large"
        onClick={() => {}}
        color="submit"
      >
        <p>Sign In</p>
      </Button>
    </form>
  );
}
