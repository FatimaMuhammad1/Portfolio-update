const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="font-display text-2xl font-semibold mb-3">Mohammad</p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Supply chain and logistics leader with 15+ years of
                experience across the Gulf region.
              </p>
            </div>
            <div>
              <p className="text-label text-accent mb-4">Quick Links</p>
              <div className="space-y-2">
                {[
                  { href: "/work", label: "Experience" },
                  { href: "/services", label: "Expertise" },
                  { href: "/about", label: "About" },
                  { href: "/blog", label: "Insights" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-label text-accent mb-4">Connect</p>
              <div className="space-y-2">
                <a href="mailto:mohammad.allahwasaya@yahoo.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
                  mohammad.allahwasaya@yahoo.com
                </a>
                <a href="https://www.linkedin.com/in/mohammad-allah-wasaya" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/60 font-body">
              © {new Date().getFullYear()} Mohammad A. Wasaya. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/40 font-body">
              Jeddah, Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
