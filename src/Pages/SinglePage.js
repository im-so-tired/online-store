import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { addBasketItem, toggleLoading } from "../redux/slice";

export default function SinglePage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  let [info, setInfo] = useState({});
  let loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(toggleLoading({ bool: true }));
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/clothes?id=${id}`);
      const [data] = await response.json();
      setInfo(data);
    };
    try {
      fetchData();
      dispatch(toggleLoading({ bool: false }));
    } catch (error) {
      throw error;
    }
  }, []);
  if (loading) {
    return (
      <div className="small-container">
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div className="SinglePage small-container">
      <img alt="foto" src={info.img}></img>
      <div className="info">
        <p>{info.description}</p>
        <p className="price">&#163;{info.price}</p>
        <button onClick={() => {dispatch(addBasketItem({item:info}))}} type="button" className="btn btn-success">
          add to bag
        </button>
      </div>
    </div>
  );
}
