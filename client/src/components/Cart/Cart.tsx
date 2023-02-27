import "./Cart.scss";

import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { useDispatch } from "react-redux";

import { removeItem, resetCart } from "../../redux/cartReducer";

import { loadStripe } from "@stripe/stripe-js";

import { request } from "../../request";

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

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await request.post(`/orders`, {
        products,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
