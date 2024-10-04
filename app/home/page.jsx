"use client";
import { ConfigProvider, Flex, Tabs } from "antd";
import { locations } from "../data/mocData";
import { createContext, useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";

export const HomeContext = createContext();
export const base_asset = process.env.NEXT_PUBLIC_ASSET_PATH;
export const base_path = process.env.NEXT_PUBLIC_BASE_PATH;

function Home() {
  const [data, setData] = useState(locations);
  const [keyLocation, setKeyLocation] = useState(0);
  const [loading, setLoading] = useState(true);
  const onChange = (key) => {
    setKeyLocation(Number(key));
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  }, []);
  const view = useMemo(() => {
    return (
      <div
        style={{
          height: "calc(100vh - 150px)",
          minHeight: "calc(100vh - 150px)",
        }}
        className="overflow-y-auto scrollbar-hide"
      >
        <Flex gap={"large"} vertical>
          {data.map((item, index) => (
            <Flex key={index} gap={"small"} vertical>
              <a href={`${base_path}detail_page/${item.nameEg}`}>
                <img className="w-[100%] min-h-[240px]" src={item.image} />
              </a>
              <div className="text-[16px] font-semibold mt-3 text-line-height-24">
                {item.describe}
              </div>
              <Flex justify="space-between" vertical={false}>
                <div className="text-[12px] flex gap-2 flex-auto text-line-height-18">
                  <img src={`..${base_asset}/assets/location.svg`} />
                  {item.location}
                </div>
                <div className="text-[12px] flex gap-2 flex-auto text-line-height-18">
                  <img src={`..${base_asset}/assets/ruler.svg`} />
                  {item.size ? (
                    <>
                      {item.size}帖 {item.acreage}
                    </>
                  ) : (
                    "不明"
                  )}
                </div>
              </Flex>
              <div
                className={`text-[12px] flex gap-2 flex-auto text-line-height-18 ${
                  data.length == index + 1 ? "mb-[90px]" : ""
                }`}
              >
                <img src={`..${base_asset}/assets/image.svg`} />
                {item.scene == "-" ? "不明" : item.scene}
              </div>
            </Flex>
          ))}
        </Flex>
      </div>
    );
  }, [data]);

  const items = [
    {
      key: "0",
      label: "すべて",
      children: view,
    },
    {
      key: "1",
      label: "豊田地区",
      children: view,
    },
    {
      key: "2",
      label: "足助・藤岡地区",
      children: view,
    },
    {
      key: "3",
      label: "旭・稲武地区",
      children: view,
    },
  ];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full flex justify-center items-center overflow-y-hidden">
          {" "}
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
                  fontFamily: "'Noto Sans', sans-serif",
                },
              }}
            >
              <HomeContext.Provider value={{ setData, keyLocation }}>
                <Header />
                <div className="mt-20 px-4 relative">
                  <Tabs
                    tabBarStyle={{}}
                    centered
                    defaultActiveKey={keyLocation}
                    items={items}
                    onChange={onChange}
                  />
                </div>
              </HomeContext.Provider>
            </ConfigProvider>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Home;
