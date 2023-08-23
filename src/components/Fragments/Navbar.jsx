import Button from "../Elements/Button";

import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";

import { useLogin } from "../../hooks/useLogin";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const user = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="bg-white px-4 pb-2 flex justify-between items-center gap-4 sticky top-0">
      <div className="flex items-center gap-2">
        <Button
          bgColor="bg-slate-100"
          onClick={() => {
            localStorage.setItem("isDarkMode", !isDarkMode);
            setIsDarkMode(!isDarkMode);
          }}>
          <img
            src={`${
              isDarkMode
                ? "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/sun-light-256.png"
                : "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-256.png"
            }`}
            alt="cartIcon"
            width={15}
          />
        </Button>
        <div className="flex items-center bg-slate-100 px-2 mt-2 rounded-md">
          <img
            src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-512.png"
            alt="cartIcon"
            width={15}
          />
          <p className="font-semibold text-xs pb-4 pl-0.5">{totalCart}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h5 className="font-medium pt-2">{user}</h5>
        <Button
          bgColor="bg-slate-900 hover:bg-slate-300"
          textColor="text-slate-100 hover:text-slate-900"
          onClick={() => handleLogout()}>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
