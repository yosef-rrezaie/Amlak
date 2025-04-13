import Link from "next/link"
import styles from "./CategoryCard.module.css"
import Image from "next/image"
export default function CategoryCard({name , title}) {
  return (
    <div className={styles.card}>
        <Link href={`/buy-residential?category=${name}`}>
            <Image src={`/images/${name}.png`} alt={title} width={240} height={140}/>
            <p>{title}</p>
        </Link>
    </div>
  )
}
