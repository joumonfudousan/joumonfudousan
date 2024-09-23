"use client";
import { locations } from "../data/mocData";
import { Carousel, ConfigProvider, Flex, Image } from "antd";
import Share from "../components/Share";
import { useEffect, useRef } from "react";

function Detail({ params }) {
  const name = params;
  const getData = locations.filter((item) => item.nameEg == name);
  const data = getData.length ? getData[0] : [];
  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const onChange = (currentSlide) => {
    console.log("currentSlide", currentSlide);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [params]);

  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="fixed top-0 w-[100%] z-[999] flex max-w-[430px]">
        <div className="w-full flex justify-center bg-white py-5 gap-10 items-center absolute">
          <a href={"/"}>
            <img className="w-[208px] h-[40px]" src="../assets/logo.png"></img>
          </a>
        </div>
      </div>
      <div className="mt-[90px] w-full max-w-[430px] flex flex-col justify-center mb-[130px]">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#9AB302",
              fontFamily: "'Noto Sans', sans-serif",
              colorBgContainer: "#999999",
            },
          }}
        >
          <div className="px-4">
            <Flex gap={"small"} vertical>
              <Carousel ref={carouselRef} afterChange={onChange}>
                <div
                  className="mb-7"
                  onClick={() => next()}
                  style={{ outline: "none", border: "none" }}
                >
                  <Image
                    className="w-[100%] h-[304px] outline-none"
                    src={data.imageMain}
                    preview={false}
                  />
                </div>
                <div
                  className="mb-7"
                  onClick={() => prev()}
                  style={{ outline: "none", border: "none" }}
                >
                  <Image
                    className="w-[100%] h-[304px] outline-none"
                    src={data.imageSub}
                    preview={false}
                  />
                </div>
              </Carousel>
              <div>
                <div className="text-[24px] font-semibold text-line-height-24">
                  {data.name}
                </div>
                <div className="text-[16px] font-semibold mt-[5px] text-line-height-24">
                  {data.describe}
                </div>
              </div>
              <Flex justify="space-between" vertical={false}>
                <div className="text-[12px] flex gap-2 w-[50%] text-line-height-18">
                  <img src="../assets/location.svg" />
                  {data.location}
                </div>
                <div className="text-[12px] flex gap-2 flex-auto text-line-height-18">
                  <img src="../assets/ruler.svg" />
                  {data.size !== 0 ? (
                    <>
                      {data.size}帖 {data.acreage}
                    </>
                  ) : (
                    "不明"
                  )}
                </div>
              </Flex>
              <Flex justify="space-between" vertical={false}>
                <div className="text-[12px] flex gap-2 w-[50%] text-line-height-18">
                  <img src="../assets/home.svg" />
                  {data.home}
                </div>
                <div className="text-[12px] flex gap-2 flex-auto text-line-height-18">
                  <img src="../assets/material.svg" />
                  {data.material}
                </div>
              </Flex>
              <Flex justify="space-between" vertical={false}>
                <div className="text-[12px] flex gap-2 w-[50%] items-start text-line-height-18">
                  <img
                    className="w-[12px] h-[18px]"
                    src="../assets/flame.svg"
                  />
                  {data.heater != "-" ? data.heater : "不明"}
                </div>
                <div className="text-[12px] flex gap-2 flex-auto w-[50%] items-start text-line-height-18">
                  <img className="mt-[4px]" src="../assets/image.svg" />
                  {data.scene != "-" ? data.scene : "不明"}
                </div>
              </Flex>
              <Flex className="p-5 bg-[#F2F2F2] rounded-lg mt-2" vertical>
                {data.outstanding.map((value, index) => (
                  <div className="text-[12px] text-line-height-18" key={index}>
                    {value}
                  </div>
                ))}
              </Flex>
              <iframe
                title="Google Maps"
                width="100%"
                height="200px"
                src={data.maps}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              />
              <Flex gap={"small"} className="mt-5" vertical>
                {data.comment.map((value, index) =>
                  index == 0 ? (
                    <Flex gap={"small"} key={index} vertical>
                      <div className="text-[16px] font-semibold text-line-height-28">
                        縄文不動産 担当者
                      </div>
                      <Flex gap={"small"} vertical={false}>
                        <img
                          className="w-[96px] h-[96px]"
                          src="../assets/user1.png"
                        />
                        <div className="text-[14px] text-comment">{value}</div>
                      </Flex>
                    </Flex>
                  ) : (
                    <Flex gap={"small"} key={index} vertical>
                      <div className="text-[16px] font-semibold text-line-height-28">
                        住んだ人
                      </div>
                      <Flex gap={"small"} vertical={false}>
                        <img
                          className="w-[96px] h-[96px]"
                          src="../assets/user2.png"
                        />
                        <div className="text-[14px] text-comment">{value}</div>
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

export default Detail;
