import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayout = (props) => {
  const { type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-800" : "bg-cyan-500"}`}>
      <div className="flex pr-4 pt-2 justify-end">
        <Button
          bgColor="bg-white"
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
      </div>
      <div className="flex justify-center mb-2">
        <div className="mt-16 px-8 py-4 bg-slate-200 bg-opacity-30 rounded-xl">
          {props.children}
          <h1 className="text-center text-slate-700 mt-2">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}

            {type === "login" && (
              <Link className="font-bold hover:text-black" to="/register">
                Sign up
              </Link>
            )}

            {type === "register" && (
              <Link className="font-bold hover:text-black" to="/login">
                Sign in
              </Link>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

// const Navigation = ({ type }) => {
//   if (type === "login") {
//     return (
//       <h1 className="text-center text-slate-700 mt-2">
//         Don't have an account?{" "}
//         <Link className="font-bold hover:text-black" to="/register">
//           Sign up
//         </Link>
//       </h1>
//     );
//   } else if (type === "register") {
//     return (
//       <h1 className="text-center text-slate-700 mt-2">
//         Already have an account?{" "}
//         <Link className="font-bold hover:text-black" to="/login">
//           Sign in
//         </Link>
//       </h1>
//     );
//   }
// };

export default AuthLayout;
