import { Icon } from "@iconify/react";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <Icon icon="mdi:chat-outline" className="h-12 w-12 text-purple-600" />
      ),
      title: "Share Your Thoughts",
      description:
        "Create and share posts with your community. Express yourself with text, images, and more.",
    },
    {
      icon: (
        <Icon icon="mdi:account-group" className="h-12 w-12 text-blue-600" />
      ),
      title: "Connect with Friends",
      description:
        "Find and connect with people who share your interests. Build meaningful relationships.",
    },
    {
      icon: (
        <Icon icon="mdi:heart-outline" className="h-12 w-12 text-pink-600" />
      ),
      title: "Engage & Comment",
      description:
        "Like, comment, and engage with posts from your network. Join conversations that matter.",
    },
    {
      icon: (
        <Icon
          icon="mdi:bookmark-outline"
          className="h-12 w-12 text-green-600"
        />
      ),
      title: "Save for Later",
      description:
        "Bookmark posts you love and create your personal collection of inspiring content.",
    },
    {
      icon: (
        <Icon
          icon="mdi:account-plus-outline"
          className="h-12 w-12 text-orange-600"
        />
      ),
      title: "Grow Your Network",
      description:
        "Discover new people and expand your social circle with our smart friend suggestions.",
    },
    {
      icon: (
        <Icon icon="mdi:share-variant" className="h-12 w-12 text-teal-600" />
      ),
      title: "Discover Content",
      description:
        "Explore trending posts and discover content tailored to your interests and preferences.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Stay Connected
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers all the tools you need to build meaningful
            connections and share your story with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
