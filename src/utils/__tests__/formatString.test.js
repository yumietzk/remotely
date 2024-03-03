import { formatString } from "../formatString";

describe("formatString function", () => {
  test("should format string correctly", () => {
    expect(formatString("full_time")).toBe("fulltime");
    expect(formatString("Azure")).toBe("azure");
    expect(formatString("Part time")).toBe("parttime");
    expect(formatString("     frontend")).toBe("frontend");
  });
});
