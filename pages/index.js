
import styles from "../styles/Home.module.css";
import Layout from "../Layouts/Layout";
import Link from "next/link";
export default function Home() {
  return (
<>
<Layout>
  <div className={styles.container}>
    <h1>Prova route dinamiche SSG</h1>
    
    <h2>Su <Link href={"/prodotti"} passHref>prodotti ➡️ </Link></h2>
    
  </div>
</Layout>  
  </>
  );
}
