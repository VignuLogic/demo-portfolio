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
          title="Let's connect."
          subtitle="Whether it's a data analysis opportunity, collaboration on a project, or just to connect, I'd love to hear from you."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <MotionFadeIn>
            <form
              className="glass-surface space-y-5 p-6"
              action="https://formsubmit.co/vignua09@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="hidden" name="_captcha" value="false" />
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
              <div>
                <p className="font-medium text-foreground mb-2">Location:</p>
                <p>Bharuch, Gujarat</p>
              </div>
              <p>
                Prefer reaching out directly? Feel free to connect through any of the
                following channels.
              </p>
              <div className="space-y-3">
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Phone:</p>
                  <a href="tel:+917435081624" className="hover:text-foreground transition-colors">
                    +91 74350 81624
                  </a>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Email:</p>
                  <a href="mailto:vignua09@gmail.com" className="hover:text-foreground transition-colors break-all">
                    vignua09@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild variant="glass" size="sm">
                  <a href="mailto:vignua09@gmail.com">Email</a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a
                    href="https://linkedin.com/in/vigneshwari-subhanji-b9b290312"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a href="https://github.com/VignuLogic" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a href="https://leetcode.com/u/V_09" target="_blank" rel="noreferrer">
                    LeetCode
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


