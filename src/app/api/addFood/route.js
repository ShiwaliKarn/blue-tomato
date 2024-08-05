
// import { NextResponse } from 'next/server';
// import { promises as fsPromises } from 'fs';
// import path from 'path';
// import foodModel from "../models/foodModel";



// async function streamToFile(stream, filePath) {
//   const fileHandle = await fsPromises.open(filePath, 'w');
//   const writer = fileHandle.createWriteStream();

//   const reader = stream.getReader();
//   let done, value;

//   try {
//     while (!done) {
//       ({ done, value } = await reader.read());
//       if (value) {
//         writer.write(Buffer.from(value));
//       }
//     }
//   } finally {
//     writer.end();
//     await fileHandle.close();
//   }
// }

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const name = formData.get('name');
//     const description = formData.get('description');
//     const price = formData.get('price');
//     const category = formData.get('category');
//     const file = formData.get('image');

//     if (!name || !description || !price || !category || !file) {
//       return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
//     }

//     const uploadDir = path.join(process.cwd(), 'uploads');
//     await fsPromises.mkdir(uploadDir, { recursive: true });
//     const filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);

//     console.log('Uploading file to:', filePath);

//     await streamToFile(file.stream(), filePath);

//     const food = new foodModel({
//       name,
//       description,
//       price,
//       category,
//       image: path.basename(filePath)
//     });

//     await food.save();

//     return NextResponse.json({ success: true, message: 'Food Added' });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ success: false, message: 'Error' }, { status: 500 });
//   }
// }



import connectDB from "../config/db";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';


const LoadDB = async () => {
  await connectDB();
}
LoadDB();

export async function  GET(request) {
  return NextResponse.json({msg:"API working"})
}

export async function POST(request) {

  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;
  console.log(imgUrl);
  return NextResponse.json({ imgUrl })
};

// import connectDB from "../config/db";
// import { NextResponse } from "next/server";
// import { writeFile } from 'fs/promises';
// import path from 'path';

// // Ensure the database connection is established
// const LoadDB = async () => {
//   await connectDB();
// };
// LoadDB();

// export async function POST(request) {
//   try {
//     // Await formData parsing
//     const formData = await request.formData();
//     const name = formData.get('name');
//     const description = formData.get('description');
//     const price = formData.get('price');
//     const category = formData.get('category');
//     const image = formData.get('image');

//     if (!name || !description || !price || !category || !image) {
//       return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
//     }

//     const timestamp = Date.now();
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const filePath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);
//     await writeFile(filePath, buffer);

//     const imgUrl = `/${timestamp}_${image.name}`;
//     console.log('Image URL:', imgUrl);

//     return NextResponse.json({ success: true, imgUrl });
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json({ success: false, message: 'Error' }, { status: 500 });
//   }
// }