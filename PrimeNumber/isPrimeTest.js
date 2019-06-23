const { assert } = require("chai");
const isPrime = require("./isPrime");

describe("It should return true for prime numbers", () => {
  it("returns true for 2", () => {
    assert.equal(isPrime(2), true);
  });
  it("returns true for 3", () => {
    assert.equal(isPrime(3), true);
  });
  it("returns true for 5", () => {
    assert.equal(isPrime(5), true);
  });
  it("returns false for 19", () => {
    assert.equal(isPrime(19), true);
  });
  it("returns false for 43", () => {
    assert.equal(isPrime(43), true);
  });
  it("returns true for 73", () => {
    assert.equal(isPrime(73), true);
  });
  it("returns true for 173", () => {
    assert.equal(isPrime(173), true);
  });
});

describe("It should return false for not prime numbers", () => {
  it("returns false for 4", () => {
    assert.equal(isPrime(4), false);
  });
  it("returns false for 9", () => {
    assert.equal(isPrime(9), false);
  });
  it("returns false for 45", () => {
    assert.equal(isPrime(45), false);
  });
  it("returns false for 49", () => {
    assert.equal(isPrime(49), false);
  });
  it("returns false for 75", () => {
    assert.equal(isPrime(75), false);
  });
});

describe("Random tests", () => {
  it("returns false for numbers less than 2", () => {
    assert.equal(isPrime(1), false);
  });
  it("returns false negative numbers", () => {
    assert.equal(isPrime(-31), false);
  });
  it("returns true for 5099", () => {
    assert.equal(isPrime(5099), true);
  });
  it("returns false for 8000", () => {
    assert.equal(isPrime(8000), false);
  });
  it("returns false for 228947161", () => {
    assert.equal(isPrime(228947161), false);
  });
  it("returns false for 53246209", () => {
    assert.equal(isPrime(53246209), false);
  });
});
