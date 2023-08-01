import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-cyan-500">
      <AuthLayout>
        <FormRegister action="" method="POST" />
      </AuthLayout>
      <h1 className="text-center text-slate-700">
        Already have an account?{" "}
        <Link className="font-bold hover:text-black" to="/login">
          Sign in
        </Link>
      </h1>
    </div>
  );
};

export default RegisterPage;
