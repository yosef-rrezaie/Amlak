"use client";
import { sp } from "@/utils/replaceNumber";
import styles from "./AdminCard.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function AdminCard({ data }) {
  const router = useRouter()
  const publishHandler = async (id) => {
    const res = await fetch("/api/profile/publish", {
      method: "PATCH",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    if(data.message) {
      toast.success(data.success)
      router.refresh()
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}</span>
      </div>
      <button onClick={() => publishHandler(data._id)}>انتشار</button>
      <Toaster/>
    </div>
  );
}
