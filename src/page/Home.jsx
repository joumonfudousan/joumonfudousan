import { ConfigProvider, Flex, Tabs } from "antd";
import location from "../assets/location.svg";
import ruler from "../assets/ruler.svg";
import iconImage from "../assets/image.svg";
import { locations } from "../data/mocData";
import { createContext, useMemo, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export const HomeContext = createContext();

function Home() {
  const [data, setData] = useState(locations);
  const [keyLocation, setKeyLocation] = useState(1);
  const onChange = (key) => {
    setKeyLocation(Number(key));
  };
  const view = useMemo(() => {
    return (
      <Flex gap={"large"} vertical>
        {data.map((item, index) => (
          <Flex key={index} gap={"small"} vertical>
            <Link to={`/ruins/${item.id}`}>
              <img className="w-[100%] min-h-[240px]" src={item.image} />
            </Link>
            <div className="text-[16px] font-semibold mt-3">
              {item.describe}
            </div>
            <Flex justify="space-between" vertical={false}>
              <div className="text-[12px] flex gap-2 flex-auto">
                <img src={location} />
                {item.location}
              </div>
              <div className="text-[12px] flex gap-2 flex-auto">
                <img src={ruler} />
                {item.size}帖 {item.acreage}
              </div>
            </Flex>
            <div className="text-[12px] flex gap-2 flex-auto">
              <img src={iconImage} />
              {item.scene}
            </div>
          </Flex>
        ))}
      </Flex>
    );
  }, [data]);

  const items = [
    {
      key: "1",
      label: "すべて",
      children: view,
    },
    {
      key: "2",
      label: "豊田地区",
      children: view,
    },
    {
      key: "3",
      label: "足助・藤岡地区",
      children: view,
    },
    {
      key: "4",
      label: "下山地区",
      children: view,
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[430px] flex flex-col justify-center relative mb-[130px]">
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
      <HomeContext.Provider value={{ setData, keyLocation }}>
        <Header />
        <div className="mt-20 px-5 relative">
          <Tabs
            tabBarStyle={{}}
            centered
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </HomeContext.Provider>
    </ConfigProvider>
    </div>
    </div>
  );
}

export default Home;
