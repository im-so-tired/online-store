import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { getTotal } from "../redux/slice";
export default function Basket() {
  let basketItems = useSelector((state) => state.basketItems);
  let total = useSelector(state=>state.total)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotal())
  },[basketItems])
  console.log(basketItems)
  if (basketItems.length === 0) {
    return (
      <div className="container">
				<h1 className="text-center">Basket</h1>
        <h1 className="text-center">No items</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center">Basket</h1>
			<div className="Basket">
				{basketItems.map(item=>{
					return <BasketItem key={uuidv4()} info={item}></BasketItem>
				})}
      <div>
        <span>Total:&#163;{total}</span>
      </div>
			</div>
    </div>
  );
}
