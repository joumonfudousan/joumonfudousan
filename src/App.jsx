import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo2 from "../src/assets/logo2.png";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        navigate("/home");
      }, 400);
    }
  }, [location, navigate]);

  return (
    <div className="w-full flex justify-center items-center">
      {location.pathname === "/" ? (
        <div className="w-full max-w-[430px] h-[100vh] flex flex-col justify-center items-center relative bg[#FDF9F1]">
          <img width={"320px"} height={"240px"} src={logo2} />
        </div>
      ) : (
        <div className="w-full max-w-[430px] flex flex-col justify-center relative mb-[130px]">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default App;
