import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection, HowItWorksSection } from "@/components/ProblemSolutionSection";
import { Footer } from "@/components/Footer";
import { BenefitSection } from "@/components/BenefitSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitSection />
      <Footer />     
    </div>
  );
};

export default Index;
