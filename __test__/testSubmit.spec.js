import { handleSubmit } from "../src/client/js/handleForm";
import "babel-polyfill";

describe("Testing the submit function", () => {
  test("checkUrl to be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("to be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
