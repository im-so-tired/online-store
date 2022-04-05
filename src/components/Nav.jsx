import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="Nav">
      <div className="content container">
        <div className="logo">
          <Link to="/">
            <img
              alt="logo"
              src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png"
            ></img>
          </Link>
        </div>
        <div className="button-group">
          <a href="#">
            <AiOutlineHeart></AiOutlineHeart>
          </a>
          <Link to="/basket">
            <BiShoppingBag></BiShoppingBag>
          </Link>
        </div>
      </div>
    </div>
  );
}
