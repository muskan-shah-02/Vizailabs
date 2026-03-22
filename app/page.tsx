import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { UseCaseTabs } from "@/components/sections/UseCaseTabs";
import { Testimonials } from "@/components/sections/Testimonials";
import { IntegrationLogos } from "@/components/sections/IntegrationLogos";
import { PricingCards } from "@/components/sections/PricingCards";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <FeatureGrid />
        <FeatureDeepDive />
        <UseCaseTabs />
        <Testimonials />
        <IntegrationLogos />
        <PricingCards />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
