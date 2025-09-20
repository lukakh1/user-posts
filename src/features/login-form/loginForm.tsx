"use client";
import { LoginInputs, LoginSchema } from "@/entities/models/login/loginSchema";
import { GoogleSvg } from "@/shared/assets/google_svg";
import { useAuth } from "@/shared/hooks/useAuth";
import Button from "@/shared/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginForm() {
  const { authenticate, errorMessage, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    authenticate("signin", data);
  };

  const handleGmailLogin = () => {
    authenticate("google");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 border border-slate-100 rounded-3xl p-8 bg-slate-600"
    >
      {errorMessage && (
        <div className="text-red-300 text-center mb-4">{errorMessage}</div>
      )}

      <Button
        type="button"
        className="w-full mb-4 flex items-center justify-center gap-2"
        onClick={handleGmailLogin}
        color="primary"
        size="large"
        disabled={isLoading}
      >
        <GoogleSvg />
        Continue with Google
      </Button>

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
        color="submit"
        disabled={isLoading}
      >
        <p>{isLoading ? "Signing In..." : "Sign In"}</p>
      </Button>
    </form>
  );
}
