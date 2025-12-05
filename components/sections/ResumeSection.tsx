import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";

const timeline = [
  {
    period: "2024 - Present",
    title: "B.Tech in Computer Science Engineering",
    place: "P.P. Savani University",
    points: [
      "GPA: 7.5/10 | Expected Graduation: 2027",
      "Relevant Coursework: Data Structures, DBMS, Operating Systems, Statistics, Computer Networks"
    ]
  },
  {
    period: "2024",
    title: "Hackathon Participant",
    place: "Smart Solutions Hackathon",
    points: [
      "Designed and developed a functioning prototype within a 24–48 hour time-bound challenge.",
      "Worked on concept building, system flow, UI/UX planning, and feature design.",
      "Collaborated with a team to create a real-world impactful solution.",
      "Appreciated for innovative thinking, problem-solving skills, and effective teamwork."
    ]
  }
];

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Resume"
          title="Education & Experience"
          subtitle="Explore my academic journey and professional experiences."
        />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <MotionFadeIn>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-2xl border border-glass-border-soft bg-card/80 px-5 py-3 text-sm font-medium text-foreground shadow-glass backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:border-accent/80"
              download
            >
              Download resume
            </a>
          </MotionFadeIn>
          <MotionFadeIn delay={0.06}>
            <div className="relative flex-1 space-y-6">
              <div className="absolute left-2 top-0 h-full w-px bg-muted" />
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={item.title} className="relative pl-8">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary shadow-glass" />
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{item.place}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
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


