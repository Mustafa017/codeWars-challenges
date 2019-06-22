const { assert } = require("chai");
const isPrime = require("./isPrime");

describe("It should return true or false for prime numbers", () => {
  it("returns false for numbers less than 2", () => {
    assert.equal(isPrime(1), false);
  });
  it("returns false negative numbers", () => {
    assert.equal(isPrime(-31), false);
  });
  it("returns true for 2", () => {
    assert.equal(isPrime(2), true);
  });
  it("returns false for 4", () => {
    assert.equal(isPrime(2), true);
  });
  it("returns true for 5", () => {
    assert.equal(isPrime(5), true);
  });
  it("returns true for 73", () => {
    assert.equal(isPrime(73), true);
  });
  it("returns false for 75", () => {
    assert.equal(isPrime(75), false);
  });
  it("returns true for 5099", () => {
    assert.equal(isPrime(5099), true);
  });
});
