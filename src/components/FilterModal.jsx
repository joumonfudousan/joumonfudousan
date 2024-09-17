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
  "新しい土器が学べる",
  "土偶と暮らせる",
  "アクセサリープレゼント",
  "黒曜石プレゼント",
];

// eslint-disable-next-line react/prop-types
function FilterModal({ open, setOpen }) {
  const { setData, keyLocation } = useContext(HomeContext);
  const [form, setForm] = useState({
    keyLocation: keyLocation,
    size: [0, 19],
    heater: [],
    fridge: [],
    benefit: [],
  });

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
      locations.filter((item) => item.keyLocation == Number(keyLocation))
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
        form.keyLocation == item.keyLocation &&
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
    <Modal
      title="絞り込み"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={
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
      }
    >
      <Flex className="cursor-pointer" gap={"small"} vertical>
        <div className="text-[16px] font-semibold text-line-height-24">家の大きさ</div>
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
          <div className="text-[14px] text-[#00000099] text-line-height-24">下限なし</div>
          <div className="text-[14px] text-[#00000099]">
            {form.size[0]}〜{form.size[1]}帖
          </div>
        </Flex>
        {/* box 1 */}
        <div className="text-[16px] font-semibold mt-5 text-line-height-24">コンロ</div>
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
        <div className="text-[16px] font-semibold mt-5 text-line-height-24">冷蔵庫</div>
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
        <div className="text-[16px] font-semibold mt-5 text-line-height-24">入居者特典</div>
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
    </Modal>
  );
}

export default FilterModal;
