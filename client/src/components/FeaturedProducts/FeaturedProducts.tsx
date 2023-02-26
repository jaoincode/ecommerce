import "./FeaturedProducts.scss";

import Card from "../Card";

import { useState, useEffect } from "react";

import axios from "axios";

type ProductsType = "featured" | "trending";

function FeaturedProducts({ type }: { type: ProductsType }) {
  const [products, setProducts] = useState<null | ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );

        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <Card item={{ ...item.attributes, id: item.id }} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
