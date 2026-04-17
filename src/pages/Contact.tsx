import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import contactHero from "@/assets/page-refresh/container-ship-aerial.jpg";
import contactPhotoA from "@/assets/page-refresh/port-night.jpg";
import contactPhotoB from "@/assets/page-refresh/refrigerated-yard.jpg";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="h-[42vh] md:h-[48vh] relative">
          <img
            src={contactHero}
            alt="Aerial supply chain lane with cargo vessels"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">Get in Touch</p>
              </motion.div>
              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                Contact
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Open to full-time roles, consulting engagements, and advisory positions
              in logistics, supply chain, and procurement.
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
            >
              <ContactModal />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500">
                  <p className="text-label text-accent mb-3">Email</p>
                  <a
                    href="mailto:mohammad.allahwasaya@yahoo.com"
                    className="text-foreground text-lg hover:text-accent transition-colors duration-300 font-body break-all"
                  >
                    mohammad.allahwasaya@yahoo.com
                  </a>
                </div>

                <div className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500">
                  <p className="text-label text-accent mb-3">Phone</p>
                  <a href="tel:+966548771269" className="text-foreground text-lg hover:text-accent transition-colors duration-300 font-body">
                    +966 54 877 1269
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500">
                  <p className="text-label text-accent mb-3">Location</p>
                  <p className="text-foreground text-lg font-body">Jeddah, Saudi Arabia</p>
                  <p className="text-muted-foreground text-sm mt-2 font-body">
                    Transferable Valid Iqama · Saudi Driving License
                  </p>
                </div>

                <div className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500">
                  <p className="text-label text-accent mb-3">Online</p>
                  <a
                    href="https://www.linkedin.com/in/mohammad-allah-wasaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-foreground text-lg hover:text-accent transition-colors duration-300 font-body"
                  >
                    LinkedIn
                    <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </a>
                </div>

                <div className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500">
                  <p className="text-label text-accent mb-3">Languages</p>
                  <p className="text-foreground text-lg font-body">
                    English · Arabic · Hindi · Urdu · Punjabi
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Operational Advisory",
                  body: "Support for supply chain diagnostics, process redesign, and execution roadmaps.",
                },
                {
                  title: "Procurement Performance",
                  body: "Supplier strategy, contract alignment, and cost optimization with measurable KPIs.",
                },
                {
                  title: "Team Enablement",
                  body: "Capability-building for planning, compliance, and cross-functional operating rhythm.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <p className="font-display text-lg font-semibold mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground font-body">{item.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 rounded-sm border border-accent/25 bg-accent/10 p-6 md:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-accent mb-2">Availability</p>
              <p className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3">
                Open to senior operations and supply chain opportunities.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-body">
                Full-time, consulting, and interim mandates are welcome. Typical response window: within 24 hours.
              </p>
            </motion.div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Best For",
                  body: "Organizations seeking immediate gains in logistics control, supplier performance, and cost clarity.",
                },
                {
                  title: "Typical Scope",
                  body: "Diagnostics, process redesign, KPI architecture, and execution support with team alignment.",
                },
                {
                  title: "Working Style",
                  body: "Hands-on, metrics-driven, and collaborative across operations, procurement, and finance stakeholders.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p className="font-display text-lg font-semibold mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground font-body">{item.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-[1fr_1fr] gap-4">
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-44 md:h-56">
                <img
                  src={contactPhotoA}
                  alt="Operational project coordination"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6">
                <p className="text-label text-accent mb-2">Partnership Mindset</p>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  I work as an embedded partner with leadership and operations teams to convert strategic goals into practical execution plans and measurable outcomes.
                </p>
                <div className="img-zoom mt-4 rounded-sm overflow-hidden border border-border/50 h-28">
                  <img
                    src={contactPhotoB}
                    alt="Refrigerated freight lanes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
