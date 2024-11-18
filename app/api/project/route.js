import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";


export const POST=async (request)=>{



   try {
    const data=await request.json();
    console.log('data',data)

    const db = await connectDB();
    const projectCollation = db.collection('projects');
  
   
   const add= await projectCollation.insertOne(data);
   if (add) {
    return NextResponse.json({ message: 'Projects added successfully' }, { status: 200 });
    
   }
   } catch (error) {
    return NextResponse.json({
        status: 400,
        statusText: 'Something went wrong',
        error: error.message,
    });
   }
    
    
}

export const GET = async()=>{

try {
    const db = await connectDB();
    const projectCollation = db.collection('projects');
    const result = await projectCollation.find().toArray();
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

