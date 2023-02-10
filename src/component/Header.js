import { imgURL } from "./constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "../assets/img/img.png";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Heading = () => {
  return <img className="h-20  " src={Logo} alt="logo" />;
};

export const Header = () => {
  const { user } = useContext(UserContext)
  const cartItem = useSelector(store => store.cart.items)
  return (
    <>
      <div className="flex justify-between bg-green-100 shadow-lg">
        <Heading />
        <div className="nav-items">
          {/* <h5>{user.name} - {user.email}</h5> */}
          <ul className="flex py-3">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/About">About</Link>
            </li>
            <li className="p-2">
              <Link to="Contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="InstaMart">Instamart</Link>
            </li>
            <li className="p-2">
              <Link to="Cart">Cart {cartItem.length} </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
