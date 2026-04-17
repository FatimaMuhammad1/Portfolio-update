import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Briefcase, Monitor, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/page-refresh/refrigerated-yard.jpg";
import servicesStripA from "@/assets/page-refresh/container-ship-aerial.jpg";
import servicesStripB from "@/assets/page-refresh/container-ship-twilight.jpg";
import servicesExecutionA from "@/assets/cargo-wake.jpg";
import servicesExecutionB from "@/assets/page-refresh/port-night.jpg";

const expertise = [
  {
    category: "Operations", icon: Cog,
    skills: [
      { name: "Supply Chain Management", detail: "End-to-end strategy, demand forecasting, and lean optimization" },
      { name: "Logistics Operations", detail: "International shipping, route optimization, and 3PL management" },
      { name: "Warehouse Management", detail: "Layout design, inventory control, and process automation" },
      { name: "Quality Assurance", detail: "QA/QC compliance, ISO certification, and traceability systems" },
    ],
  },
  {
    category: "Commercial", icon: Briefcase,
    skills: [
      { name: "Procurement Strategy", detail: "Vendor sourcing, contract negotiation, and cost optimization" },
      { name: "International Trade", detail: "Import/export documentation, customs compliance, and LC/SBLC banking" },
      { name: "Supplier Relations", detail: "Global supplier management, performance evaluation, and strategic partnerships" },
      { name: "Financial Oversight", detail: "Budgeting, forecasting, and P&L management" },
    ],
  },
  {
    category: "Technology", icon: Monitor,
    skills: [
      { name: "ERP Systems", detail: "SAP MM, Odoo, Blue Beam implementation and management" },
      { name: "Data & Analytics", detail: "Power BI, SQL, Databricks, and advanced Excel modeling" },
      { name: "Process Automation", detail: "Workflow optimization and digital transformation initiatives" },
    ],
  },
  {
    category: "Leadership", icon: Target,
    skills: [
      { name: "Team Management", detail: "Cross-functional teams of 20+, mentoring, and talent development" },
      { name: "Stakeholder Management", detail: "Executive reporting, investor relations, and regulatory bodies" },
      { name: "Risk Management", detail: "Compliance frameworks, mitigation protocols, and crisis management" },
      { name: "Project Management", detail: "Agile methodology, milestone tracking, and cross-border coordination" },
    ],
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div className="min-h-screen bg-background" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navigation />

      <section className="relative pt-20 overflow-hidden">
        <div className="h-[44vh] md:h-[52vh] relative">
          <img src={servicesHero} alt="Refrigerated logistics terminal operations" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <motion.div className="flex items-center gap-4 mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <span className="inline-block w-12 h-[2px] bg-accent" />
                <p className="text-label text-accent">Capabilities</p>
              </motion.div>
              <motion.h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                Expertise
              </motion.h1>
              <motion.p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                A comprehensive skill set spanning operations, commercial strategy, technology, and leadership — built across 15+ years in the field.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div className="img-zoom rounded-sm overflow-hidden h-40 md:h-56 md:col-span-2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <img src={servicesStripA} alt="Container vessel at sea lane" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
            </motion.div>
            <motion.div className="img-zoom rounded-sm overflow-hidden h-40 md:h-56" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
              <img src={servicesStripB} alt="Twilight freight corridor" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "20%", label: "Cost Reduction Programs" },
              { value: "98%+", label: "Delivery Reliability" },
              { value: "50+", label: "Supplier Network" },
              { value: "100%", label: "Compliance Track Record" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-display text-2xl md:text-3xl font-semibold leading-none">{item.value}</p>
                <p className="mt-2 text-label text-muted-foreground/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12" ref={ref}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-8">
            {expertise.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.category} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: gi * 0.15 }}>
                  <div className="flex items-center gap-4 mb-8">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    <p className="text-label text-accent">{group.category}</p>
                    <span className="flex-1 h-[1px] bg-border" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="p-6 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500 hover-lift group">
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">{skill.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-body">{skill.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto rounded-sm border border-border/60 bg-card/45 backdrop-blur-sm p-7 md:p-10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
              <div>
                <p className="text-label text-accent mb-4">Delivery Model</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  From assessment to execution with measurable impact.
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground font-body">
                  Every engagement follows a clear operating rhythm to reduce uncertainty and accelerate results without disrupting critical workflows.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Assess & Prioritize",
                    body: "Audit process flow, supplier performance, and cost drivers to isolate the highest-value opportunities.",
                  },
                  {
                    step: "02",
                    title: "Design & Implement",
                    body: "Deploy practical SOPs, governance rules, and data dashboards aligned to real operational constraints.",
                  },
                  {
                    step: "03",
                    title: "Stabilize & Scale",
                    body: "Track KPIs, coach teams, and institutionalize routines that sustain gains over the long term.",
                  },
                ].map((item) => (
                  <div key={item.step} className="rounded-sm border border-border/55 bg-background/50 p-4 md:p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-label text-accent">{item.step}</span>
                      <p className="font-display text-lg font-semibold">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-body">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4">
            <motion.div
              className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-6 md:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-label text-accent mb-4">Core Tooling</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "SAP MM",
                  "Odoo",
                  "Power BI",
                  "SQL",
                  "Databricks",
                  "Advanced Excel",
                  "Blue Beam",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/75">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-6 md:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p className="text-label text-accent mb-4">Engagement Formats</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Transformation Roadmaps",
                  "Interim Leadership",
                  "Process Audits",
                  "Procurement Programs",
                ].map((item) => (
                  <div key={item} className="rounded-sm border border-border/55 bg-background/50 px-3.5 py-2.5">
                    <p className="text-sm font-semibold text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-4">
            <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6">
              <p className="text-label text-accent mb-3">Execution In Practice</p>
              <p className="text-sm leading-relaxed text-muted-foreground font-body">
                Practical operations capability means systems that survive real conditions: congestion, lead-time volatility, customs friction, and supplier variability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-36 md:h-44">
                <img
                  src={servicesExecutionA}
                  alt="Logistics coordination scene"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-36 md:h-44">
                <img
                  src={servicesExecutionB}
                  alt="Port activity at night"
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

      <Footer />
    </motion.div>
  );
};

export default Services;
