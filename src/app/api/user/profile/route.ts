import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectDb from "@/db/dbConfig";
import User from "../../../../models/userModels";
import jwt from "jsonwebtoken";
import { GetTokenData } from "@/helpers/GetTokenData";


export async function GET(request: NextRequest) {
    try {
        const userId =  GetTokenData(request)
        const user = await User.findById(userId).select("-password")

        if(!user) {
            return NextResponse.json({error: "User not found in database!!"}, {status: 400})
        }

        return NextResponse.json(user, {status: 200})

    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500});
        
    }
}