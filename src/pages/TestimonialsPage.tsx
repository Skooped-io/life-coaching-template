import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const testimonials = [
  { quote: "Elena completely changed my trajectory. I went from dreading Monday mornings to running a business I'm passionate about.", name: "Sarah Mitchell", title: "Founder, Bloom Creative", result: "Left corporate & launched her dream business" },
  { quote: "I was skeptical about coaching, but within three months I had more clarity about my career than I'd gained in ten years.", name: "Marcus Chen", title: "VP of Engineering, TechScale", result: "Promoted twice in 18 months" },
  { quote: "Working with Elena gave me the confidence to charge what I'm worth and set boundaries that transformed not just my business, but my relationships.", name: "Priya Desai", title: "Executive Coach & Consultant", result: "Doubled her income in one year" },
  { quote: "I came to Elena feeling completely burnt out. Six months later, I'm running my team with more energy than I've had in years and my health is back on track.", name: "James Walker", title: "Director of Operations, Meridian Group", result: "Overcame burnout, got promoted" },
  { quote: "The group coaching program was exactly what I needed. The community support combined with Elena's expertise created real momentum.", name: "Aisha Okonkwo", title: "Freelance Designer", result: "Tripled her client base" },
  { quote: "Elena helped me find the courage to leave a 15-year career and start something truly aligned with my values. Best decision I ever made.", name: "David Rousseau", title: "Founder, GreenPath Consulting", result: "Successful career pivot at 42" },
];

export default function TestimonialsPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <section className="py-24 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-balance">
            Client <span className="text-accent">Success Stories</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Real transformations from real people. These are the stories that inspire me to keep doing this work.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-lg shadow-black/5 flex flex-col ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, si) => <Sparkles key={si} size={14} />)}
                </div>
                <blockquote className="text-foreground/85 text-pretty leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-purple flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs font-semibold text-primary">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials placeholder */}
      <section className="py-24 bg-card">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Video <span className="text-primary">Testimonials</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Sarah's Story", "Marcus's Journey", "Priya's Transformation"].map((title, i) => (
              <div key={i} className="bg-secondary/80 rounded-2xl aspect-video flex items-center justify-center cursor-pointer group hover:bg-secondary transition-colors">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-heading font-bold mb-3">Ready to Write Your Own Success Story?</h2>
          <p className="text-muted-foreground mb-6">Your transformation starts with a single conversation.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Book a Discovery Call <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
