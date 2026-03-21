import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Sparkles, BookOpen } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";
import coachStage from "@/assets/coach-stage.jpg";

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVis } = useScrollReveal();
  const { ref: storyRef, isVisible: storyVis } = useScrollReveal();
  const { ref: philRef, isVisible: philVis } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-background">
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${heroVis ? "animate-reveal-up" : "opacity-0"}`}>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                <Heart size={12} /> About Elena
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 text-balance">
                I Believe Everyone Deserves to Live a Life That <span className="text-primary">Lights Them Up.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                I'm Elena Torres — a certified ICF PCC life and executive coach based in Austin, Texas. 
                For over 12 years, I've helped 500+ professionals, entrepreneurs, and change-makers 
                unlock clarity, confidence, and the courage to create lives they truly love.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img src={coachPortrait} alt="Elena Torres" className="w-full h-auto object-cover" />
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
              <p>
                Fifteen years ago, I was a senior VP at a Fortune 500 company. On paper, I had everything — the title, 
                the corner office, the salary. But every Sunday night, I felt a knot in my stomach that told me 
                something was deeply wrong.
              </p>
              <p>
                My wake-up call came during a hospital visit for burnout-induced health issues. That's when I 
                realized: success without fulfillment isn't success at all. I hired my own coach, did the deep work, 
                and within a year, I'd completely transformed my life.
              </p>
              <p>
                That transformation was so profound that I knew I had to help others experience the same. I invested 
                in world-class training, earned my ICF PCC certification, studied NLP and somatic coaching, and 
                haven't looked back since.
              </p>
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
            {[
              { icon: Award, title: "ICF PCC Certified", desc: "Professional Certified Coach credential" },
              { icon: BookOpen, title: "NLP Practitioner", desc: "Certified Neuro-Linguistic Programming" },
              { icon: Sparkles, title: "Positive Intelligence", desc: "Mental fitness certified coach" },
              { icon: Heart, title: "Somatic Coaching", desc: "Body-mind integration specialist" },
            ].map((c, i) => (
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
              <img src={coachStage} alt="Elena speaking on stage" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Speaking & <span className="text-primary">Media</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                I've spoken at TEDx, Fortune 500 leadership summits, and industry conferences worldwide. 
                My work has been featured in Forbes, Entrepreneur Magazine, and the Mindful Leadership Podcast.
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
