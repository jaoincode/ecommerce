import "./FeaturedProducts.scss";

import Card from "../Card";

import { useState } from "react";

import useFetch from "../../hooks/useFetch";

type ProductsType = "featured" | "trending";

function FeaturedProducts({ type }: { type: ProductsType }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque sequi minus, corporis quibusdam similique quis nesciunt officiis
          ad vel.
        </p>
      </div>
      <div className="bottom">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <Card item={{ ...item.attributes, id: item.id }} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
