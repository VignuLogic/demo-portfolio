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
            <Badge variant="primary">Aspiring Data Analyst · Python · SQL · Excel</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Converting raw data into meaningful insights with analytical thinking &amp; data-driven approaches.
            </h1>
            <p className="max-w-xl text-sm md:text-base text-muted-foreground">
              I&apos;m Vigneshwari Subhanji, an aspiring Data Analyst skilled in Python, SQL, and Excel. 
              I have a passion for solving real-world problems using data-driven approaches and converting 
              raw data into meaningful insights.
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
                Location
              </span>
              <span className="text-xs text-primary">Bharuch, Gujarat</span>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Currently pursuing B.Tech in Computer Science Engineering at P.P. Savani University.
              </p>
              <p>Expected Graduation: 2027</p>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}


