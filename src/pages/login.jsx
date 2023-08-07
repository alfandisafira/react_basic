import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-cyan-500">
      <AuthLayout type={"login"}>
        <FormLogin action="" method="POST" />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
