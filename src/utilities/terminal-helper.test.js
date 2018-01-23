import { getContent } from "./terminal-helper";

describe("terminal-helper", () => {
  test("getContent", () => {
    const result = getContent("Line 1\nLine 2\n \nLine 3", 18);

    expect(result).toEqual([
      { visible: "Line 1", hidden: "" },
      { visible: "Line 2", hidden: "" },
      { visible: "Li", hidden: "ne 3" }
    ]);
  });
});
