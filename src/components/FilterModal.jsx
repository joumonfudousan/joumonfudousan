import { Button, Checkbox, Flex, Modal, Slider } from "antd";
import { useState } from "react";

FilterModal.propTypes = {
  open: Boolean,
  setOpen: AnalyserNode,
};

function FilterModal({ open, setOpen }) {
  const [slider, setSlider] = useState(19);

  const onCheckBox = (value) => {
    console.log("checked", value);
  };

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

  return (
    <Modal
      title="絞り込み"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={
        <Flex
          className="mt-10"
          justify="center"
          gap={"small"}
          vertical={false}
        >
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
            onClick={() => setOpen(false)}
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
          defaultValue={slider}
          onChange={(e) => setSlider(e)}
        />
        <Flex
          className="cursor-pointer"
          justify="space-between"
          gap={5}
          vertical={false}
        >
          <div className="text-[14px] text-[#00000099]">下限なし</div>
          <div className="text-[14px] text-[#00000099]">{slider}帖</div>
        </Flex>
        {/* box 1 */}
        <div className="text-[16px] font-semibold mt-5">コンロ</div>
        {dataBox1.map((item, index) => (
          <Checkbox
            key={index}
            className="text-[16px] font-normal"
            value={item}
            onChange={(e) => onCheckBox(e.target.value)}
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
            onChange={(e) => onCheckBox(e.target.value)}
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
            onChange={(e) => onCheckBox(e.target.value)}
          >
            {item}
          </Checkbox>
        ))}
      </Flex>
    </Modal>
  );
}

export default FilterModal;
