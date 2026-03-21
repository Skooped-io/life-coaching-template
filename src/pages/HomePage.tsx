import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Sparkles, Users, Award, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import coachPortrait from "@/assets/coach-portrait.jpg";
import coachStage from "@/assets/coach-stage.jpg";
import coachingSession from "@/assets/coaching-session.jpg";

// ─── Hero ───────────────────────────────────────────────
function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
      
      <div className="container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-accent mb-6">
              <Sparkles size={14} /> ICF Certified Life & Executive Coach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.05] text-balance mb-6">
              Transform Your Life,{" "}
              <span className="text-accent">Starting Today.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-lg text-pretty leading-relaxed mb-8">
              Unlock your full potential and create the life you've been dreaming about. 
              Through proven coaching methodologies, I'll help you break through limitations 
              and step into your most powerful self.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Book a Discovery Call <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play size={18} /> Watch My Story
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img src={coachPortrait} alt="Elena Torres — Life & Executive Coach" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-2xl -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 rounded-2xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Credibility Bar ────────────────────────────────────
function CredibilityBar() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { icon: Users, value: "500+", label: "Clients Transformed" },
    { icon: Calendar, value: "12", label: "Years Coaching" },
    { icon: Award, value: "ICF PCC", label: "Certified Coach" },
    { icon: Sparkles, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="relative -mt-12 z-20">
      <div className="container">
        <div
          className={`bg-card rounded-2xl shadow-xl shadow-black/5 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center" style={{ animationDelay: `${i * 80}ms` }}>
              <s.icon className="mx-auto mb-2 text-primary" size={28} />
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-foreground tabular-nums">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Who I Help ─────────────────────────────────────────
function WhoIHelp() {
  const { ref, isVisible } = useScrollReveal();
  const personas = [
    {
      title: "Professionals Feeling Stuck",
      desc: "You've achieved success on paper, but something feels off. You're craving purpose, direction, and that spark you once had.",
      cta: "That's Me",
    },
    {
      title: "Entrepreneurs Scaling Up",
      desc: "You're building something meaningful but overwhelmed by decisions. You need clarity, strategy, and someone who gets it.",
      cta: "That's Me",
    },
    {
      title: "Anyone Ready for Change",
      desc: "You know there's more to life. You're done waiting and ready to take bold action toward the version of yourself you know you can be.",
      cta: "That's Me",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">
            Who I <span className="text-primary">Help</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you're navigating a career pivot, scaling a business, or seeking deeper fulfillment — I've guided hundreds through exactly where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <div
              key={i}
              className={`group bg-card rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-border/50 hover:border-primary/20 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed mb-6">{p.desc}</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">{p.cta} <ArrowRight size={14} /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Transformation ─────────────────────────────────────
function Transformation() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    { from: "Overwhelmed", to: "Focused & Clear" },
    { from: "Stuck in Place", to: "Moving Forward" },
    { from: "Self-Doubt", to: "Unshakeable Confidence" },
    { from: "Burnt Out", to: "Energized & Aligned" },
  ];

  return (
    <section ref={ref} className="py-28 gradient-cta diagonal-both text-white">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">
            Your <span className="text-accent">Transformation</span> Awaits
          </h2>
          <p className="text-white/65 max-w-xl mx-auto">
            This is the shift my clients experience — and it can happen for you too.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="text-right flex-1">
                <span className="text-white/50 line-through text-lg">{item.from}</span>
              </div>
              <ArrowRight className="text-accent shrink-0" size={24} />
              <div className="flex-1">
                <span className="text-accent font-heading font-bold text-lg">{item.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Programs ───────────────────────────────────────────
function Programs() {
  const { ref, isVisible } = useScrollReveal();
  const tiers = [
    {
      name: "1-on-1 Coaching",
      price: "$297/mo",
      duration: "3–6 month commitment",
      features: ["Weekly 60-min sessions", "Unlimited voice/text support", "Personalized action plans", "Accountability tracking"],
      highlight: false,
    },
    {
      name: "VIP Intensive",
      price: "$2,500",
      duration: "Full-day deep dive",
      features: ["8-hour intensive session", "90-day action roadmap", "2 follow-up calls", "Priority access forever"],
      highlight: true,
    },
    {
      name: "Group Program",
      price: "$149/mo",
      duration: "12-week cohort",
      features: ["Weekly group sessions", "Private community access", "Peer accountability", "Recorded workshops"],
      highlight: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">
            Programs & <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the coaching experience that fits your goals and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                tier.highlight
                  ? "bg-card border-primary shadow-2xl shadow-primary/15 scale-[1.02]"
                  : "bg-card border-border/50 shadow-lg shadow-black/5 hover:shadow-xl"
              } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-heading font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">{tier.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{tier.duration}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Sparkles size={12} className="text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? "gold" : "default"} className="w-full" asChild>
                <Link to="/contact">
                  {tier.highlight ? "Apply Now" : "Learn More"} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────
function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const testimonials = [
    {
      quote: "Elena completely changed my trajectory. I went from dreading Monday mornings to running a business I'm passionate about. Her ability to see your potential when you can't is a gift.",
      name: "Sarah Mitchell",
      title: "Founder, Bloom Creative",
      result: "Left corporate & launched her dream business",
    },
    {
      quote: "I was skeptical about coaching, but within three months I had more clarity about my career than I'd gained in ten years. The investment paid for itself tenfold.",
      name: "Marcus Chen",
      title: "VP of Engineering, TechScale",
      result: "Promoted twice in 18 months",
    },
    {
      quote: "Working with Elena gave me the confidence to charge what I'm worth and set boundaries that transformed not just my business, but my relationships and health too.",
      name: "Priya Desai",
      title: "Executive Coach & Consultant",
      result: "Doubled her income in one year",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">
            Real People, Real <span className="text-primary">Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background rounded-2xl p-8 border border-border/50 shadow-lg shadow-black/5 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, si) => (
                  <Sparkles key={si} size={16} />
                ))}
              </div>
              <blockquote className="text-foreground text-pretty leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-purple flex items-center justify-center text-white font-heading font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
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
  );
}

// ─── Free Resource ──────────────────────────────────────
function FreeResource() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto bg-card rounded-2xl p-10 md:p-14 shadow-xl shadow-black/5 border border-border/50 text-center ${
            isVisible ? "animate-reveal-scale" : "opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-bold mb-4">
            <Sparkles size={12} className="text-accent" /> FREE GUIDE
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-balance">
            5 Steps to Breakthrough Clarity
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-pretty">
            Get the exact framework I use with my private clients to cut through confusion and create unstoppable momentum.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your best email"
              className="flex-1 h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="gold" size="lg">
              Get Free Guide <ArrowRight size={16} />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────
function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-28 gradient-cta diagonal-top text-white">
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-balance leading-tight">
            Your breakthrough is one conversation away.
          </h2>
          <p className="text-white/65 text-lg mb-8 text-pretty">
            Stop waiting for the "right time." The right time is now. 
            Let's talk about where you are, where you want to be, and how to close the gap.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Book Your Free Discovery Call <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Homepage ───────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <WhoIHelp />
      <Transformation />
      <Programs />
      <Testimonials />
      <FreeResource />
      <FinalCTA />
    </>
  );
}
