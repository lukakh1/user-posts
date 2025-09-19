import SignupForm from "@/features/signup-form/signupForm";
import H1 from "@/shared/ui/H1";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-4 bg-slate-800">
      <H1 color="slate">Sign Up</H1>
      <p className="text-slate-200">Create an account to get started!</p>
      <div className="w-96">
        <SignupForm />
      </div>
      <footer>created by luka</footer>
    </div>
  );
}
