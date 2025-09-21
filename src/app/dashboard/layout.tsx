import DashboardHeader from "@/features/DashboardHeader";
import Footer from "@/features/Footer";
import Header from "@/features/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard of user",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <Header />
      <DashboardHeader />
      {children}
      <Footer />
    </div>
  );
}
