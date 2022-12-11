import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {

  const {state: {products, loading, error}}= useProducts();

  // const products= state.products;
  
  let content;

  if(loading){
   content= <p>Loading.....</p>
  }
  if(error){
    content= <p>Something Went Wrong</p>
  }

  // if(!loading && !error && products.length==0){
  //   content= <p>Products Not Found</p>
  // }
  if(products.length){
    content= products.map((product)=><ProductCard product={product}/>)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;