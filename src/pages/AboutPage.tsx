import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Sparkles, BookOpen } from "lucide-react";
import { siteConfig, getImage } from "@/lib/config";
import coachPortrait from "@/assets/coach-portrait.jpg";
import coachStage from "@/assets/coach-stage.jpg";
import SeoHead from "@/components/SeoHead";

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVis } = useScrollReveal();
  const { ref: storyRef, isVisible: storyVis } = useScrollReveal();
  const { ref: philRef, isVisible: philVis } = useScrollReveal();

  const credentials = [
    { icon: Award, title: siteConfig.certifications[0], desc: "Professional Certified Coach credential" },
    { icon: BookOpen, title: siteConfig.certifications[1], desc: "Certified Neuro-Linguistic Programming" },
    { icon: Sparkles, title: siteConfig.certifications[2], desc: "Mental fitness certified coach" },
    { icon: Heart, title: siteConfig.certifications[3], desc: "Body-mind integration specialist" },
  ];

  return (
    <>
      <SeoHead page="about" />
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-background">
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${heroVis ? "animate-reveal-up" : "opacity-0"}`}>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                <Heart size={12} /> About {siteConfig.businessName}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 text-balance">
                I Believe Everyone Deserves to Live a Life That <span className="text-primary">Lights Them Up.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                {siteConfig.about}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={getImage(null, 'about', coachPortrait)}
                alt={siteConfig.businessName}
                className="w-full h-auto object-cover"
                data-image-slot="about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-24 bg-card">
        <div className="container max-w-3xl">
          <div className={`${storyVis ? "animate-reveal-up" : "opacity-0"}`}>
            <h2 className="text-3xl font-heading font-bold mb-8 text-balance">My Story</h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-pretty">
              {siteConfig.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section ref={philRef} className="py-24 bg-background">
        <div className="container">
          <div className={`text-center mb-16 ${philVis ? "animate-reveal-up" : "opacity-0"}`}>
            <h2 className="text-3xl font-heading font-bold mb-4">Credentials & <span className="text-primary">Training</span></h2>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${philVis ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            {credentials.map((c, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg shadow-black/5 text-center">
                <c.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="font-heading font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getImage(null, 'speaking', coachStage)}
                alt={`${siteConfig.businessName} speaking on stage`}
                className="w-full h-auto object-cover"
                data-image-slot="speaking"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Speaking & <span className="text-primary">Media</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {siteConfig.speakingBio}
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Book Me to Speak <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
