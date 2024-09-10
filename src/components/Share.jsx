import git from "../assets/git.svg";
import xIcon from "../assets/x.svg";
import line from "../assets/line.svg";
import facebook from "../assets/facebook.svg";

function Share() {
  return (
    <div className="mt-5 bg-[#FDF9F1] rounded-md p-6 flex flex-col gap-5">
      <div className="text-[16px] font-semibold flex gap-2">
        <img className="w-[22px] h-[21px]" src={git} />
        プレゼント企画
      </div>
      <div className="text-[14px]">
        SNSやLINEで「縄文不動産」のお家を共有してもらうと、博物館からプレゼントがあります！
        ぜひお気に入りの物件をご家族やお友達に共有してください✨
      </div>
      <div className="text-[12px] text-[#666666]">
        ※2024年10月12日時点（なくなり次第終了します。）
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-[12px] text-center">このページをシェア</div>
        <div className="flex gap-2 cursor-pointer">
          <img className="w-[32px] h-[32px]" src={xIcon} />
          <img className="w-[32px] h-[32px]" src={line} />
          <img className="w-[32px] h-[32px]" src={facebook} />
        </div>
      </div>
    </div>
  );
}

export default Share;
