import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    try {
      const updateData = await req.json(); // Parse request body
  console.log(updateData, "dkehi chek kore ki dei");
      const db = await connectDB();
      const projectCollection = db.collection("projects");
  
      const filter = { _id: new ObjectId(params.id) };
      const updatedData = { $set: {top: updateData.top} }; // Properly set data
  
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