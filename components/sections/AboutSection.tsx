import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";

const skills = [
  { label: "Data Analytics", level: 0.85 },
  { label: "IoT & Embedded", level: 0.8 },
  { label: "Python & SQL", level: 0.82 },
  { label: "Dashboarding & Storytelling", level: 0.88 }
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="About"
          title="Blending analytics, IoT, and product thinking."
          subtitle="A data-driven technologist with a passion for building systems that feel thoughtful, reliable, and human-centered."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <MotionFadeIn>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground">
              <p>
                I focus on transforming raw data into narratives that guide decisions,
                shape products, and unlock new opportunities. From IoT-driven
                prototypes to analytical dashboards, I love designing end-to-end
                experiences that connect numbers with real-world impact.
              </p>
              <p>
                My work spans data analytics, IoT innovation, and web technologies —
                building everything from smart assistants and healthcare platforms to
                visual-first experiences and automation pipelines.
              </p>
              <p>
                I care deeply about clarity, empathy, and reliability in every
                solution I build, whether it&apos;s a model, a dashboard, or a
                product interface.
              </p>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.08}>
            <div className="glass-surface flex flex-col gap-5 p-6">
              <h3 className="text-base font-semibold text-foreground">
                Core strengths at a glance
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">
                        {skill.label}
                      </span>
                      <span className="text-muted-foreground">
                        {Math.round(skill.level * 100)}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-2xl bg-muted/70">
                      <div
                        className="h-2 rounded-2xl bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${skill.level * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}


