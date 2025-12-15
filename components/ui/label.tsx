// @ts-ignore
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Label = forwardRef<HTMLLabelElement, any>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-xs font-medium text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label }
