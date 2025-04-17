"use client"
import styles from "@/components/layout/Header.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
export default  function Header() {
  const {data} = useSession()
  console.log(data);
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signup">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}
