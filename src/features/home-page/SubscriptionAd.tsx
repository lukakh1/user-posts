import Button from "@/shared/ui/Button";
import { Icon } from "@iconify/react";

export default function SubscriptionAd() {
  return (
    <div className="w-full max-w-7xl mx-auto py-4 mt-12 bg-gradient-to-r from-purple-900 via-purple-800 to-slate-800 rounded-2xl shadow-2xl shadow-purple-950 overflow-hidden relative">
      <div className="relative z-10 h-full flex items-center justify-between px-8">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:crown" className="text-yellow-400 text-3xl mr-3" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Premium Access
            </span>
          </div>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Get 10x More
            <span className="text-purple-300 block">Viewers!</span>
          </h2>

          <p className="text-slate-300 text-lg mb-6 max-w-md">
            Unlock premium features and reach thousands more users with our
            subscription plan
          </p>

          <Button
            size="large"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <Icon icon="mdi:rocket-launch" className="text-xl" />
            <span>Upgrade Now</span>
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </Button>
        </div>

        <div className="hidden md:flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Icon icon="mdi:eye" className="text-purple-300 text-3xl mr-2" />
              <span className="text-white text-2xl font-bold">50,000+</span>
            </div>
            <p className="text-slate-300 text-center text-sm">
              Monthly Viewers
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Icon
                icon="mdi:chart-line"
                className="text-purple-300 text-2xl"
              />
            </div>
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Icon icon="mdi:target" className="text-purple-300 text-2xl" />
            </div>
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Icon icon="mdi:flash" className="text-purple-300 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
