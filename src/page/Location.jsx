import { useLocation } from "react-router-dom";
import { locations } from "../data/mocData";
import { Carousel, ConfigProvider, Flex } from "antd";
import Share from "../components/Share";
import locationImage from "../assets/location.svg";
import ruler from "../assets/ruler.svg";
import iconImage from "../assets/image.svg";
import home from "../assets/home.svg";
import material from "../assets/material.svg";
import flame from "../assets/flame.svg";
import train from "../assets/train.svg";
import map from "../assets/map.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import { useEffect } from "react";

function Location() {
  const location = useLocation();
  const parts = location.pathname.split("/");
  const id = parts[2];
  const data = locations[Number(id) - 1];

  const onChange = (currentSlide) => {
    console.log("currentSlide", currentSlide);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[430px] flex flex-col justify-center relative mb-[130px]">
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9AB302",
          fontFamily: "'Noto Sans', sans-serif",
          colorBgContainer: "#999999",
        },
      }}
    >
      <div className="mt-5 px-5 relative">
        <Flex gap={"small"} vertical>
          <Carousel afterChange={onChange}>
            <div className="mb-7">
              <img className="w-[100%] h-[304px]" src={data.imageMain} />
            </div>
            <div className="mb-7">
              <img className="w-[100%] h-[304px]" src={data.imageSub} />
            </div>
          </Carousel>
          <div>
            <div className="text-[24px] font-semibold">{data.name}</div>
            <div className="text-[16px] font-semibold mt-[5px]">
              {data.describe}
            </div>
          </div>
          <Flex justify="space-between" vertical={false}>
            <div className="text-[12px] flex gap-2 w-[50%]">
              <img src={locationImage} />
              {data.location}
            </div>
            <div className="text-[12px] flex gap-2 flex-auto">
              {data.time ? (
                <>
                  <img src={train} />
                  {data.time}
                </>
              ) : (
                <>
                  <img src={ruler} />
                  {data.size !== 0 && `${data.size}帖`} {data.acreage}
                </>
              )}
            </div>
          </Flex>
          <Flex justify="space-between" vertical={false}>
            <div className="text-[12px] flex gap-2 w-[50%]">
              <img src={home} />
              {data.home}
            </div>
            <div className="text-[12px] flex gap-2 flex-auto">
              <img src={material} />
              {data.material}
            </div>
          </Flex>
          <Flex justify="space-between" vertical={false}>
            <div className="text-[12px] flex gap-2 w-[50%]">
              <img src={flame} />
              {data.heater}
            </div>
            <div className="text-[12px] flex gap-2 flex-auto">
              {data.time ? (
                <>
                  <img src={ruler} />
                  {data.size !== 0 && `${data.size}帖`} {data.acreage}
                </>
              ) : (
                <>
                  <img src={iconImage} />
                  {data.scene}
                </>
              )}
            </div>
          </Flex>
          <div className="text-[12px] mt-1 flex gap-2 flex-auto">
            {data.time && (
              <>
                <img src={iconImage} />
                {data.scene}
              </>
            )}
          </div>
          <Flex className="p-5 bg-[#F2F2F2] rounded-lg mt-2" vertical>
            {data.outstanding.map((value, index) => (
              <div className="text-[12px]" key={index}>
                {value}
              </div>
            ))}
          </Flex>
          <img className="w-[100%] min-h-[200px]" src={map} />
          <Flex gap={"small"} className="mt-5" vertical>
            {data.comment.map((value, index) =>
              index == 0 ? (
                <Flex gap={"small"} key={index} vertical>
                  <div className="text-[16px] font-semibold">
                    縄文不動産 担当者
                  </div>
                  <Flex gap={"small"} vertical={false}>
                    <img className="w-[96px] h-[96px]" src={user1} />
                    <div className="text-[14px]">{value}</div>
                  </Flex>
                </Flex>
              ) : (
                <Flex gap={"small"} key={index} vertical>
                  <div className="text-[16px] font-semibold">住んだ人</div>
                  <Flex gap={"small"} vertical={false}>
                    <img className="w-[96px] h-[96px]" src={user2} />
                    <div className="text-[14px]">{value}</div>
                  </Flex>
                </Flex>
              )
            )}
          </Flex>
          <Share data={data} />
        </Flex>
      </div>
    </ConfigProvider>
    </div>
    </div>
    
  );
}

export default Location;
