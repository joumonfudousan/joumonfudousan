import { Button, Checkbox, Flex, Modal, Slider } from "antd";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../page/Home";
import { locations } from "../data/mocData";

const dataBox1 = [
  "コンロあり（石囲炉）",
  "コンロあり（地床炉）",
  "コンロあり（土器埋設炉）",
  "なし",
];

const dataBox2 = ["冷蔵庫あり", "冷蔵庫なし"];

const dataBox3 = [
  "土器が学べる",
  "土偶と暮らせる",
  "アクセサリープレゼント",
  "黒曜石プレゼント",
];

// eslint-disable-next-line react/prop-types
function FilterModal({ open, setOpen }) {
  const { setData, keyLocation } = useContext(HomeContext);
  const [form, setForm] = useState({
    keyLocation: keyLocation,
    size: 19,
    heater: [],
    fridge: [],
    benefit: [],
  });

  useEffect(() => {
    onChangForm("keyLocation", Number(keyLocation) - 1);
  }, [keyLocation]);

  const onChangForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
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
        item.size <= form.size &&
        (form.keyLocation == 0 ? true : form.keyLocation == item.keyLocation) &&
        (form.heater.length ? form.heater.includes(item.heater) : true) &&
        (form.fridge.length == 2 || form.fridge.length == 0
          ? true
          : form.fridge[0] == "冷蔵庫あり"
          ? item.fridge == 1
          : item.fridge == "") &&
        (form.benefit.length ? form.benefit.includes(item.benefit) : true)
    );
    setData(dataFilter);
    setOpen(false);
  };

  return (
    <Modal
      title="絞り込み"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={
        <Flex className="mt-10" justify="center" gap={"small"} vertical={false}>
          <Button
            type="text"
            className="text-[16px] w-[50%] font-semibold text-[#8FAA02]"
            onClick={() => setOpen(false)}
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
            className="flex-auto text-center text-[16px] font-semibold"
            size="large"
          >
            検索する
          </Button>
        </Flex>
      }
    >
      <Flex className="cursor-pointer" gap={"small"} vertical>
        <div className="text-[16px] font-semibold">家の大きさ</div>
        <div className="text-[14px] font-semibold text-center">
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
          defaultValue={form.size}
          onChange={(e) => onChangForm("size", e)}
        />
        <Flex
          className="cursor-pointer"
          justify="space-between"
          gap={5}
          vertical={false}
        >
          <div className="text-[14px] text-[#00000099]">下限なし</div>
          <div className="text-[14px] text-[#00000099]">{form.size}帖</div>
        </Flex>
        {/* box 1 */}
        <div className="text-[16px] font-semibold mt-5">コンロ</div>
        {dataBox1.map((item, index) => (
          <Checkbox
            key={index}
            className="text-[16px] font-normal"
            value={item}
            onChange={(e) => onCheckBox("heater", e.target.value)}
          >
            {item}
          </Checkbox>
        ))}
        {/* box 2 */}
        <div className="text-[16px] font-semibold mt-5">冷蔵庫</div>
        {dataBox2.map((item, index) => (
          <Checkbox
            key={index}
            className="text-[16px] font-normal"
            value={item}
            onChange={(e) => onCheckBox("fridge", e.target.value)}
          >
            {item}
          </Checkbox>
        ))}
        {/* box 3 */}
        <div className="text-[16px] font-semibold mt-5">入居者特典</div>
        {dataBox3.map((item, index) => (
          <Checkbox
            key={index}
            className="text-[16px] font-normal"
            value={item}
            onChange={(e) => onCheckBox("benefit", e.target.value)}
          >
            {item}
          </Checkbox>
        ))}
      </Flex>
    </Modal>
  );
}

export default FilterModal;
