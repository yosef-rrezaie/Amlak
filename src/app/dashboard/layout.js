import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function  DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);
      if (!session) redirect("/");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
