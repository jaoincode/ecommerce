import "./FeaturedProducts.scss";

import Card from "../Card";

const data = [
  {
    id: 1,
    title: "Title",
    img: "https://img.ltwebstatic.com/images3_pi/2022/07/07/16571571990466700f2c9ab34954e2a59b9684ebb8_thumbnail_600x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/05/11/16522579370090cb0a9f553b3d81223d1c210885e9_thumbnail_600x.webp",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    title: "Title",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/08/03/1659512255832fef934c32ac0f9d3afd7e6a17e03c.webp",
    img: "https://img.ltwebstatic.com/images3_pi/2021/06/20/1624199588bf3c7183e42db4b7beddebe128faf14c_thumbnail_600x.webp",
    isNew: false,
    oldPrice: 25,
    price: 20,
  },
  {
    id: 3,
    title: "Title",
    img: "https://img.ltwebstatic.com/images3_pi/2022/03/30/16486217704525de46ae44ce21365a3991781ea4d5_thumbnail_600x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/01/20/1642647501d793170274436e0c5d7e33aea756264a_thumbnail_600x.webp",
    isNew: true,
    oldPrice: 30,
    price: 22,
  },
  {
    id: 4,
    title: "Title",
    img: "https://img.ltwebstatic.com/images3_pi/2022/03/10/16468825543e51bc7371168177be69495de4e6de1e_thumbnail_600x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/03/02/16461868474509f954e56c089a30555d7044e6a7b6_thumbnail_600x.webp",
    isNew: false,
    oldPrice: 40,
    price: 30,
  },
  {
    id: 5,
    title: "Title",
    img: "https://img.ltwebstatic.com/images3_pi/2022/08/23/1661244360ae188c60aacbe3827d9369e46c1cfa76_thumbnail_600x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/08/23/166124436271fa072e02f0e9101b05e47595453c7f_thumbnail_600x.webp",
    isNew: true,
    oldPrice: 50,
    price: 38,
  },
];

type ProductsType = "featured" | "trending";

function FeaturedProducts({ type }: { type: ProductsType }) {
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
