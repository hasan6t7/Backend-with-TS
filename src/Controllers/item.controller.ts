import type { NextFunction, Request, Response } from "express";
import { items } from "../Models/item.js";

export const postitems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const newItem = {
      id: Date.now(),
      name,
    };
    items.push(newItem)

    res.status(201).json(newItem);
  } catch (error) {
    next(error);
    console.log(error)
  }
};

export const getitems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(items);
  } catch (error) {
    next(error);
  }
};
