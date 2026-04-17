import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroExact from "@/components/HeroExact";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import containers from "@/assets/containers.jpg";
import cargoWake from "@/assets/cargo-wake.jpg";
import globalRoutes from "@/assets/global-routes.jpg";

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navigation />
      <HeroExact />

      <section className="relative py-4 md:py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
            <div className="img-zoom rounded-sm overflow-hidden h-64 md:h-80 border border-border/40">
              <img
                src={containers}
                alt="Aerial view of shipping port"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={800}
              />
            </div>

            <div className="grid gap-4 md:grid-rows-[0.85fr_1.15fr]">
              <div className="rounded-sm border border-border/50 bg-secondary/40 p-6 md:p-8 flex items-end">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                  Cross-border supply chain leadership across procurement, logistics,
                  warehousing, and vendor management.
                </p>
              </div>

              <div className="img-zoom rounded-sm overflow-hidden h-40 md:h-full border border-border/40">
                <img
                  src={globalRoutes}
                  alt="Shipping containers at port"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="relative py-4 md:py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="img-zoom rounded-sm overflow-hidden h-56 md:h-72 border border-border/40">
              <img
                src={cargoWake}
                alt="Modern warehouse interior"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>

            <div className="rounded-sm border border-border/50 bg-secondary/30 p-6 md:p-8 flex flex-col justify-end min-h-[14rem] md:min-h-[18rem]">
              <p className="text-label text-accent mb-3">Built for pressure</p>
              <p className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                Sharper operations, tighter costs, stronger supplier control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
