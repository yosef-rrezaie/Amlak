import DashboardCard from "../modules/DashboardCard";
import styles from "./MyProfilePage.module.css";
export default function MyProfilePage({ profiles }) {
  console.log(profiles);
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>"هیچ آگهی ثبت نشده است"</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}
