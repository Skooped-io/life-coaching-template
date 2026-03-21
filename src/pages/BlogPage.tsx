import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Headphones } from "lucide-react";

const posts = [
  { title: "The 5 Mindset Shifts That Changed Everything for My Clients", category: "Mindset", date: "Mar 12, 2026", excerpt: "After coaching 500+ clients, these are the five internal shifts that consistently lead to breakthrough results." },
  { title: "Why High-Achievers Struggle with Fulfillment (And What to Do About It)", category: "Career", date: "Mar 5, 2026", excerpt: "You've checked every box society told you to check. So why does success feel so empty?" },
  { title: "How to Set Boundaries Without Burning Bridges", category: "Relationships", date: "Feb 26, 2026", excerpt: "The art of saying no without guilt — and why it's the most transformative skill you can develop." },
  { title: "The Morning Routine That Actually Works (Backed by Science)", category: "Productivity", date: "Feb 18, 2026", excerpt: "Forget the 4 AM wake-ups and cold plunges. Here's what actually moves the needle." },
  { title: "Imposter Syndrome Is Lying to You: Here's the Proof", category: "Mindset", date: "Feb 10, 2026", excerpt: "That voice telling you you're not good enough? It's using outdated data. Let's update the algorithm." },
  { title: "From Corporate Burnout to Purposeful Work: A Client's Story", category: "Career", date: "Feb 3, 2026", excerpt: "How one VP traded her corner office for a life that lights her up — and made more money doing it." },
];

const podcasts = [
  { title: "Ep. 47: The Art of Letting Go", duration: "42 min", date: "Mar 10, 2026" },
  { title: "Ep. 46: Money Mindset Masterclass", duration: "38 min", date: "Mar 3, 2026" },
  { title: "Ep. 45: Interview with Dr. Sarah Chen on Positive Intelligence", duration: "55 min", date: "Feb 24, 2026" },
];

const categories = ["All", "Mindset", "Career", "Relationships", "Productivity"];

export default function BlogPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <section className="py-24 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-balance">
            Blog & <span className="text-accent">Podcast</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Insights, strategies, and stories to fuel your personal and professional growth.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-card border-b border-border/50 sticky top-16 z-30 backdrop-blur-lg bg-card/90">
        <div className="container flex gap-2 overflow-x-auto">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={ref} className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <article
                key={i}
                className={`bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-black/5 group cursor-pointer hover:shadow-xl transition-all ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/40" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{p.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            The <span className="text-primary">Breakthrough</span> Podcast
          </h2>
          <div className="space-y-4">
            {podcasts.map((ep, i) => (
              <div key={i} className="bg-background rounded-xl p-5 border border-border/50 flex items-center gap-4 hover:border-primary/20 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center shrink-0">
                  <Headphones className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-sm truncate">{ep.title}</h3>
                  <p className="text-xs text-muted-foreground">{ep.date} · {ep.duration}</p>
                </div>
                <Button variant="ghost" size="sm">Listen</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
