import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST=async (request)=>{



    try {
     const data=await request.json();
     console.log('data',data)
 
     const db = await connectDB();
     const contactCollection = db.collection('contact');
   
    
    const add= await contactCollection .insertOne(data);
    if (add) {
     return NextResponse.json({ message: 'Sent message sucessfully', status:200}, { status: 200 });
     
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
     const contactCollation = db.collection('contact');
     const result = await contactCollation.find().toArray();
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