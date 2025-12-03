import { MotionFadeIn } from "@/components/global/MotionFadeIn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <MotionFadeIn>
      <div className={`flex flex-col gap-3 ${alignment}`}>
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </MotionFadeIn>
  );
}


