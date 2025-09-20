import SignupForm from "@/features/signup-form/signupForm";
import CustomLink from "@/shared/ui/CustomLink";
import H1 from "@/shared/ui/H1";

export default function SignupPage() {
  return (
    <div className="max-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-800 via-slate-100 to-green-500 px-4">
      <div className="w-full flex items-center">
        <div className="flex flex-col items-center w-1/2 justify-center">
          <H1 color="text-slate-800">Create Account</H1>
          <p className="text-slate-800 text-center mb-8 text-lg font-serif">
            Join us today and get started!
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <SignupForm />
          <div className="text-center mt-4 p-4 rounded-2xl bg-slate-700">
            <p className="text-slate-300">
              Already have an account?{" "}
              <CustomLink
                href="/login"
                color="accent"
                variant="outline"
                className="transition-colors"
              >
                Sign in here
              </CustomLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
