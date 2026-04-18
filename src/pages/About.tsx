import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/page-refresh/container-ship-twilight.jpg";
import aboutPhotoC from "@/assets/page-refresh/container-ship-aerial.jpg";
import aboutPhotoE from "@/assets/planning-desk.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const topStats = [
    { value: "15", suffix: "+", label: "Years Experience" },
    { value: "50", suffix: "+", label: "Global Suppliers" },
    { value: "98", suffix: "%", label: "On-Time Delivery" },
    { value: "20", suffix: "+", label: "Teams Led" },
  ];

  return (
    <motion.div className="min-h-screen bg-background" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navigation />

      <section className="relative pt-20 overflow-hidden">
        <div className="h-[44vh] md:h-[52vh] relative">
          <img src={aboutHero} alt="Container logistics at twilight" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <motion.div className="flex items-center gap-4 mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">About</p>
              </motion.div>
              <motion.h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                Mohammad A.
                <br />
                <span className="italic font-normal text-accent">Wasaya</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {topStats.map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm px-5 py-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              >
                <p className="flex min-h-[40px] items-end gap-[1px] text-foreground">
                  <span className="font-signature text-2xl md:text-3xl leading-none tracking-tight lining-nums">
                    {item.value}
                  </span>
                  <span className="translate-y-[-1px] font-body text-[1.45rem] font-semibold leading-none md:text-[1.7rem]">
                    {item.suffix}
                  </span>
                </p>
                <p className="mt-2 text-label text-muted-foreground/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12" ref={ref}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                <p className="text-foreground/90 text-lg leading-[1.8] font-body">
                  I'm a logistics, supply chain, and procurement professional with over 15 years of experience across the Gulf region. My work sits at the intersection of finance and operations — I build systems that move goods efficiently, reduce costs measurably, and scale reliably.
                </p>
                <p className="text-muted-foreground text-base leading-[1.8] font-body">
                  I've managed supply chains for food trading companies, led import/export operations as a founder, supervised logistics for German engineering firms, and coordinated major construction project logistics for UK contractors building airports across the Middle East.
                </p>
                <p className="text-muted-foreground text-base leading-[1.8] font-body">
                  What drives me is the challenge of making complex systems work better. Whether it's negotiating with 50+ suppliers to cut costs, implementing SAP to improve planning accuracy, or building a traceability system from farm to table — I bring a data-driven, systematic approach.
                </p>
              </motion.div>

              <motion.div className="flex items-start justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="w-full max-w-[320px] md:max-w-[340px] rounded-sm overflow-hidden border border-border/50 bg-card/70 p-3 md:p-4">
                  <div className="overflow-hidden rounded-sm bg-slate-100/70 dark:bg-slate-900/60">
                    <img
                      src={profilePhoto}
                      alt="Portrait of Mohammad A. Wasaya"
                      className="w-full aspect-[4/5] object-contain object-center"
                      loading="lazy"
                      width={420}
                      height={525}
                    />
                  </div>
                  <p className="mt-2 text-center text-[11px] uppercase tracking-[0.12em] text-muted-foreground/80">
                    Mohammad A. Wasaya
                  </p>
                  <p className="mt-1 text-center text-[10px] uppercase tracking-[0.16em] text-accent/80">
                    Supply Chain &amp; Logistics Leader
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <motion.div className="p-8 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
                <p className="text-label text-accent mb-6">Key Numbers</p>
                <div className="space-y-6">
                  {[
                    { num: "15+", label: "Years of experience" },
                    { num: "98%", label: "On-time delivery rate" },
                    { num: "50+", label: "Global suppliers managed" },
                    { num: "20+", label: "Team members led" },
                    { num: "5", label: "Languages spoken" },
                  ].map((stat) => (
                    <div key={stat.label} className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 group">
                      <span className="font-display text-2xl font-semibold tabular-nums lining-nums w-[5.5rem] text-right shrink-0 group-hover:text-accent transition-colors duration-500">
                        {stat.num}
                      </span>
                      <span className="text-muted-foreground text-sm font-body">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="p-8 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
                <p className="text-label text-accent mb-6">Education & Certs</p>
                <div className="space-y-4">
                  {[
                    { year: "2024", name: "CSCMP Supply Chain Foundations" },
                    { year: "2023", name: "SAP MM Materials Management" },
                    { year: "2019", name: "BS Business Administration" },
                    { year: "2016", name: "IOSH Managing Safely (UK)" },
                    { year: "2009", name: "PGD Logistics & SCM" },
                    { year: "2005", name: "BA Economics" },
                  ].map((ed) => (
                    <div key={ed.name} className="flex gap-4 group">
                      <span className="text-label text-muted-foreground/40 tabular-nums w-10 shrink-0 pt-0.5">{ed.year}</span>
                      <span className="text-foreground/80 text-sm font-body group-hover:text-accent transition-colors duration-300">{ed.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="p-8 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
                <div className="space-y-8">
                  <div>
                    <p className="text-label text-accent mb-3">Languages</p>
                    <p className="text-foreground/80 text-sm font-body">English · Arabic · Hindi · Urdu · Punjabi</p>
                  </div>
                  <div>
                    <p className="text-label text-accent mb-3">Location</p>
                    <p className="text-foreground/80 text-sm font-body">Jeddah, Saudi Arabia</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">Transferable Valid Iqama</p>
                  </div>
                  <div>
                    <p className="text-label text-accent mb-3">Interests</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">Forex trading, stock market analysis, geo-economics, and technology trends.</p>
                  </div>
                  <div>
                    <p className="text-label text-accent mb-3">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {["SAP", "Odoo", "Power BI", "SQL", "Excel"].map((t) => (
                        <span key={t} className="text-xs text-foreground/70 px-2.5 py-1 border border-border rounded-full font-body">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10">
            <motion.div
              className="rounded-sm border border-border/60 bg-card/50 backdrop-blur-sm p-7 md:p-9"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-accent mb-4">How I Work</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-6">
                Structured, measurable, and execution-focused.
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Diagnose Fast",
                    body: "Map bottlenecks, identify high-cost friction points, and prioritize the levers that move outcomes fastest.",
                  },
                  {
                    title: "Design Practical Systems",
                    body: "Build procurement, inventory, and logistics workflows that teams can actually operate under pressure.",
                  },
                  {
                    title: "Scale with Visibility",
                    body: "Define KPIs, reporting cadence, and ownership so improvements are trackable, repeatable, and durable.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-sm border border-border/50 bg-background/50 px-4 py-3">
                    <p className="font-display text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground font-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-sm border border-border/60 bg-gradient-to-br from-card/75 via-card/60 to-background/70 p-7 md:p-9"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-label text-accent mb-4">Current Focus</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
                I am currently focused on senior roles where strategy and execution are equally valued: building resilient supply chains,
                strengthening vendor ecosystems, and improving operating margins through disciplined, data-informed decision-making.
              </p>
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  "Supply Chain Leadership",
                  "Procurement Optimization",
                  "Trade Compliance",
                  "ERP + Analytics",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/75">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Sector Exposure",
                body: "Food trading, industrial materials, construction logistics, and cross-border project supply chains.",
              },
              {
                title: "Operating Regions",
                body: "Saudi Arabia, UAE, and broader Gulf-linked trade corridors with multi-country supplier coordination.",
              },
              {
                title: "Decision Style",
                body: "Balanced between strategic planning and execution rigor, with clear KPI ownership and risk controls.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6"
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
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-4">
            <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-56 md:h-72">
              <img
                src={aboutPhotoC}
                alt="Aerial logistics corridor"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div className="grid gap-4">
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-28 md:h-[8.75rem]">
                <img
                  src={aboutPhotoE}
                  alt="Planning desk with operational documents"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5">
                <p className="text-label text-accent mb-2">Visual Snapshot</p>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  End-to-end supply chain leadership across route planning, warehouse controls, and supplier performance governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
