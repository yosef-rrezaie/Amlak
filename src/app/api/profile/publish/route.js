import { Profile } from "@/models/Profile";
import { User } from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function PATCH(req) {
    try {
      await connectDB();
  
      const body = await req.json();
      const { id } = body;
  
      console.log(id);
  
      const session = await getServerSession(req);
      if (!session) {
        return NextResponse.json(
          {
            error: "لطفا وارد حساب کاربری خود شوید",
          },
          { status: 401 }
        );
      }
  
      const user = await User.findOne({ email: session.user.email });
      if (!user) {
        return NextResponse.json(
          {
            error: "حساب کاربری یافت نشد",
          },
          { status: 404 }
        );
      }
  
      if (user.role !== "ADMIN") {
        return NextResponse.json(
          { error: "دسترسی محدود" },
          {
            status: 403,
          }
        );
      }
  
      const profile = await Profile.findOne({ _id: id });
      if (!profile) {
        return NextResponse.json({ error: "آگهی یافت نشد" }, { status: 404 });
      }
  
      profile.published = true;
      await profile.save();
  
      return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "مشکلی در سرور رخ داده است" },
        { status: 500 }
      );
    }
  }