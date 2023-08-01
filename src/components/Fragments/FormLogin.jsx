import Intro from "../Elements/Intro";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (props) => {
  const { action, method } = props;
  return (
    <>
      <Intro title="Sign in">Login to manage your account</Intro>
      <form action={action} method={method}>
        <InputForm
          name="email"
          label="Email"
          id="email"
          type="email"
          placeholder="example@gmail.com"
        />
        <InputForm
          name="password"
          label="Password"
          id="password"
          type="password"
          placeholder="******"
        />
        <Button bgColor="bg-slate-900 hover:bg-slate-500">Sign in</Button>
      </form>
    </>
  );
};

export default FormLogin;
