import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";

const skills = [
  { label: "Python", level: 0.85 },
  { label: "SQL", level: 0.80 },
  { label: "Data Analytics", level: 0.82 },
  { label: "Excel", level: 0.88 }
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="About"
          title="Career Objective"
          subtitle="Aspiring Data Analyst with strong analytical thinking and a passion for converting raw data into meaningful insights."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <MotionFadeIn>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground">
              <p>
                I am an aspiring Data Analyst with strong analytical thinking and a passion for converting 
                raw data into meaningful insights. Skilled in Python, SQL, and Excel with a keen interest 
                in solving real-world problems using data-driven approaches.
              </p>
              <p>
                I am eager to learn advanced tools and contribute to impactful decision-making in a professional 
                environment. My focus is on transforming raw data into narratives that guide decisions and unlock 
                new opportunities.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Science Engineering at P.P. Savani University, I am building 
                my expertise in data analytics, visualization, and problem-solving through hands-on projects and 
                hackathon participation.
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


