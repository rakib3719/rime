import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

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
