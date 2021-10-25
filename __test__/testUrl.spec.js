import { checkURL } from "../src/client/js/checkURL";
describe("Testing, the checkURL function to be defined", () => {
  test("checkUrl to be defined", () => {
    expect(checkURL).toBeDefined();
  });
});

describe("Testing, the inputUrl must exsit", () => {
  test("return true", () => {
    expect(checkURL).toBeTruthy();
  });
});
