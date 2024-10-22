import express from "express";
import { apiController } from "./controllers/apiController";
import rateLimiter from "./middleware/rateLimiter";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Rate limiter middleware applied to all routes
app.use(rateLimiter);

// API routes
app.get("/data", apiController.getData);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

export default app;
