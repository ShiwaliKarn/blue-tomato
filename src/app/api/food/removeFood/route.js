import connectDB from "@/app/lib/config/db.js";
import { NextResponse } from "next/server";
import foodModel from "@/app/lib/models/foodModel";
import fs from 'fs/promises';

const LoadDB = async () => {
    await connectDB();
};
LoadDB();

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json({ success: false, message: "No ID provided" }, { status: 400 });
    }

    try {
        const food = await foodModel.findById(id);
        if (!food) {
            return NextResponse.json({ success: false, message: "Food not found" }, { status: 404 });
        }

        await fs.unlink(`./public/uploads/${food.image}`);
        await foodModel.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
