import { sp } from "@/utils/replaceNumber"
import styles from "./AdminCard.module.css"
export default function AdminCard({data}) {
  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}</span>
      </div>
      <button>انتشار</button>
    </div>
  )
}
