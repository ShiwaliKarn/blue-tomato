import { NextResponse } from "next/server";
import userModel from "@/app/lib/models/userModel.js";
import jwt from "jsonwebtoken";

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

// export async function POST(req) {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (!userData) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 404 }
//       );
//     }

//     const cartData = userData.cartData;
//     return NextResponse.json({ success: true, cartData });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Error" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
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

    // Fetch user data
    let userData = await userModel.findById(userId);
    if (!userData) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Get cart data from the user document
    const cartData = userData.cartData || {};

    return NextResponse.json({ success: true, cartData });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
