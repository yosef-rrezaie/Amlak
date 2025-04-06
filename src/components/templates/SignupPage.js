"use client";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("گذرواژه و تکرار گذرواژه برابر نیست");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (res.status === 201) {
        router.push("/signin")
    } else {
      toast.error(data.error);
    }
  };
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
        <button onClick={signupHandler}>ثبت نام</button>
        <p>
          حساب کاربری دارید ؟<Link href="/signin">ورود</Link>
        </p>
      </form>
      <Toaster />
    </div>
  );
}
