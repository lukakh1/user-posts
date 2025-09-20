import CustomLink from "@/shared/ui/CustomLink";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Connect, Share, and
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
            Discover Together
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join our vibrant community where you can share your thoughts, connect
          with like-minded people, and discover amazing content from around the
          world. Your social journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CustomLink
            href="/signup"
            variant="solid"
            size="large"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-48"
          >
            Get Started Free
          </CustomLink>
          <CustomLink
            color="secondary"
            href="/login"
            variant="outline"
            size="large"
            className="border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-200 min-w-48"
          >
            Already have an account?
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
