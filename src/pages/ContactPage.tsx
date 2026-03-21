import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Linkedin, Youtube, Mail, Podcast } from "lucide-react";

export default function ContactPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <section className="py-24 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-balance">
            Book Your Free <span className="text-accent">Discovery Call</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Let's have an honest conversation about where you are, where you want to be, and whether we're a good fit.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-background">
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            {/* Calendar placeholder */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Schedule a Time</h2>
              <div className="bg-card rounded-2xl border border-border/50 shadow-lg shadow-black/5 p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-purple flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-white" size={28} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">Calendly embed placeholder</p>
                  <p className="text-xs text-muted-foreground">Your scheduling widget goes here</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Or Send a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">What are you looking to transform?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your goals, challenges, or what's on your mind..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">How did you hear about me?</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select one...</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>Podcast</option>
                    <option>Referral</option>
                    <option>Google Search</option>
                    <option>Other</option>
                  </select>
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <h3 className="font-heading font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Youtube, label: "YouTube" },
                    { icon: Podcast, label: "Podcast" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      title={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
