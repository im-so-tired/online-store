import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Checkbox from "../components/CheckBox";
import Loader from "../components/Loader";
import SingleItem from "../components/SingleItem";
import { fetchData } from "../redux/slice";

export default function Main() {
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.loading);
  let arrayItems = useSelector((state) => state.catalog);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="Main container">
      <h1 className="text-center">Jeans</h1>
      <Checkbox type="Men"></Checkbox>   
      <Checkbox type="Women"></Checkbox>    
      <main className="catalog">
        {arrayItems.map((item) => {
          return (
            <SingleItem key={item.id} id={item.id} info={item}></SingleItem>
          );
        })}
      </main>
    </div>
  );
}
