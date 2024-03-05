import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const client = new PrismaClient();

export async function POST(req:NextRequest){
    const body =await req.json();
    const user = await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    return Response.json({
        data:user,
        message:"user logged in successfully"
    })
}

export async function GET(){
    const users = await client.user.findFirst();
    return Response.json({data:users})
}