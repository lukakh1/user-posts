"use client";
import {
  SignupInputs,
  SignupSchema,
} from "@/entities/models/signup/signupSchema";
import { GoogleSvg } from "@/shared/assets/google_svg";
import { useAuth } from "@/shared/hooks/useAuth";
import Button from "@/shared/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

export default function SignupForm() {
  const { authenticate, errorMessage, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({ resolver: zodResolver(SignupSchema) });

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    authenticate("signup", data);
  };

  const handleGmailLogin = () => {
    authenticate("google");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 border border-slate-100 rounded-3xl p-8 bg-slate-600 shadow-lg"
    >
      {errorMessage && (
        <div className="text-red-300 text-center mb-2 p-3 bg-red-900/20 rounded-lg border border-red-800">
          {errorMessage}
        </div>
      )}

      <Button
        type="button"
        className="w-full mb-2 flex items-center justify-center gap-2 hover:bg-slate-400 transition-colors"
        onClick={handleGmailLogin}
        color="primary"
        size="large"
        disabled={isLoading}
      >
        <GoogleSvg />
        Continue with Google
      </Button>

      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 h-px bg-slate-400"></div>
        <span className="text-slate-300 text-sm">or</span>
        <div className="flex-1 h-px bg-slate-400"></div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-slate-200 font-medium">
          Email
        </label>
        <input
          id="email"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
          placeholder="jonjones@gmail.com"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-300 text-sm block mt-1">
            This field is required
          </span>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-slate-200 font-medium">
          Password
        </label>
        <input
          id="password"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-300 text-sm block mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="reppassword" className="text-slate-200 font-medium">
          Repeat password
        </label>
        <input
          id="reppassword"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
          type="password"
          {...register("reppassword", { required: true })}
        />
        {errors.reppassword && (
          <span className="text-red-300 text-sm block mt-1">
            {errors.reppassword.message}
          </span>
        )}
      </div>

      <Button
        className="w-full mt-6 hover:bg-blue-300 transition-colors"
        type="submit"
        size="large"
        color="submit"
        disabled={isLoading}
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  );
}
