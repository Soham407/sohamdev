import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { IdealClient } from "@/components/IdealClient";
import { Examples } from "@/components/Examples";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Services id="services" />
        <Comparison />
        <Pricing id="pricing" />
        <IdealClient />
        <Examples />
        <Process id="process" />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
