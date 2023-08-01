import Intro from "../Elements/Intro";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
  const { action, method } = props;
  return (
    <>
      <Intro title="Sign up">Join with us!</Intro>
      <form action={action} method={method}>
        <InputForm
          name="fullname"
          label="Full Name"
          id="fullname"
          placeholder="Enter your full name"
        />
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
        <Button bgColor="bg-slate-900 hover:bg-slate-500">Sign up</Button>
      </form>
    </>
  );
};

export default FormRegister;
