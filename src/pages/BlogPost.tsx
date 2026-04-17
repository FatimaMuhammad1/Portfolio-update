import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import postHeroStrategy from "@/assets/page-refresh/container-ship-twilight.jpg";
import postHeroTech from "@/assets/page-refresh/container-ship-aerial.jpg";
import postHeroProcurement from "@/assets/page-refresh/port-night.jpg";
import postInlineVisual from "@/assets/page-refresh/refrigerated-yard.jpg";

const postHeroById: Record<string, string> = {
  "supply-chain-resilience": postHeroStrategy,
  "erp-implementation-lessons": postHeroTech,
  "supplier-negotiation-strategies": postHeroProcurement,
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h1 className="font-display text-4xl font-semibold mb-6">Post Not Found</h1>
            <Link to="/blog" className="text-label text-accent hover:text-foreground transition-colors duration-300">
              Back to Insights
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold mt-10 mb-5">
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("- ")) {
          return (
            <li key={i} className="text-muted-foreground text-base leading-[1.85] ml-5 mb-1 list-disc font-body">
              {trimmed.slice(2)}
            </li>
          );
        }
        return (
          <p key={i} className="text-muted-foreground text-base leading-[1.85] mb-5 font-body">
            {trimmed}
          </p>
        );
      })
      .filter(Boolean);
  };

  const postHero = postHeroById[post.id] ?? postHeroStrategy;

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      <section className="relative pt-20 overflow-hidden">
        <div className="h-[40vh] md:h-[46vh] relative">
          <img
            src={postHero}
            alt={`${post.title} cover visual`}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl">
              <p className="text-label text-accent mb-3">{post.category}</p>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.03em]">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <article className="pt-8 pb-12 md:pb-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link
                to="/blog"
                className="text-label text-accent hover:text-foreground transition-colors duration-300 mb-8 inline-block"
              >
                Back to Insights
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 text-label text-muted-foreground/60 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-accent">{post.category}</span>
              <span>-</span>
              <span>{post.date}</span>
              <span>-</span>
              <span>{post.readTime}</span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-10 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              className="mb-10 img-zoom rounded-sm overflow-hidden border border-border/60 h-52 md:h-64"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={postInlineVisual}
                alt="Operational logistics context visual"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </motion.div>

            <motion.div
              className="mb-10 grid sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-4">
                <p className="text-label text-muted-foreground/70 mb-1">Category</p>
                <p className="font-semibold text-sm">{post.category}</p>
              </div>
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-4">
                <p className="text-label text-muted-foreground/70 mb-1">Published</p>
                <p className="font-semibold text-sm">{post.date}</p>
              </div>
              <div className="rounded-sm border border-border/60 bg-card/55 backdrop-blur-sm p-4">
                <p className="text-label text-muted-foreground/70 mb-1">Read Time</p>
                <p className="font-semibold text-sm">{post.readTime}</p>
              </div>
            </motion.div>

            <motion.div
              className="border-t border-border pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {renderContent(post.content)}
            </motion.div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-label text-accent mb-1">Written by</p>
              <p className="font-display text-xl font-semibold">{post.author}</p>
            </div>

            <div className="mt-8 rounded-sm border border-accent/25 bg-accent/10 p-6 md:p-7">
              <p className="text-label text-accent mb-3">Need Support Applying This?</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body mb-4">
                If this topic aligns with your current operational challenges, let's discuss how these ideas can be translated into practical execution for your team.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-label text-accent hover:text-foreground transition-colors duration-300">
                Discuss a real-world use case
                <span className="inline-block w-4 h-[2px] bg-accent/60" />
              </Link>
            </div>

            {blogPosts.filter((p) => p.id !== post.id).length > 0 && (
              <div className="mt-8">
                <p className="text-label text-accent mb-6">More Insights</p>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 2)
                    .map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.id}`}
                        className="block p-4 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-accent/20 transition-all duration-500 hover-lift group"
                      >
                        <div className="grid gap-4 sm:grid-cols-[150px_1fr] sm:items-center">
                          <div className="img-zoom rounded-sm overflow-hidden border border-border/50 h-28 sm:h-24">
                            <img
                              src={postHeroById[related.id] ?? postHeroStrategy}
                              alt={`${related.title} thumbnail`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width={1920}
                              height={1080}
                            />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors duration-300 mb-1">
                              {related.title}
                            </h3>
                            <p className="text-label text-muted-foreground/60">
                              {related.date} - {related.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default BlogPost;
