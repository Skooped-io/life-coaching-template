import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Users, Zap, Crown } from "lucide-react";
import coachingSession from "@/assets/coaching-session.jpg";

export default function ServicesPage() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: detailRef, isVisible: detailVis } = useScrollReveal();

  const services = [
    {
      icon: Crown,
      name: "1-on-1 Coaching",
      price: "$297/month",
      desc: "Deep, personalized transformation with dedicated attention and support.",
      who: "Professionals & entrepreneurs ready for accelerated growth",
      includes: ["Weekly 60-minute sessions", "Unlimited voice/text support between sessions", "Custom action plans & frameworks", "Progress tracking dashboard", "Priority scheduling"],
      duration: "3–6 month commitment",
    },
    {
      icon: Zap,
      name: "VIP Intensive Day",
      price: "$2,500",
      desc: "A full day of deep-dive coaching to create your 90-day breakthrough roadmap.",
      who: "Leaders needing clarity on a major decision or transition",
      includes: ["8-hour intensive session", "Pre-session assessment & prep", "Custom 90-day action roadmap", "2 follow-up coaching calls", "Lifetime priority access"],
      duration: "One day + 90-day follow-up",
    },
    {
      icon: Users,
      name: "Group Coaching",
      price: "$149/month",
      desc: "The power of community coaching with peer accountability and shared growth.",
      who: "Anyone wanting coaching at an accessible investment",
      includes: ["Weekly 90-min group sessions", "Private online community", "Peer accountability pods", "Recorded workshops library", "Monthly 1-on-1 check-in"],
      duration: "12-week cohort program",
    },
  ];

  return (
    <>
      <section className="py-24 gradient-hero text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-balance">
            Programs & <span className="text-accent">Services</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Choose the coaching experience that aligns with where you are and where you want to go.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((s, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-start bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg shadow-black/5 ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mb-4">
                    <s.icon className="text-white" size={22} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2">{s.name}</h2>
                  <div className="text-2xl font-heading font-extrabold text-primary mb-1">{s.price}</div>
                  <p className="text-sm text-muted-foreground mb-4">{s.duration}</p>
                  <p className="text-foreground/80 leading-relaxed text-pretty mb-6">{s.desc}</p>
                  <p className="text-sm font-medium text-muted-foreground mb-6">
                    <strong className="text-foreground">Best for:</strong> {s.who}
                  </p>
                  <Button variant="gold" asChild>
                    <Link to="/contact">Apply Now <ArrowRight size={16} /></Link>
                  </Button>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {s.includes.map((item, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section ref={detailRef} className="py-24 bg-card">
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${detailVis ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={coachingSession} alt="Coaching session" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Corporate & Team <span className="text-primary">Coaching</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                I work with forward-thinking organizations to develop their leaders, improve team dynamics, 
                and create cultures of high performance and well-being. Available as workshops, retreats, 
                or ongoing team coaching engagements.
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Inquire About Corporate Programs <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center max-w-2xl">
          <Sparkles className="mx-auto mb-4 text-primary" size={32} />
          <h2 className="text-2xl font-heading font-bold mb-3">Not Sure Which Program Is Right?</h2>
          <p className="text-muted-foreground mb-6">
            Book a free 30-minute discovery call and we'll figure it out together.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Book a Free Call <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
