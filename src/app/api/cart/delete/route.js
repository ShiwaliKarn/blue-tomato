import { NextResponse } from "next/server";
import userModel from "@/app/lib/models/userModel.js";
import jwt from "jsonwebtoken";
import connectDB from "@/app/lib/config/db.js";

// export async function GET() {
//   try {
//     return NextResponse.json({ success: true, message: "API is working" });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Error" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(req) {
//   try {
//     const body = await req.json();
//     const userId = body.userId;

//     // Find the user by ID
//     let userData = await userModel.findById(userId);
//     if (!userData) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 404 }
//       );
//     }

//     let cartData = userData.cartData;

//     // Ensure the item exists in the cart and has a quantity greater than 0
//     if (cartData[body.itemId] && cartData[body.itemId] > 0) {
//       cartData[body.itemId] -= 1;

//       // If the quantity reaches 0, remove the item from the cart
//       if (cartData[body.itemId] === 0) {
//         delete cartData[body.itemId];
//       }

//       await userModel.findByIdAndUpdate(userId, { cartData });
//       return NextResponse.json({ success: true, message: "Removed from cart" });
//     } else {
//       return NextResponse.json(
//         { success: false, message: "Item not found in cart" },
//         { status: 404 }
//       );
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Error" },
//       { status: 500 }
//     );
//   }
// }
const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function DELETE(req) {
  try {
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
    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      // If the quantity reaches 0, remove the item from the cart
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }

      userData.cartData = cartData;
      await userData.save();

      return NextResponse.json({
        success: true,
        message: "Removed from cart",
        cartData,
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Item not found in cart" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
