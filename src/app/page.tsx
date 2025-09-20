import React from "react";
import HeroSection from "@/features/home-page/HeroSection";
import FeaturesSection from "@/features/home-page/FeaturesSection";
import CallToActionSection from "@/features/home-page/CallToActionSection";
import Header from "@/features/Header";
import Footer from "@/features/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
