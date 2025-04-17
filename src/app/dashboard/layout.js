import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";
import { User } from "@/models/User";

export const metadata = {
  title: "پنل کاربری املاک",
};

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  return <DashboardSidebar role={user.role}>{children}</DashboardSidebar>;
}
