import Card from "../modules/Card";
import Sidebar from "../modules/Sidebar";
import styles from "./BuyResidentialPage.module.css";
export default function BuyResidentialPage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {data?.map((profile) => (
          <Card key={profile._id} data={profile}></Card>
        ))}
      </div>
    </div>
  );
}
