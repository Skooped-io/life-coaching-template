import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Headphones } from "lucide-react";
import { siteConfig } from "@/lib/config";
import SeoHead from "@/components/SeoHead";

export default function BlogPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <SeoHead page="blog" />
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
          {siteConfig.blogCategories.map((c, i) => (
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
            {siteConfig.blogPosts.map((p, i) => (
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
            The <span className="text-primary">{siteConfig.podcastName.replace("The ", "").replace(" Podcast", "")}</span> Podcast
          </h2>
          <div className="space-y-4">
            {siteConfig.podcasts.map((ep, i) => (
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
