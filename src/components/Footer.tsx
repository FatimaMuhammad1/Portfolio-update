import { Linkedin, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            
            <div className="md:col-span-5">
              <p className="font-display text-[2.6rem] font-semibold text-foreground tracking-tight leading-none">Mohammad</p>
              <p className="mt-6 text-muted-foreground text-[15px] font-body leading-[2.15] max-w-[340px]">
                Supply chain, procurement, logistics, and customs leadership focused on cleaner execution, tighter control, and practical results.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-5">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1ea1d7]">QUICK LINKS</p>
                <div className="space-y-4">
                  {[
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                    { href: "/insights", label: "Insights" },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="block text-[15px] text-foreground hover:text-[#1ea1d7] transition-colors duration-300 font-body">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="space-y-5">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1ea1d7]">OPERATIONS</p>
                <div className="space-y-4">
                  <p className="text-[15px] text-muted-foreground font-body">Procurement and sourcing</p>
                  <p className="text-[15px] text-muted-foreground font-body">Logistics and customs</p>
                  <p className="text-[15px] text-muted-foreground font-body">ERP-led process control</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-5">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1ea1d7]">SOCIAL MEDIA</p>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/mohammad-allah-wasaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-foreground hover:text-[#1ea1d7] transition-colors duration-300 font-body">
                    <Linkedin className="w-[18px] h-[18px] text-muted-foreground" strokeWidth={1.5} />
                    LinkedIn
                  </a>
                  <a href="https://wa.me/966548771269" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-foreground hover:text-[#1ea1d7] transition-colors duration-300 font-body">
                    <MessageCircle className="w-[18px] h-[18px] text-muted-foreground" strokeWidth={1.5} />
                    WhatsApp
                  </a>
                  <div className="flex items-center gap-3 text-[15px] text-muted-foreground font-body">
                    <MapPin className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    Jeddah, Saudi Arabia
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-2 border-t border-border pt-3 flex items-center justify-center">
            <p className="text-[13.5px] text-muted-foreground font-body text-center">
              Copyright 2026 Mohammad A. Wasaya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
