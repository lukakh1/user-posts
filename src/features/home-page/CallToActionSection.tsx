import Link from "next/link";

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
          <Link
            href={"/signup"}
            className="px-10 py-4 bg-white text-purple-600 rounded-xl text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-64"
          >
            Sign Up Now - It&apos;s Free
          </Link>
          <Link
            href={"/login"}
            className="px-10 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 min-w-64"
          >
            Sign In to Your Account
          </Link>
        </div>

        <p className="text-purple-200 mt-8 text-sm">
          No credit card required • Join thousands of active users • Start
          connecting today
        </p>
      </div>
    </section>
  );
}
