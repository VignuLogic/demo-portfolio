import { Button } from "@/components/ui/button";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="gradient-hero section-shell flex min-h-[70vh] flex-col justify-center"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <MotionFadeIn>
          <div className="space-y-6">
            <Badge variant="primary">Data Analyst · IoT Innovator · Tech Creator</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Turning raw data into meaningful stories &amp; building future-ready
              solutions.
            </h1>
            <p className="max-w-xl text-sm md:text-base text-muted-foreground">
              I&apos;m Vigneshwari (Ava), a data-focused technologist who blends
              analytics, IoT, and product thinking to design human-centered solutions
              that are reliable, scalable, and insight driven.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#about">Learn more</a>
              </Button>
            </div>
          </div>
        </MotionFadeIn>
        <MotionFadeIn delay={0.08}>
          <div className="glass-surface relative mx-auto flex max-w-md flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Current focus
              </span>
              <span className="text-xs text-primary">Analytics × IoT</span>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Exploring intelligent systems that combine sensor data, cloud
                analytics, and intuitive interfaces.
              </p>
              <p>Always asking: what story is the data trying to tell?</p>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}


