import { useEffect } from "react";
import "../assets/loader.css";
import { useNavigate } from "react-router";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerPage = setTimeout(() => {
      navigate("/init");
    }, 3000);
    return () => {
      clearTimeout(timerPage);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
}
