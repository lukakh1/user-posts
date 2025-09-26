import React from "react";
import {HeroSection} from "@/features";
import {FeaturesSection} from "@/features";
import {CallToActionSection} from "@/features";
import {Header} from "@/features";
import {Footer} from "@/features";
import {SubscriptionAd} from "@/features";
import { userActions } from "@/entities";

export default async function LandingPage() {
  const user = await userActions.getPublicUser();

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
