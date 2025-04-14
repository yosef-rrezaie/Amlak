import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { User } from "@/models/User";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import AdminPage from "@/components/templates/AdminPage";
import { Profile } from "@/models/Profile";

export default async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });

  const profiles = await Profile.find({ published: false });
  if (user.role !== "ADMIN") redirect("/dashboard");
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
}
