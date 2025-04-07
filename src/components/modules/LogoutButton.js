"use client"
import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.css";
import { FiLogOut } from "react-icons/fi";
export default function LogoutButton() {  
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
    </button>
  );
}
