import "./Product.scss";

import { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
  "https://img.ltwebstatic.com/images3_pi/2022/08/23/1661244360ae188c60aacbe3827d9369e46c1cfa76_thumbnail_600x.webp",
  "https://img.ltwebstatic.com/images3_pi/2022/08/23/166124436271fa072e02f0e9101b05e47595453c7f_thumbnail_600x.webp",
];

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "+" | "-") => {
    if (type === "+") setQuantity((prev) => prev + 1);
    if (type === "-" && quantity !== 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} onClick={() => setSelectedImage(0)} />
          <img src={images[1]} onClick={() => setSelectedImage(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
          deleniti aspernatur, fuga obcaecati mollitia neque quos saepe
          inventore similique.
        </p>
        <div className="quantity">
          <button onClick={() => handleQuantity("-")}>-</button>
          {quantity}
          <button onClick={() => handleQuantity("+")}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
