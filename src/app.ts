import express, { type Request, type Response } from "express";
import itemRoutes from "./Routes/item.routes.js"



const app = express();

// middlewares
app.use(express.json());

// routes 
app.use("/api/items" , itemRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Backend Server with TypeScript is running...");
});


export default app