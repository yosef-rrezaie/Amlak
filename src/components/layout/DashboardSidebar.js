import { getServerSession } from "next-auth";
import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "../modules/LogoutButton";
import { redirect } from "next/navigation";
export default async function DashboardSidebar({ children, role }) {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? "مدیر" : "کاربر"}
        <p>{session?.user?.email}</p>
        <span></span>
        <Link href="/dashboard/">حساب کاربری</Link>
        <Link href="/dashboard/my-profile">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role==="ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null }
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
