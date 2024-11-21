
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
   
  try {
    const updateData = await req.json(); 
    const { email, oldPassword, newPassword } = updateData;

    
    const db = await connectDB();
    const userCollection = db.collection("user");

    // Find the user by email
    const user = await userCollection.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Email not found." },
        { status: 300 }
      );
    }

    // Check if the old password matches the stored password

    console.log(user.password, oldPassword, "just cheching");
    if (user.password !== oldPassword) {
      return NextResponse.json(
        { message: "Old password did not match." },
        { status: 401 }
      );
    }

    // Update the password directly
    const result = await userCollection.updateOne(
      { email },
      { $set: { password: newPassword } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Failed to update the password." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Password changed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json(
      { error: "Failed to update the password.", details: error.message },
      { status: 500 }
    );
  }
};
