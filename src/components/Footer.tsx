import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Elena <span className="text-accent">Torres</span>
            </h3>
            <p className="text-white/70 max-w-md text-pretty leading-relaxed">
              Certified ICF life &amp; executive coach helping professionals and entrepreneurs 
              transform their careers, relationships, and lives. Based in Austin, TX — coaching worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-accent">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Services", "Testimonials", "Blog", "Contact"].map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-accent">Connect</h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-white/50 mt-4">hello@elenatorres.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Elena Torres Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
