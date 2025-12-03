import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    title: "Data Analytics",
    description: "Exploratory analysis, feature engineering, and insight-driven narratives.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "IoT & Embedded",
    description: "Sensor integration, microcontrollers, and smart assistant systems.",
    tags: ["Arduino", "Raspberry Pi", "MQTT", "Sensors"]
  },
  {
    title: "Web & APIs",
    description: "Full-stack experiences for data products and dashboards.",
    tags: ["Flask", "REST APIs", "JavaScript", "Next.js (learning)"]
  },
  {
    title: "Product & Storytelling",
    description: "Structured problem solving with clear communication and visuals.",
    tags: ["Dashboards", "Reporting", "UX thinking"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Skills"
          title="A focused toolkit for data and IoT work."
          subtitle="Every project is an opportunity to combine analytical rigor, technical depth, and thoughtful communication."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <MotionFadeIn key={skill.title} delay={index * 0.05}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:border-accent/70">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{skill.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


