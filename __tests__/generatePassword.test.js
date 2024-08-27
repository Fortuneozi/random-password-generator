const generatePassword = require("../src/generatePassword");

describe("generatePassword", () => {
  test("should throw an error if password length is less than 6", () => {
    expect(() => generatePassword(5, "low")).toThrow(
      "Password length must be between 6 and 20 characters."
    );
  });

  test("should throw an error if password length is greater than 20", () => {
    expect(() => generatePassword(21, "low")).toThrow(
      "Password length must be between 6 and 20 characters."
    );
  });

  test("should generate a password of the correct length", () => {
    const length = 10;
    const password = generatePassword(length, "low");
    expect(password.length).toBe(length);
  });

  test("should generate a low strength password", () => {
    const password = generatePassword(10, "low");
    expect(/^[a-z]+$/.test(password)).toBe(true);
  });

  test("should generate a medium strength password", () => {
    const password = generatePassword(10, "medium");
    expect(/^[a-zA-Z]+$/.test(password)).toBe(true);
  });

  test("should generate a high strength password", () => {
    const password = generatePassword(10, "high");
    expect(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|;':",.<>?\/]+$/.test(password)
    ).toBe(true);
  });
});
