import { NextResponse } from 'next/server';
import connectDB from "@/app/lib/config/db.js";
import User from "@/app/lib/models/userModel";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export async function POST(req) {
    const { email, password } = await req.json();

    try {
        await connectDB();

        if (!email || !password) {
            return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User doesn't exist" }, { status: 400 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 400 });
        }

        const token = createToken(user._id);
        return NextResponse.json({
            success: true,
            message: "User logged in successfully",
            token,
            userId: user._id.toString(),
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}