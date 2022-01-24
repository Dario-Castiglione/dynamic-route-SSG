import style from "./NavBar.module.scss"
import Link from "next/link"
import { useRouter } from "next/router";



const navLink = [
    {
        name : "Home",
        link: "/"
    },
    {
        name : "Prodotti",
        link: "/prodotti"
    }
]



export default function Navbar(){
    const router = useRouter();

    
    return(
        <div className={style.container} >
            <ul>
                {navLink.map((element, index) => 
                    <li key={index}>
                        <Link href={element.link}>
                         <a className={router.pathname  === element.link ? style.active : undefined}>{element.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}