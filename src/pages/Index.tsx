import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModulesSection from "@/components/ModulesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IntegratedApproachSection from "@/components/IntegratedApproachSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ModulesSection />
      <WhyChooseSection />
      <IntegratedApproachSection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
