import { useRef, useEffect, useState } from "react";

import Intro from "../Elements/Intro";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [errorLogin, setErrorLogin] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/products";
      } else {
        setErrorLogin(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <Intro title="Sign in">Login to manage your account</Intro>
      <form onSubmit={handleLogin}>
        <InputForm
          name="username"
          label="Username"
          id="username"
          type="text"
          placeholder="Input your username"
          ref={usernameRef}
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
        {errorLogin && (
          <p className="text-red-600 text-center mt-2">{errorLogin}</p>
        )}
      </form>
    </>
  );
};

export default FormLogin;
