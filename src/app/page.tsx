import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";


const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <Hero />
        <Stats />
        <Benefits />

        {/* <Section
          id="pricing"
          title="Planing Produk & Layanan"
          description="Pilih program yang kamu butuhkan di NegertiBahasa"
        >
          <div className='flex items-start justify-center gap-8 flex-wrap'>
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </Section> */}

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
