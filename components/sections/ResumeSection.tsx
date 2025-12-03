import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";

const timeline = [
  {
    period: "2024",
    title: "Data & IoT Projects",
    place: "Independent / Academic",
    points: [
      "Built smart assistants, analytics use-cases, and connected systems across multiple domains.",
      "Focused on combining data storytelling with tangible, hardware-driven experiences."
    ]
  },
  {
    period: "2023",
    title: "IoT & Embedded Systems Work",
    place: "Projects & Labs",
    points: [
      "Prototyped sensor-based systems and automation flows for real-world environments.",
      "Integrated microcontrollers, connectivity, and cloud platforms."
    ]
  }
];

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Resume"
          title="Experience & journey so far."
          subtitle="Download a full resume or explore a quick snapshot of my journey and focus areas."
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


