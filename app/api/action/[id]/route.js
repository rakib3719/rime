import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async(req, {params})=>{
    try {
        const db = await connectDB();
        const projectCollection = db.collection("projects");
    
        // Query to find and delete the project
        const query = { _id: new ObjectId(params.id) };
        const result = await projectCollection.findOne(query);
    
       
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

export const DELETE = async (req, { params }) => {
  try {
    const db = await connectDB();
    const projectCollection = db.collection("projects");

    // Query to find and delete the project
    const query = { _id: new ObjectId(params.id) };
    const result = await projectCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No project found with the given ID." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      {
        status: 500,
        statusText: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
  try {
    const updateData = await req.json(); // Parse request body

    const db = await connectDB();
    const projectCollection = db.collection("projects");

    const filter = { _id: new ObjectId(params.id) };
    const updatedData = { $set: updateData }; // Properly set data

    const result = await projectCollection.updateOne(filter, updatedData);

    if (!result.matchedCount) {
      return NextResponse.json(
        { message: "Project not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project updated successfully.", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project.", details: error.message },
      { status: 500 }
    );
  }
};

