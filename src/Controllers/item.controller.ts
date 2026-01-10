import type { NextFunction, Request, Response } from "express";
import { items, type Item } from "../Models/item.js";

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


export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const itemIndex = items.findIndex((item) => item.id === Number(id));

    if (itemIndex === -1) {
      res.status(404).json({ message: "Not found" });
      return;
    }

    const updatedItem: Item = {
      ...items[itemIndex],
      name,
      id: Number(id) 
    };

    items[itemIndex] = updatedItem;
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};