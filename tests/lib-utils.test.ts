import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"

describe("cn", () => {
  it("merges duplicate Tailwind classes and keeps the last conflicting value", () => {
    expect(cn("px-2", "px-4", "text-sm")).toBe("px-4 text-sm")
  })
})
