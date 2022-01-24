import style from "./Card.module.scss"

export default function Card({data}){

    return(
        <div className={style.container}>
            <p>{data.title}</p>
            <img src={data.image} alt="imgProdotto" width={100}  />
        </div>
        
    );
}