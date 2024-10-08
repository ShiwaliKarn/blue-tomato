import connectDB from "@/app/lib/config/db.js";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import foodModel from "@/app/lib/models/foodModel";


const LoadDB = async () => {
  await connectDB();
}
LoadDB();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    if (!image) {
      throw new Error('Image not provided');
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/uploads/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `${timestamp}_${image.name}`;

    const foodData = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      category: formData.get('category'),
      image: imgUrl,
    };

    await foodModel.create(foodData);
    console.log("Food Saved");

    return NextResponse.json({ success: true, message: "Food added", imgUrl });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, message: 'Error saving food' }, { status: 500 });
  }
}