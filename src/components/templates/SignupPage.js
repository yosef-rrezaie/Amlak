"use client";

import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label>ایمیل :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>گذروازه :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار گذرواژه :</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button>ثبت نام</button>
        <p>
          حساب کاربری دارید ؟<Link href="/signin">ورود</Link>
        </p>
      </form>
    </div>
  );
}
