import connectDB from '../config/db';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export async function POST(req, res) {
    const { name, email, password } = await req.json();

    try {
        await connectDB();

        if (!name || !email || !password) {
            return new Response(JSON.stringify({ success: false, message: "All fields are required" }), {
                status: 400,
            });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return new Response(JSON.stringify({ success: false, message: "User already exists" }), {
                status: 400,
            });
        }

        if (!validator.isEmail(email)) {
            return new Response(JSON.stringify({ success: false, message: "Please enter a valid email" }), {
                status: 400,
            });
        }

        if (password.length < 8) {
            return new Response(JSON.stringify({ success: false, message: "Please enter a strong password with at least 8 characters" }), {
                status: 400,
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        return new Response(
            JSON.stringify({
                success: true,
                message: "User registered successfully",
                token,
                userId: user._id.toString(),
            }),
            {
                status: 201,
            }
        );

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: "Server error" }), {
            status: 500,
        });
    }
}