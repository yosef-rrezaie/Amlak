import AdminCard from "../modules/AdminCard"
import styles from "./AdminPage.module.css"
export default function AdminPage({profiles}) {
  return (
    <div>
        {profiles.length ? null : <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>}
        {profiles.map(i => (<AdminCard key={i._id} data={i} />))}
    </div>
  )
}
