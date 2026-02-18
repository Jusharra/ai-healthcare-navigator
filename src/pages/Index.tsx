import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <CaseStudiesSection />
        <ServicesSection />
        <WhoWeServeSection />
        <WhyUsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
