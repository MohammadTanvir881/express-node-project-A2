import express, { Request, Response } from "express";
import cors from "cors";
import { booksRoutes } from "./app/module/books/books.route";
import orderRouter from "./app/module/orders/order.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", booksRoutes);
app.use("/api/orders" , orderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

export default app;
