import { Flex, Tabs } from "antd";
import location from "../assets/location.svg";
import ruler from "../assets/ruler.svg";
import iconImage from "../assets/image.svg";
import { locations } from "../data/mocData";
import { useMemo, useState } from "react";

function Home() {
  const [data, setData] = useState(locations);
  const onChange = (key) => {
    console.log(key);
    setData([]);
  };
  console.log("locations", locations);

  const view = useMemo(() => {
    return (
      <Flex gap={"large"} vertical>
        {data.map((item, index) => (
          <Flex key={index} gap={"small"} vertical>
            <img className="w-[100%] min-h-[240px]" src={item.image} />
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
    <div className="">
      <Tabs
        tabBarStyle={{}}
        centered
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

export default Home;
