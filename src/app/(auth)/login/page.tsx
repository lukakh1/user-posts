import LoginForm from "@/features/login-form/loginForm";
import H1 from "@/shared/ui/H1";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-slate-100 to-blue-400 px-4">
      <div className="w-full flex items-center">
        <div className="flex flex-col items-center w-1/2 justify-center">
          <H1 color="text-slate-800">Welcome Back</H1>
          <p className="text-slate-800 text-center mb-8 text-xl font-serif">
            Please enter your details to sign in
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <LoginForm />
          <div className="text-center mt-4 p-4 rounded-2xl bg-slate-700">
            <p className="text-slate-300">
              Already have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-300 hover:text-blue-200 font-medium underline transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
