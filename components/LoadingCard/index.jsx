import style from "./LoadingCard.module.scss"

export default function LoadingCard(){

    return(
        <div className={style.container}>
            <p></p>
            <div className={style.image}></div>
        </div>
        
    );
}