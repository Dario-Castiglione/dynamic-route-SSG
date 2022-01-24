import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "./Layout.module.scss"

export default function Layout( {children} ){

    return(
        <>
        <NavBar />
        <main className={styles.main}>
        {children}
        </main>
        <Footer />
        </>
    );
}