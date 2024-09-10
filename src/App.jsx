import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import logo2 from "../src/assets/logo2.png";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        navigate("/home");
      }, 300);
    }
  }, [location, navigate]);

  return (
    <div className="w-full flex justify-center items-center">
      {location.pathname === "/" ? (
        <div className="w-full max-w-[430px] h-[100vh] flex flex-col justify-center items-center relative bg[#FDF9F1]">
          <img width={"320px"} height={"240px"} src={logo2} />
        </div>
      ) : (
        <div className="w-full max-w-[430px] flex flex-col justify-center relative">
          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  trackBg: "#8FAA02",
                  trackHoverBg: "#8FAA02",
                  railBg: "rgb(143 170 2 / 38%)",
                  railHoverBg: "rgb(143 170 2 / 38%)",
                  handleColor: "#8FAA02",
                  handleActiveOutlineColor: "rgb(143 170 2 / 10%)",
                  handleActiveColor: "#8FAA02",
                  dotActiveBorderColor: "#8FAA02",
                },
                Tabs: {
                  inkBarColor: "#51412C",
                  itemActiveColor: "#333333",
                  itemColor: "#999999",
                  itemSelectedColor: "#333333",
                },
              },
              token: {
                colorPrimary: "#9AB302",
                fontFamily: "Noto Sans",
              },
            }}
          >
            <Header />
            <div className="mt-20 px-5">
              <Outlet />
            </div>
          </ConfigProvider>
        </div>
      )}
    </div>
  );
}

export default App;
