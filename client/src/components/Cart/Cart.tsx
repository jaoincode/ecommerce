import "./Cart.scss";

import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { useDispatch } from "react-redux";

import { removeItem } from "../../redux/cartReducer";

const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;

function Cart() {
  const products = useSelector(
    (state: RootState) => state.cart.products
  ) as ProductReducerType[];

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));

    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.length > 0 &&
        products.map((item) => (
          <div key={item.id} className="item">
            <img src={UPLOAD_URL + item.img} />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$ {totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
