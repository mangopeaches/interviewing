import { Request, Response } from "express";

export const apiController = {
  getData: (req: Request, res: Response) => {
    res.json({
      message: "This is some data from the API",
    });
  },
};
