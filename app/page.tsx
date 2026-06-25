import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { About } from "@/components/sections/about";
import { Values } from "@/components/sections/values";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.legalName,
  description: site.description,
  url: "https://belmonte-seguros.vercel.app",
  telephone: site.phone,
  email: site.email,
  areaServed: "Portugal",
  address: site.addresses.map((a) => ({
    "@type": "PostalAddress",
    streetAddress: a.street,
    addressLocality: "Lisboa",
    postalCode: a.postal.split(" ")[0],
    addressCountry: "PT",
  })),
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [site.social.instagram, site.social.linkedin, site.social.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Solutions />
        <About />
        <Values />
        <Process />
        <Testimonials />
        <BlogTeaser />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
