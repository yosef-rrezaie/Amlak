"use client"
import { useState } from "react";
import styles from "./SignupPage.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
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
        <button onClick={signinHandler}>ورود</button>
        <p>
          حساب کاربری ندارید ؟ <Link href="/signup">ثبت نام</Link>
        </p>
      </form>
      <Toaster />
    </div>
  );
}
