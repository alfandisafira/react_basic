import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { type } = props;
  return (
    <div className="flex justify-center mb-2">
      <div className="mt-16 px-8 py-4 bg-zinc-200 bg-opacity-30 rounded-xl">
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
