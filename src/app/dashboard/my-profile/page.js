import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilePage from "@/components/templates/MyProfilePage";
import { User } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
export default async function page() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilePage profiles={user.profiles} />;
}
