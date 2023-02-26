import "./Card.scss";

import { Link } from "react-router-dom";

const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;

function Card({ item }: { item: ItemType }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img
            src={`${UPLOAD_URL}${item.img.data.attributes.url}`}
            className="mainImage"
          />
          <img
            src={`${UPLOAD_URL}${item.img2.data.attributes.url}`}
            className="secondImage"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>$ {item.oldPrice || item.price + 20}</h3>
          <h3>$ {item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
