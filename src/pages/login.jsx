import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-cyan-500">
      <AuthLayout>
        <FormLogin action="" method="POST" />
      </AuthLayout>
      <h1 className="text-center text-slate-700">
        Don't have an account?{" "}
        <Link className="font-bold hover:text-black" to="/register">
          Sign up
        </Link>
      </h1>
    </div>
  );
};

export default LoginPage;
