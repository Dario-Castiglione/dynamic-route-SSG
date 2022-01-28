import Layout from "../../Layouts/Layout";
import style from "../../styles/prodotto.module.scss"
import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

 if(router.isFallback){
   return <h1>loading</h1>
 }

  return (
    <Layout>
      <div className={style.container}>
        <h1>{product.title}</h1>
        <div className={style.description}>
          <img src={product.image} alt="image of product" width={300} />
          <p>{product.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  
  const res = await fetch(`https://fakestoreapi.com/products/${params.index}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }
  console.log("genero pagina ")
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths(){
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const newData = await data.slice(0,3);

  
  const paths = newData.map(product => {
    return {
      params: {
        index: `${product.id}`
      }
    }
  })

  return {
    paths: paths,
    fallback: true,
  }
} 