import jwt  from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


export const GetTokenData = (request: NextRequest) => {
    try {
        const GetToken = request.cookies.get("token")?.value || "";

        const decodedToken:any = jwt.verify(GetToken, process.env.TOKEN!);

        return decodedToken.id;
    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
} 