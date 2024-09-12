import { Flex } from "antd";
import { useState } from "react";
import logo from "../assets/logo.png";
import modalIcon from "../assets/modalIcon.png";
import FilterModal from "./FilterModal";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-[100%] px-5 bg-white z-10 flex max-w-[430px]">
      <div className="w-full flex justify-end py-5 gap-10 items-center">
        <Link to={"/proj_hakubuku/"}>
          <img className="w-[208px] h-[40px]" src={logo}></img>
        </Link>
        <Flex
          className="cursor-pointer"
          gap={"small"}
          align="center"
          vertical
          onClick={() => setOpen(true)}
        >
          <img className="w-[16px] h-[16px]" src={modalIcon}></img>{" "}
          <div className="text-[12px]">絞り込み</div>
        </Flex>
      </div>
      <FilterModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
