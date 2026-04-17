import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import cargoWake from "@/assets/cargo-wake.jpg";
import globalRoutes from "@/assets/global-routes.jpg";
import shipBow from "@/assets/ship-bow.jpg";
import containersImg from "@/assets/containers.jpg";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={cargoWake}
          alt="Cargo ship cutting through ocean"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/84 to-background/58" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-end">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">Get in Touch</p>
              </motion.div>

              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let&apos;s Build Something
                <br />
                <span className="italic font-normal text-muted-foreground">Together</span>
              </motion.h2>

              <motion.p
                className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Open to full-time roles, consulting engagements, and advisory positions
                in logistics, supply chain, and procurement.
              </motion.p>

              <motion.div
                className="mt-10 grid gap-4 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="glass rounded-sm p-5 text-left group">
                  <Mail
                    className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <p className="text-label text-muted-foreground/60 mb-2">Email</p>
                  <a
                    href="mailto:mohammad.allahwasaya@yahoo.com"
                    className="text-foreground hover:text-accent transition-colors duration-300 font-body text-sm break-all"
                  >
                    mohammad.allahwasaya@yahoo.com
                  </a>
                </div>

                <div className="glass rounded-sm p-5 text-left group">
                  <Phone
                    className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <p className="text-label text-muted-foreground/60 mb-2">Phone</p>
                  <a
                    href="tel:+966548771269"
                    className="text-foreground hover:text-accent transition-colors duration-300 font-body text-sm"
                  >
                    +966 54 877 1269
                  </a>
                </div>        

                <div className="glass rounded-sm p-5 text-left group">
                  <MapPin
                    className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <p className="text-label text-muted-foreground/60 mb-2">Location</p>
                  <p className="text-foreground font-body text-sm">Jeddah, Saudi Arabia</p>
                </div>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-accent/90 transition-all duration-300 hover:gap-4 glow-pulse"
                >
                  Start a Conversation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <div className="img-zoom rounded-sm overflow-hidden col-span-2 h-44 border border-border/40">
                <img
                  src={globalRoutes}
                  alt="Global trade network"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={800}
                />
              </div>

              <div className="img-zoom rounded-sm overflow-hidden h-60 border border-border/40">
                <img
                  src={shipBow}
                  alt="Cargo ship bow"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>

              <div className="img-zoom rounded-sm overflow-hidden h-60 mt-8 border border-border/40">
                <img
                  src={containersImg}
                  alt="Shipping container yard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;