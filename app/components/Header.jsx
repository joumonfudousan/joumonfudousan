"use client";
import { Flex } from "antd";
import { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import { base_asset } from "../home/page";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-[100%] px-5 bg-white z-10 flex max-w-[430px]">
      <div className="w-full flex justify-end py-5 gap-10 items-center">
        <a href={`${base_asset}`}>
          <img className="w-[208px] h-[40px]" src={`${base_asset}/images/logo.png`} />
        </a>
        <Flex
          className="cursor-pointer"
          gap={"small"}
          align="center"
          vertical
          onClick={() => setOpen(!open)}
        >
          <img className="w-[16px] h-[16px]" src={`${base_asset}/assets/modalIcon.png`} />{" "}
          <div className="text-[12px]">絞り込み</div>
        </Flex>
      </div>
      <FilterDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
