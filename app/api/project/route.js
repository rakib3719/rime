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
    const projectCollection = db.collection('projects');

    // Extract query parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = parseInt(url.searchParams.get('limit')) || 6;
    const paginate = url.searchParams.get('paginate') !== 'false'; // Enable pagination by default

    let projects;
    let totalProjects;

    if (paginate) {
      // Calculate the skip value for pagination
      const skip = (page - 1) * limit;

      // Fetch paginated projects
      projects = await projectCollection.find().skip(skip).limit(limit).toArray();
      totalProjects = await projectCollection.countDocuments();
    } else {
      // Fetch all projects without pagination
      projects = await projectCollection.find().toArray();
      totalProjects = projects.length;
    }

    return NextResponse.json(
      {
        data: projects,
        totalProjects,
        page: paginate ? page : 1,
        limit: paginate ? limit : totalProjects,
        totalPages: paginate ? Math.ceil(totalProjects / limit) : 1,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: 'Something went wrong',
      error: error.message,
    });
  }
};



