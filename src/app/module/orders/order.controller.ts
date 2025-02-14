import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderValidationSchema from "./order.zodValidation";
import { totalRevenueIncome } from "./revenue";
// import { totalRevenueIncome } from "./revenue";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParser = orderValidationSchema.parse(order);

    const result = await orderServices.createOrderIntoDB(zodParser);

    res.status(200).json({
      message: "Order Created Successfully",
      status: true,
      res: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something Went Wrong While Taking Order",
      status: false,
      error: error.message,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await totalRevenueIncome.calculateRevenue();
    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong while calculating revenue",
      status: false,
      error: error.message,
    });
  }
};

export const orderController = {
  createOrder,
  getRevenue,
};
