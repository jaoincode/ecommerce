import "./Card.scss";

import { Link } from "react-router-dom";

type ItemType = {
  id: number;
  title: string;
  img: string;
  img2: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
};

function Card({ item }: { item: ItemType }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} className="mainImage" />
          <img src={item.img2} className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>$ {item.oldPrice}</h3>
          <h3>$ {item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
