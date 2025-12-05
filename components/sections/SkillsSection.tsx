import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    title: "Programming",
    description: "Core programming languages and web technologies for building robust applications.",
    tags: ["Python", "SQL", "HTML", "CSS", "Java (Basics)", "JavaScript (Basics)"]
  },
  {
    title: "Data Analytics",
    description: "Data cleaning, manipulation, and visualization for meaningful insights.",
    tags: ["Pandas (Data cleaning & manipulation)", "Excel (sorting, filtering, formulas)", "Data Visualization (charts, graphs)", "Logical thinking & problem-solving"]
  },
  {
    title: "Tools & Platforms",
    description: "Essential tools and platforms for development and version control.",
    tags: ["GitHub", "MySQL"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills & Expertise"
          subtitle="A comprehensive toolkit for data analysis, programming, and problem-solving."
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


