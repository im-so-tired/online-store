import { useDispatch } from "react-redux";
import { changeAmount, deleteBasketItem } from "../redux/slice.js";

export default function BasketItem({ info }) {
  const dispatch = useDispatch();
  return (
    <div className="BasketItem">
      <div className="info">
        <img alt="foto" src={info.img}></img>
        <div>
          <p className="name">{info.description}</p>
          <div>
            <input
              onChange={(e) => {
                // setAmount(e.target.value);
								dispatch(changeAmount({id:info.id,amount:e.target.value}))
              }}
              value={info.amount}
              type="number"
            ></input>
            <span>*&#163;{info.price}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="price">&#163;{info.price}</span>
        <button
          onClick={() => dispatch(deleteBasketItem({ id: info.id }))}
          type="button"
          className="btn btn-danger"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
