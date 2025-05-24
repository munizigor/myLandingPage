import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ExpertiseSection } from "@/components/sections/expertise";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main className="flex-grow">
        {/* Container for consistent padding and max-width for sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection /> {/* Hero can be full-width or contained, here it's contained */}
          
          <div className="py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20 md:space-y-24">
            <ExpertiseSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
