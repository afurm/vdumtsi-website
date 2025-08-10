import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import MasterClasses from "./components/sections/MasterClasses";
import SeasonalPlanting from "./components/sections/SeasonalPlanting";
import GalleryServer from "./components/sections/GalleryServer";
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
      <About />
      <MasterClasses />
      <SeasonalPlanting />
      {/* Server component reads files from public/gallery and passes to client Gallery */}
      <GalleryServer />
      <Contact />
      </main>
      <Footer />
    </>
  );
}
