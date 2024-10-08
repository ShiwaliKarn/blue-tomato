import { NextResponse } from "next/server";
import userModel from "@/app/lib/models/userModel.js";
import jwt from "jsonwebtoken";
import connectDB from "@/app/lib/config/db.js";

export async function POST(req) {
  try {
    await connectDB();
    const token = req.headers.get("token");

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not Authorized, please log in again",
        },
        { status: 401 }
      );
    }

    let userId;
    try {
      const token_decode = jwt.verify(token, process.env.JWT_SECRET);
      userId = token_decode.id;
    } catch (error) {
      console.error("Token verification error:", error);
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const itemId = body.itemId;

    let userData = await userModel.findById(userId);
    if (!userData) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    let cartData = userData.cartData || new Map();
    if (!cartData.has(itemId)) {
      cartData.set(itemId, 1);
    } else {
      cartData.set(itemId, cartData.get(itemId) + 1);
    }

    userData.cartData = cartData;
    await userData.save();

    return NextResponse.json({
      success: true,
      message: "Added to cart",
      cartData: Object.fromEntries(cartData),
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
