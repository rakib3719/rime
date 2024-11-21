
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";


export const POST=async (request)=>{



  try {
   const data=await request.json();


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
export const GET = async (request) => {
  try {
    const db = await connectDB();
    const contactCollection = db.collection('contact');

    // Extract page query parameter (default to 1 if not provided)
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = 10; // Number of items per page

    // Get total message count for pagination
    const totalMessages = await contactCollection.countDocuments();

    // Fetch messages for the current page with sorting by date descending
    const messages = await contactCollection
      .find()
      .sort({ createdAt: -1 }) // Assuming you have a `createdAt` field
      .skip((page - 1) * pageSize) // Skip messages based on current page
      .limit(pageSize) // Limit to `pageSize` messages per page
      .toArray();

    return NextResponse.json(
      {
        data: messages,
        totalMessages,
        totalPages: Math.ceil(totalMessages / pageSize),
      },
      {
        status: 200,
        statusText: 'Successful',
      }
    );
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: 'Something went wrong',
      error: error.message,
    });
  }
};
