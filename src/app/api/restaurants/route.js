// ** CREATING AN API FOR RESTAURANT ** //

import { connectionSTR } from "@/app/library/database";
import { restaurantSchema } from "@/app/library/models/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// creating a GET function to fetch restaurant details
export async function GET() {
    
    await mongoose.connect(connectionSTR, {useNewUrlParser: true});
    
    // connection mongodb using connectionURI link

    const data = await restaurantSchema.find();

    // code for finding all entries in colletions 

    console.log(data);

    // printing data to developer console
    
    return NextResponse.json({result: data})
    // printing data to browser console
    
}

// creating a POST function to register restaurant details
export async function POST(request) {
    let payload = await request.json();
    // get the post data send by form 

    await mongoose.connect(connectionSTR, {useNewUrlParser:true});

    let restaurant = new restaurantSchema(payload);

    const result = await restaurant.save();

    return NextResponse.json({result, success: true});
}