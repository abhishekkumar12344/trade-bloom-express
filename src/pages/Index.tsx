import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProfitabilitySection from "@/components/ProfitabilitySection";
import BenefitsSection from "@/components/BenefitsSection";
import TradingAssetsSection from "@/components/TradingAssetsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AccountTypesSection from "@/components/AccountTypesSection";
import PlatformSection from "@/components/PlatformSection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProfitabilitySection />
      <BenefitsSection />
      <TradingAssetsSection />
      <HowItWorksSection />
      <AccountTypesSection />
      <PlatformSection />
      <SecuritySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
