import Intro from "../Elements/Intro";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef, useEffect } from "react";

const FormLogin = (props) => {
  const { action, method } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <Intro title="Sign in">Login to manage your account</Intro>
      <form onSubmit={handleLogin}>
        <InputForm
          name="email"
          label="Email"
          id="email"
          type="email"
          placeholder="example@gmail.com"
          ref={emailRef}
        />
        <InputForm
          name="password"
          label="Password"
          id="password"
          type="password"
          placeholder="******"
        />
        <Button bgColor="bg-slate-900 hover:bg-slate-500" type="submit">
          Sign in
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
