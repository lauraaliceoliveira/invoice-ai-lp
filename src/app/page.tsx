import { Header } from "./components/Header";
import PricingTable from "./components/SectionPricing/PricingTable";
import { Companies } from "./components/SectionCompanies";
import { FAQ } from "./components/SectionFAQ";
import { Features } from "./components/SectionFeatures";
import { Hero } from "./components/SectionHero";
import { HowItWorks } from "./components/SectionHowItWorks";
import { Trial } from "./components/SectionTrial";
import { Pricing } from "./components/SectionPricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Trial /> 
    </>
  )
}