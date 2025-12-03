import projects from "@/data/projects.json";
import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  tech: string[];
};

export function ProjectsSection() {
  const typedProjects = projects as Project[];

  return (
    <section id="projects" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Projects"
          title="Selected projects & experiments."
          subtitle="A snapshot of IoT systems, data products, and experience-led platforms I’ve worked on."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {typedProjects.map((project, index) => (
            <MotionFadeIn key={project.slug} delay={index * 0.05}>
              <Card className="h-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:border-accent/70">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2 text-base md:text-lg">
                    <span>{project.title}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {project.role}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
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


