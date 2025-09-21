import React from "react";
import HeroSection from "@/features/home-page/HeroSection";
import FeaturesSection from "@/features/home-page/FeaturesSection";
import CallToActionSection from "@/features/home-page/CallToActionSection";
import Header from "@/features/Header";
import Footer from "@/features/Footer";
import { getPublicUser } from "@/shared/api/user-actions";
import SubscriptionAd from "@/features/home-page/SubscriptionAd";

export default async function LandingPage() {
  const user = await getPublicUser();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      {user && <SubscriptionAd />}
      {!user && <HeroSection />}
      <FeaturesSection />
      {!user && <CallToActionSection />}
      <Footer />
    </div>
  );
}
