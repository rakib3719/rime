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

export const GET = async (request) => {
    try {
      const db = await connectDB();
      const projectCollation = db.collection('projects');
  
      // Extract page and limit from query params
      const url = new URL(request.url);
      const page = parseInt(url.searchParams.get('page')) || 1; 
      const limit = parseInt(url.searchParams.get('limit')); 
  
      // Calculate the skip value
      const skip = (page - 1) * limit;
  
      // Fetch projects with pagination
      let projects;
     projects = await projectCollation.find().toArray();
      if(limit){
         projects = await projectCollation.find().skip(skip).limit(limit).toArray();
      }
  
      // Get total count of projects for pagination controls
      const totalProjects = await projectCollation.countDocuments();
  
      // Return the paginated response
      return NextResponse.json({
        data: projects,
        totalProjects,
        page,
        limit,
        totalPages: Math.ceil(totalProjects / limit),
      }, {
        status: 200,
        statusText: 'Successful'
      });
  
    } catch (error) {
      return NextResponse.json({
        status: 400,
        statusText: 'Something went wrong',
        error: error.message,
      });
    }
  };
