import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import MasterClasses from "./components/sections/MasterClasses";
import BookingTerms from "./components/sections/BookingTerms";
import Contact from "./components/sections/Contact";
import { jsonLdSchema } from "@/config/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchema),
        }}
      />
      <Header />
      <main>
        <Hero />
        <MasterClasses />
        <BookingTerms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
