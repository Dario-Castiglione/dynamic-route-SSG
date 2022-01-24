import Layout from "../../Layouts/Layout";
import style from "../../styles/prodotto.module.scss"


export default function Product({ product }) {
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

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths(){
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map(product => {
    return {
      params: {
        index: `${product.id}`
      }
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
} 