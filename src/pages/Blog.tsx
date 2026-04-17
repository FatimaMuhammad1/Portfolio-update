import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import blogHero from "@/assets/page-refresh/port-night.jpg";
import blogStrip from "@/assets/page-refresh/refrigerated-yard.jpg";
import blogCardStrategy from "@/assets/page-refresh/container-ship-twilight.jpg";
import blogCardTech from "@/assets/page-refresh/container-ship-aerial.jpg";
import blogCardProcurement from "@/assets/page-refresh/port-night.jpg";

const postImageById: Record<string, string> = {
  "supply-chain-resilience": blogCardStrategy,
  "erp-implementation-lessons": blogCardTech,
  "supplier-negotiation-strategies": blogCardProcurement,
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filtered =
    activeCategory === "ALL"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

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
            src={blogHero}
            alt="Logistics leadership and planning environment"
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
                <p className="text-label text-accent">Writing</p>
              </motion.div>
              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                Insights
              </motion.h1>
              <motion.p
                className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Practical perspectives on supply chain management, procurement strategy,
                and operational leadership.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-body font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent"
                    : "text-muted-foreground border-border hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-6 md:pb-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            className="rounded-sm border border-accent/25 bg-accent/10 p-6 md:p-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <p className="text-label text-accent mb-2">New Here?</p>
                <p className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-2">
                  Start with strategy, then move into execution.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                  The collection is designed to move from high-level thinking to practical implementation in operations and procurement.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Strategy",
                  "Technology",
                  "Procurement",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-accent/30 bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-6 md:pb-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-4">
            <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-44 md:h-56">
              <img
                src={blogStrip}
                alt="Global freight lane visual"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-5 md:p-6 flex items-end">
              <p className="text-sm leading-relaxed text-muted-foreground font-body">
                Each article is grounded in operational context: global routes, supplier risk, process controls, and leadership execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-12 md:pb-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid xl:grid-cols-[1fr_320px] gap-8 xl:gap-10">
            <div className="space-y-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="group block p-4 md:p-5 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500 hover-lift"
                  >
                    <div className="grid gap-4 md:grid-cols-[210px_1fr] md:items-start">
                      <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-36 md:h-full md:min-h-[148px]">
                        <img
                          src={postImageById[post.id] ?? blogCardStrategy}
                          alt={`${post.title} visual`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 text-label text-muted-foreground/60 mb-3">
                          <span className="text-accent">{post.category}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h2 className="font-display text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors duration-300 mb-3">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl font-body">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-label text-accent/60 group-hover:text-accent transition-colors duration-300">
                          Read More
                          <span className="inline-block w-4 h-[2px] bg-accent/40 group-hover:w-8 group-hover:bg-accent transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.aside
              className="space-y-5 xl:sticky xl:top-24 h-fit"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-6">
                <p className="text-label text-accent mb-3">Editorial Focus</p>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  Actionable writing on supply chain resilience, procurement execution, and the operational systems behind sustainable growth.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-6">
                <p className="text-label text-accent mb-4">Popular Topics</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Resilience",
                    "Supplier Strategy",
                    "ERP Rollouts",
                    "Forecasting",
                    "Compliance",
                    "Cost Optimization",
                  ].map((topic) => (
                    <span key={topic} className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/75">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border border-accent/25 bg-accent/10 p-6">
                <p className="text-label text-accent mb-2">Reading Time</p>
                <p className="font-display text-2xl font-semibold mb-2">Practical and concise</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Most posts are 5-minute reads focused on decisions leaders can apply immediately.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Blog;

