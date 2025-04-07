import styles from "./DashboardPage.module.css"
export default function DashboardPage({createdAt}) {
  return (
    <div className={styles.container}>
        <h3>سلام</h3>
        <p>آگهی های خود را به اشتراگ بگذارید</p>
        <div className={styles.createdAt}>
            <p>تاریخ عضویت :</p>
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
    </div>
  )
}
