import { Request, Response, NextFunction } from "express";

/**
 * Goal: Build an API gateway that rate-limits incoming requests.
 *
 * Requirements:
 * Implement rate-limiting (e.g., 10 requests per minute per client).
 * Use an in-memory data store to track rate limits.
 */
const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export default rateLimiter;
