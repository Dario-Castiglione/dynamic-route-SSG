import Layout from "../../Layouts/Layout";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import style from "../../styles/prodotti.module.scss";
const array = new Array(20).fill("asd");
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();


  return {
    props: {
      product: data,
    },
    
  };
}

export default function Prodotti({product}) {

  return (
    <Layout>

      <div className={style.container}>
        {product.map((element, index) => (
           <Link  href={`/prodotti/${element.id}`} key={index}  > 
                <a>

                  <Card data={element}/>
                </a>
                
           </Link> 
        ))}
      </div>
    </Layout>
  );
}
