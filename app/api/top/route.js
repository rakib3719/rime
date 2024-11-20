
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async()=>{


    try {
        const db = await connectDB();
        const projectCollation = db.collection('projects');
        const filter = {top: true}
        const result = await projectCollation.find(filter).toArray();
        return NextResponse.json({
    data:result
    
        },{
    
            status:200,
            statusText:'successfull'
            
        })
        
    
    } catch (error) {
        return NextResponse.json({
            status: 400,
            statusText: 'Something went wrong',
            error: error.message,
        });
    }
    }