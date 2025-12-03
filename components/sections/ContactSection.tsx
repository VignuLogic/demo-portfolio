import { SectionHeader } from "@/components/global/SectionHeader";
import { MotionFadeIn } from "@/components/global/MotionFadeIn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s collaborate."
          subtitle="Whether it's a data problem, an IoT idea, or a product concept, I’d love to hear from you."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <MotionFadeIn>
            <form
              className="glass-surface space-y-5 p-6"
              action="https://formsubmit.co"
              method="POST"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required minLength={10} />
              </div>
              <Button type="submit" variant="primary" size="lg">
                Send message
              </Button>
            </form>
          </MotionFadeIn>
          <MotionFadeIn delay={0.08}>
            <div className="glass-surface flex flex-col gap-4 p-6 text-sm text-muted-foreground">
              <p>
                Prefer reaching out directly? Feel free to connect through any of the
                following channels.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="glass" size="sm">
                  <a href="mailto:ava@example.com">Email</a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}


