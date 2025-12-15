// @ts-ignore
import { forwardRef } from "react"
// @ts-ignore
import { Slot } from "@radix-ui/react-slot"
// @ts-ignore
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-foreground hover:bg-primary/90 shadow-glass border border-primary/60",
        secondary:
          "bg-secondary text-foreground hover:bg-secondary/90 border border-border/70",
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted/60 border border-transparent",
        outline:
          "bg-background text-foreground border border-border hover:bg-muted/40",
        link: "bg-transparent text-primary underline-offset-4 hover:underline border border-transparent p-0 h-auto",
        glass:
          "glass-surface text-foreground hover:bg-card/90 border border-glass-border-soft",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-10 px-4",
        lg: "h-11 px-5",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

const Button = forwardRef<HTMLButtonElement, any>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
