import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectDb from "@/db/dbConfig";
import User from "../../../../models/userModels";
import jwt from "jsonwebtoken";

connectDb();



export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {email , password} = reqBody

        const user = await User.findOne({email})

        if(!user) {
            return NextResponse.json({error: "User not found in database!!"}, {status: 400})
        }


        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword) {
            return NextResponse.json({error: "Invalid password entered please try again!!" } , {status: 400})
        }


        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })


        const tokenData = {
            id: user._id,
            username: user.username
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN!, {expiresIn: "1h"})

        response.cookies.set("token", token, {
            httpOnly: true,
        })
        
        return response


    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

