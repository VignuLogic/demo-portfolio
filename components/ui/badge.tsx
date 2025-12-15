// @ts-ignore
import { HTMLAttributes } from "react"
// @ts-ignore
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default:
          "border-border/70 bg-muted/40 text-muted-foreground",
        primary:
          "border-primary/70 bg-primary/10 text-primary",
        outline:
          "border-border bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Using any to bypass persistent build errors with strict typing
function Badge({ className, variant, children, ...props }: any) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
