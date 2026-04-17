import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import notFoundBackdrop from "@/assets/page-refresh/container-ship-twilight.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <Navigation />

      <section className="relative overflow-hidden pt-22 pb-20 md:pt-28 md:pb-24">
        <img
          src={notFoundBackdrop}
          alt="Maritime logistics backdrop"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/82 via-background/78 to-background/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.12),transparent_40%),radial-gradient(circle_at_85%_75%,hsl(var(--accent)/0.08),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto rounded-sm border border-border/60 bg-card/60 backdrop-blur-sm p-8 md:p-12 text-center">
            <p className="text-label text-accent mb-4">Page Not Found</p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-none mb-4">404</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body mb-8">
              The page you requested does not exist or has been moved. You can continue by heading back home or exploring key sections.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link
                to="/"
                className="inline-flex items-center rounded-sm border border-accent/40 bg-accent/15 px-5 py-2.5 text-label text-accent hover:bg-accent/20 transition-colors duration-300"
              >
                Return Home
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center rounded-sm border border-border/70 bg-background/70 px-5 py-2.5 text-label text-foreground/80 hover:border-accent/35 hover:text-accent transition-colors duration-300"
              >
                View Experience
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-sm border border-border/70 bg-background/70 px-5 py-2.5 text-label text-foreground/80 hover:border-accent/35 hover:text-accent transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            <p className="text-xs text-muted-foreground/80 font-body">
              Requested path: <span className="font-semibold text-foreground/70">{location.pathname}</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default NotFound;
