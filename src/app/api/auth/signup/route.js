import { User } from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    console.log("hello");
    const body = await req.json();
    const { email, password } = body;
    console.log(email, password);
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const isExisting = await User.findOne({ email });
    if (isExisting) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });
    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { erorr: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}
