import { NextResponse } from "next/server";
import userModel from "@/app/lib/models/userModel.js";
import jwt from "jsonwebtoken";
import connectDB from "@/app/lib/config/db.js";

export async function DELETE(req) {
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

    // Find the user by ID
    let userData = await userModel.findById(userId);
    if (!userData) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    let cartData = userData.cartData || {};

    // Ensure the item exists in the cart and has a quantity greater than 0
    if (cartData.has(itemId)) {
      const currentQuantity = cartData.get(itemId);
      if (currentQuantity > 1) {
        cartData.set(itemId, currentQuantity - 1);
      } else {
        cartData.delete(itemId);
      }

      userData.cartData = cartData;
      await userData.save();

      return NextResponse.json({
        success: true,
        message: "Removed from cart",
        cartData: Object.fromEntries(cartData),
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Item not found in cart" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
