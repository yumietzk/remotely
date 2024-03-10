import { formatString } from "../formatString";

describe("formatString function", () => {
  test("should format string correctly", () => {
    expect(formatString("full_time")).toBe("fulltime");
    expect(formatString("part-time")).toBe("parttime");
    expect(formatString("Azure")).toBe("azure");
    expect(formatString("Full Stack")).toBe("fullstack");
    expect(formatString("     frontend  ")).toBe("frontend");
  });
});
