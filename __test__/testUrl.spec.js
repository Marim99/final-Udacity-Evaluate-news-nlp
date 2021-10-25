import { checkURL } from "../src/client/js/checkURL";

describe("Testing, the inputUrl must exsit", () => {
  test("return true", () => {
    expect(checkURL).toBeTruthy();
  });
});

describe("Testing, the checkURL function to be defined", () => {
  test("checkUrl to be defined", () => {
    expect(checkURL).toBeDefined();
  });
});

describe("Testing, the checkURL function to be a function", () => {
  test("to be a function", () => {
    expect(typeof checkURL).toBe("function");
  });
});
