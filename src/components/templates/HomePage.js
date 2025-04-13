import { FiCircle } from "react-icons/fi";
import styles from "./HomePage.module.css";
import CategoryCard from "../modules/CategoryCard";
import { FaCity } from "react-icons/fa";
export default function HomePage() {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "اصفهان",
    "مشهد",
    "شیراز",
    "همدان",
    "تبریز",
    "بوشهر", "کرج"
  ];
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="دفتر" name="office" />
        <CategoryCard title="مغازه" name="store" />
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((item) => (
            <li key={item}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
