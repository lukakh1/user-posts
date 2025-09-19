import LoginForm from "@/features/login-form/loginForm";
import H1 from "@/shared/ui/H1";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-4 bg-slate-800">
      <H1 color="slate">Login</H1>
      <p className="text-slate-200">Welcome back! Please enter your details.</p>
      <div className="w-96">
        <LoginForm />
      </div>
      <footer>created by luka</footer>
    </div>
  );
}
