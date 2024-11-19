import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const db = await connectDB();
      const projectCollection = db.collection("projects");
  
      // Fetch all project data
      const projects = await projectCollection.find().toArray();
  
      // Calculate total projects
      const totalProjects = projects.length;
  
      // Reduce data for total levels, available units, and total units
      const totalLevels = projects.reduce((acc, project) => acc + Number(project.levels || 0), 0);
      const totalAvailableUnits = projects.reduce((acc, project) => acc + Number(project.availableUnits || 0), 0);
      const totalUnits = projects.reduce((acc, project) => acc + Number(project.totalUnits || 0), 0);
  
      return NextResponse.json(
        {
          totalProjects,
          totalLevels,
          totalAvailableUnits,
          totalUnits,
        
        },
        {
          status: 200,
          statusText: "Successful",
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          status: 400,
          statusText: "Something went wrong",
          error: error.message,
        },
        {
          status: 400,
        }
      );
    }
  };
  