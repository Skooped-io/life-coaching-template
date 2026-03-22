import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { siteConfig, slugify } from "@/lib/config";

const serviceContent: Record<string, { paragraphs: string[]; process: string[] }> = {
  "1-on-1-coaching": {
    paragraphs: [
      "Personalized coaching is the fastest path to transformation. In our private sessions, we dive deep into what's holding you back, clarify your vision, and build a concrete plan to get you there — with full accountability and support along the way.",
      "Every session is tailored to your unique situation. Whether you're navigating a career transition, building confidence as a leader, or reclaiming balance in your life, we work together on the strategies and mindset shifts that create lasting change.",
      "Between sessions, you have direct access to me via voice and text for real-time support when challenges arise. This isn't a once-a-week check-in — it's an ongoing partnership designed around your growth."
    ],
    process: [
      "Initial deep-dive assessment to map your starting point and goals",
      "Weekly 60-minute coaching sessions via video or in person",
      "Custom frameworks and action plans tailored to your situation",
      "Unlimited between-session support via voice or text",
      "Monthly progress reviews and strategy recalibration"
    ]
  },
  "vip-intensive-day": {
    paragraphs: [
      "The VIP Intensive is for leaders and entrepreneurs who want massive clarity in minimal time. In a single focused day, we accomplish what typically takes months of weekly sessions — mapping your vision, removing blocks, and building a 90-day action roadmap.",
      "This immersive experience is designed for pivotal moments: a career crossroads, a business launch, a leadership challenge, or a life transition that demands immediate clarity and confident action.",
      "The day doesn't end when we wrap up. You leave with a detailed action plan and receive two follow-up coaching calls over the next 90 days to ensure you stay on track and adjust as needed."
    ],
    process: [
      "Pre-session assessment and goal-setting questionnaire",
      "Full 8-hour intensive session (in-person or virtual)",
      "Deep-dive into your vision, values, and obstacles",
      "Custom 90-day breakthrough roadmap creation",
      "Two follow-up coaching calls within 90 days"
    ]
  },
  "group-coaching": {
    paragraphs: [
      "Group coaching combines the power of expert guidance with the energy and accountability of a supportive community. Each 12-week cohort is carefully curated to create a space where breakthroughs happen — not just for you, but through shared learning and connection.",
      "In weekly sessions, we work through proven frameworks for clarity, confidence, and action. You'll be paired with an accountability partner and placed in a small pod to keep momentum high between our group calls.",
      "This program is ideal for anyone who wants the benefits of coaching at an accessible investment — without sacrificing depth, results, or personal attention."
    ],
    process: [
      "Application and cohort matching process",
      "Weekly 90-minute group coaching sessions",
      "Peer accountability pods for between-session support",
      "Access to a private online community",
      "Monthly individual check-in call with Elena"
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollReveal();
  const { ref: relatedRef, isVisible: relatedVis } = useScrollReveal();

  const service = siteConfig.services.find((s) => slugify(s.name) === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} in ${siteConfig.address.city}, ${siteConfig.address.state} | ${siteConfig.businessName}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          `${service.name} with ${siteConfig.businessName} in ${siteConfig.address.city}, ${siteConfig.address.state}. ${service.desc}`
        );
      }
    }
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const content = serviceContent[slug!] || serviceContent["1-on-1-coaching"];
  const relatedServices = siteConfig.services.filter((s) => slugify(s.name) !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phone || undefined,
    },
    areaServed: siteConfig.serviceArea,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="py-24 gradient-hero text-white">
        <div className="container">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white/80 transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{service.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-balance">
            {service.name}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">{service.desc}</p>
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <span className="text-2xl font-heading font-extrabold text-accent">{service.price}</span>
            <span className="text-white/50 text-sm">{service.duration}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section ref={ref} className="py-24 bg-background">
        <div className="container">
          <div className={`grid lg:grid-cols-3 gap-12 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-5">
                {content.paragraphs.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed text-pretty">{p}</p>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">The Process</h2>
                <ol className="space-y-4">
                  {content.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center shrink-0 text-white text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-foreground/80 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  <strong className="text-foreground">Best for:</strong> {service.who}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-lg shadow-black/5 space-y-4">
                <h3 className="font-heading font-bold text-lg">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground">Book a free 30-minute discovery call to see if this program is the right fit.</p>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/contact">Book a Free Call <ArrowRight size={16} /></Link>
                </Button>
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Phone size={14} /> {siteConfig.phone}
                  </a>
                )}
              </div>

              {/* NAP */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-lg shadow-black/5 space-y-3">
                <h3 className="font-heading font-bold text-lg">{siteConfig.businessName}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>{siteConfig.address.full}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="mt-0.5 shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
                  </div>
                  {siteConfig.phone && (
                    <div className="flex items-start gap-2">
                      <Phone size={14} className="mt-0.5 shrink-0" />
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground/60 pt-1">Serving {siteConfig.serviceArea}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section ref={relatedRef} className="py-20 bg-card">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Other Programs</h2>
          <div className={`grid md:grid-cols-${Math.min(relatedServices.length, 3)} gap-6 max-w-4xl mx-auto ${relatedVis ? "animate-reveal-up" : "opacity-0"}`}>
            {relatedServices.map((rs, i) => (
              <Link
                key={i}
                to={`/services/${slugify(rs.name)}`}
                className="bg-background rounded-2xl border border-border/50 p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">{rs.name}</h3>
                <p className="text-sm text-primary font-heading font-extrabold mb-2">{rs.priceShort}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{rs.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center max-w-2xl">
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
