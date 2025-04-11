"use client"
import { FiEdit } from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai"
import Card from "./Card";
import styles from "./DashboardCard.module.css"
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function DashboardCard({ data }) {
  const router = useRouter()

  const editHandler = ()=> {
    router.push(`/dashboard/my-profile/${data._id}`)
  }
  const deleteHandler = ()=> {

  }
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );

}
