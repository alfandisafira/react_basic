import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-cyan-500">
      <AuthLayout type={"register"}>
        <FormRegister action="" method="POST" />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
