import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setUser(getUsername(token)) : (window.location.href = "/login");
  }, []);

  return user;
};
