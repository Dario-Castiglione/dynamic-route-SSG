import style from "./../styles/404.module.scss"

export default function Custom404(){

    return(
        <div className={style.container}>
        <img className={style.img} src="https://ih1.redbubble.net/image.731424986.3858/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="gattino"/>
        <p>
           Questa pagina non esiste!!
        </p>
        </div>

    );

}