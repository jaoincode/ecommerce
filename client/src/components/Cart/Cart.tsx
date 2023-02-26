import "./Cart.scss";

import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const data = [
  {
    id: 5,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cupiditate?",
    img: "https://img.ltwebstatic.com/images3_pi/2022/08/23/1661244360ae188c60aacbe3827d9369e46c1cfa76_thumbnail_600x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/08/23/166124436271fa072e02f0e9101b05e47595453c7f_thumbnail_600x.webp",
    isNew: true,
    oldPrice: 50,
    price: 38,
  },
];

function Cart() {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteIcon className="delete" />
          </div>
        ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
