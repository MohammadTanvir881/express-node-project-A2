import { Schema, model } from "mongoose";
import { TOrders } from "./orders.inheritance";

const orderSchema = new Schema<TOrders>(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    product: {
      type: String,
      required: [true, "Product is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<TOrders>("Order", orderSchema);
