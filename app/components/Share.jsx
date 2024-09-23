"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";

// eslint-disable-next-line react/prop-types
function Share({ data }) {
  let url = "url";

  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  // eslint-disable-next-line react/prop-types
  const title = data.name;
  return (
    <>
      <div className="mt-5 bg-[#FDF9F1] rounded-md p-5 flex flex-col gap-5">
        <div className="text-[16px] font-semibold flex gap-2">
          <img
            className="w-[22px] h-[21px] text-line-height-24"
            src="../assets/git.svg"
          />
          プレゼント企画
        </div>
        <div className="text-[14px] text-line-height-23">
          SNSやLINEで「縄文不動産」のお家を共有してもらうと、博物館からプレゼントがあります！
          ぜひお気に入りの物件をご家族やお友達に共有してください✨
        </div>
        <div className="text-[12px] text-[#666666] text-line-height-20">
          ※一度このお家のシェアボタンを押すと、別のお家では投稿できなくなります📮
        </div>
        <div className="text-[12px] text-[#666666] text-line-height-20">
          ※2024年10月12日時点（なくなり次第終了します🙏）
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-[12px] text-center text-line-height-18">
            このページをシェア
          </div>
          <div className="flex gap-2 cursor-pointer">
            <TwitterShareButton url={url} title={title}>
              <img className="w-[32px] h-[32px]" src="../assets/x.svg" />
            </TwitterShareButton>
            <LineShareButton url={url} title={title}>
              <img className="w-[32px] h-[32px]" src="../assets/line.svg" />
            </LineShareButton>
            <FacebookShareButton url={url} quote={title}>
              <img className="w-[32px] h-[32px]" src="../assets/facebook.svg" />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
