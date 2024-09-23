"use client";
import { Button, Checkbox, Drawer, Flex, Slider } from "antd";
import { useContext, useEffect, useState } from "react";
import { locations } from "../data/mocData";
import { HomeContext } from "../home/page";

const dataBox1 = [
  "コンロあり（石囲炉）",
  "コンロあり（地床炉）",
  "コンロあり（土器埋設炉）",
  "なし",
];

const dataBox2 = ["冷蔵庫あり", "冷蔵庫なし"];

const dataBox3 = [
  "新しい土器が学べる",
  "土偶と暮らせる",
  "アクセサリープレゼント",
  "黒曜石プレゼント",
];

// eslint-disable-next-line react/prop-types
const FilterDrawer = ({ open, setOpen }) => {
  const { setData, keyLocation } = useContext(HomeContext);
  const [form, setForm] = useState({
    keyLocation: keyLocation,
    size: [0, 19],
    heater: [],
    fridge: [],
    benefit: [],
  });

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onChangForm("keyLocation", Number(keyLocation));
  }, [keyLocation]);

  const onChangForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onClearForm = () => {
    setForm({
      keyLocation: keyLocation,
      size: [0, 19],
      heater: [],
      fridge: [],
      benefit: [],
    });
    setData(
      locations.filter((item) =>
        Number(keyLocation) == 0
          ? true
          : item.keyLocation == Number(keyLocation)
      )
    );
  };

  const onCheckBox = (key, dataValue) => {
    let value = dataValue === "なし" ? "-" : dataValue;
    setForm((prev) => {
      const currentValues = prev[key];
      const valueExists = currentValues.includes(value);
      const updatedValues = valueExists
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [key]: updatedValues,
      };
    });
  };

  const onSubmit = () => {
    const dataFilter = locations.filter(
      (item) =>
        item.size >= form.size[0] &&
        item.size <= form.size[1] &&
        (form.keyLocation == 0 ? true : form.keyLocation == item.keyLocation) &&
        (form.heater.length ? form.heater.includes(item.heater) : true) &&
        (form.fridge.length == 2 || form.fridge.length == 0
          ? true
          : form.fridge[0] == "冷蔵庫あり"
          ? item.fridge == 1
          : item.fridge == "") &&
        (form.benefit.length
          ? item.benefit.some((b) => form.benefit.includes(b))
          : true)
    );
    setData(dataFilter);
    setOpen(false);
  };

  return (
    <>
      <Drawer title="絞り込み" onClose={onClose} open={open}>
        <Flex className="cursor-pointer" gap={"small"} vertical>
          <Flex
            className="mt-1 relative"
            justify="center"
            gap={"small"}
            vertical={false}
          >
            <div className="text-[16px] text-center font-semibold text-line-height-24 flex-auto">
              絞り込み
            </div>
            <div
              className="absolute right-0 cursor-pointer"
              onClick={() => onClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.7"
                height="14.7"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99995 9.41391L13.6569 15.0709C13.8455 15.2531 14.0982 15.3539 14.3603 15.3516C14.6225 15.3493 14.8734 15.2441 15.0588 15.0587C15.2442 14.8733 15.3493 14.6225 15.3516 14.3603C15.3539 14.0981 15.2531 13.8455 15.0709 13.6569L9.41395 7.99991L15.0709 2.34291C15.2531 2.1543 15.3539 1.9017 15.3516 1.6395C15.3493 1.37731 15.2442 1.1265 15.0588 0.941087C14.8734 0.755679 14.6225 0.65051 14.3603 0.648231C14.0982 0.645953 13.8455 0.746747 13.6569 0.928905L7.99995 6.58591L2.34295 0.928905C2.15349 0.75125 1.90236 0.654271 1.64268 0.658487C1.38299 0.662704 1.13514 0.767787 0.951555 0.951499C0.767972 1.13521 0.663065 1.38314 0.659032 1.64283C0.654999 1.90251 0.752156 2.15358 0.929945 2.34291L6.58595 7.99991L0.928945 13.6569C0.833435 13.7492 0.757253 13.8595 0.704844 13.9815C0.652435 14.1035 0.624849 14.2347 0.623695 14.3675C0.622541 14.5003 0.647843 14.632 0.698124 14.7549C0.748404 14.8778 0.822658 14.9894 0.91655 15.0833C1.01044 15.1772 1.1221 15.2514 1.24499 15.3017C1.36789 15.352 1.49957 15.3773 1.63235 15.3762C1.76513 15.375 1.89635 15.3474 2.01835 15.295C2.14035 15.2426 2.2507 15.1664 2.34295 15.0709L7.99995 9.41391Z"
                  fill="black"
                />
              </svg>
            </div>
          </Flex>
          <div className="text-[16px] font-semibold text-line-height-24 mt-2">
            家の大きさ
          </div>
          <div className="text-[14px] font-semibold text-center text-line-height-24">
            下限なし〜８帖
          </div>
          <Slider
            styles={{
              track: {
                background: "#8FAA02",
              },
              rail: {
                background: "rgb(143 170 2 / 38%)",
              },
            }}
            range
            value={form.size}
            max={19}
            onChange={(e) => onChangForm("size", e)}
          />
          <Flex
            className="cursor-pointer"
            justify="space-between"
            gap={5}
            vertical={false}
          >
            <div className="text-[14px] text-[#00000099] text-line-height-24">
              下限なし
            </div>
            <div className="text-[14px] text-[#00000099]">
              {form.size[0]}〜{form.size[1]}帖
            </div>
          </Flex>
          {/* box 1 */}
          <div className="text-[16px] font-semibold mt-5 text-line-height-24">
            コンロ
          </div>
          {dataBox1.map((item, index) => (
            <Checkbox
              key={index}
              className="text-[16px] font-normal"
              value={item}
              checked={form.heater.includes(item === "なし" ? "-" : item)}
              onChange={(e) => onCheckBox("heater", e.target.value)}
            >
              {item}
            </Checkbox>
          ))}

          {/* box 2 */}
          <div className="text-[16px] font-semibold mt-5 text-line-height-24">
            冷蔵庫
          </div>
          {dataBox2.map((item, index) => (
            <Checkbox
              key={index}
              className="text-[16px] font-normal"
              value={item}
              checked={form.fridge.includes(item)}
              onChange={(e) => onCheckBox("fridge", e.target.value)}
            >
              {item}
            </Checkbox>
          ))}

          {/* box 3 */}
          <div className="text-[16px] font-semibold mt-5 text-line-height-24">
            入居者特典
          </div>
          {dataBox3.map((item, index) => (
            <Checkbox
              key={index}
              className="text-[16px] font-normal"
              value={item}
              checked={form.benefit.includes(item)}
              onChange={(e) => onCheckBox("benefit", e.target.value)}
            >
              {item}
            </Checkbox>
          ))}
        </Flex>
        <Flex className="mt-10" justify="center" gap={"small"} vertical={false}>
          <Button
            type="text"
            className="text-[16px] w-[50%] font-semibold text-[#8FAA02] text-line-height-24"
            onClick={() => onClearForm()}
            size="large"
            shape="round"
          >
            条件をクリア
          </Button>
          <Button
            key="submit"
            type="primary"
            shape="round"
            onClick={() => onSubmit()}
            className="flex-auto text-center text-[16px] font-semibold text-line-height-24"
            size="large"
          >
            検索する
          </Button>
        </Flex>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
