import connectDB from "../config/db";
import foodModel from "../models/foodModel";
import { NextResponse } from "next/server";


const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function GET(){
try{
    const foods = await foodModel.find({});
    return NextResponse.json({success:true,data:foods})
}
catch(error){
console.log(error);
return NextResponse.json({success:false,message:"error"})
}
}