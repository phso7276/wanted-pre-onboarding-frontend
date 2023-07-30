import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useIsLoggedIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const curLocation = window.location.pathname;
    const urls = ["/signup", "/signin"];
    const token = localStorage.getItem("token");

    if (!urls.includes(curLocation) && !token) {
      navigate("/signin");
    }
    if (urls.includes(curLocation) && token) {
      navigate("/todo");
    }
  }, []);
}
