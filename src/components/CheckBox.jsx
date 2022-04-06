import { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../redux/slice.js";

export default function Checkbox({ type }) {
  let [check, setCheck] = useState(true);
	const dispatch = useDispatch()
  const handleClick = (e) => {
		setCheck(e.target.checked)
		dispatch(filter({type:type,bool:e.target.checked}))
	};
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked={check}
        onChange={handleClick}
      ></input>
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {type}
      </label>
    </div>
  );
}
