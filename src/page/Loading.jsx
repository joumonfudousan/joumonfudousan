import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";

function Loading() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("a",location.pathname);
  

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        navigate("/home");
      }, 400);
    }
  }, [location, navigate]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[430px] h-[100vh] flex flex-col justify-center items-center relative bg[#FDF9F1]">
        <img width={"320px"} height={"240px"} src={logo2} />
      </div>
    </div>
  );
}

export default Loading;
