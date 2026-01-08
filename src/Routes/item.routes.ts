import { Router } from "express";
import { getitems, postitems } from "../Controllers/item.controller.js";
const router = Router();

router.get("/", getitems);
router.post("/", postitems);

export default router;
