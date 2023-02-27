import "./Product.scss";

import { useEffect, useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import useFetch from "../../hooks/useFetch";

import { useParams } from "react-router-dom";

const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState<"img" | "img2">("img");
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "+" | "-") => {
    if (type === "+") setQuantity((prev) => prev + 1);
    if (type === "-" && quantity !== 1) setQuantity((prev) => prev - 1);
  };

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  useEffect(() => {
    if (data) {
      setProduct(data as ProductType);
    }
  }, [data, error, loading]);

  return (
    <div className="product">
      {error
        ? "Error"
        : loading
        ? "Loading.."
        : product && (
            <>
              <div className="left">
                <div className="images">
                  <img
                    src={
                      UPLOAD_URL +
                      product?.attributes?.img?.data?.attributes?.url
                    }
                    onClick={() => setSelectedImage("img")}
                  />
                  <img
                    src={
                      UPLOAD_URL +
                      product?.attributes?.img2?.data?.attributes?.url
                    }
                    onClick={() => setSelectedImage("img2")}
                  />
                </div>
                <div className="mainImage">
                  <img
                    src={
                      UPLOAD_URL +
                      product?.attributes[selectedImage]?.data?.attributes?.url
                    }
                  />
                </div>
              </div>
              <div className="right">
                <h1>{product.attributes.title}</h1>
                <span className="price">
                  $ {product.attributes.price.toFixed(2)}
                </span>
                <p>{product.attributes.desc}</p>
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
                  <span>Product Type: Lorem Ipsum</span>
                  <span>Tag: Lorem Ipsum Dolor sit amet</span>
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
            </>
          )}
    </div>
  );
}

export default Product;
