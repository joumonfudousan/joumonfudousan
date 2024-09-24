"use client";
import { base_asset } from "../home/page";

function Loading() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[430px] h-[100vh] flex flex-col justify-center items-center relative bg[#FDF9F1]">
        <img
          width={"320px"}
          height={"240px"}
          src={`${base_asset}/assets/logo2.png`}
        />
      </div>
    </div>
  );
}

export default Loading;
