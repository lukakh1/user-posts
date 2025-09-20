import CustomLink from "@/shared/ui/CustomLink";

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-purple-100 mb-12 leading-relaxed">
          Start your social journey today. Create an account in seconds and
          connect with people who matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <CustomLink
            color="accent"
            href="/signup"
            variant="solid"
            size="large"
            className=""
          >
            Sign Up Now - It&apos;s Free
          </CustomLink>
          <CustomLink
            color="accent"
            href="/login"
            variant="outline"
            size="large"
            className=""
          >
            Sign In to Your Account
          </CustomLink>
        </div>

        <p className="text-purple-200 mt-8 text-sm">
          No credit card required • Join thousands of active users • Start
          connecting today
        </p>
      </div>
    </section>
  );
}
