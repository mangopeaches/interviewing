import express from "express";
import rateLimiter from "../rateLimiter";

describe("rateLimiter", () => {
  it("should not rate limit on a single request", () => {
    expect(true).toEqual(false);
  });

  it("should rate limit when threshold is exceeded", () => {
    expect(true).toEqual(false);
  });
});
