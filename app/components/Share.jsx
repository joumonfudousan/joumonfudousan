"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";

// eslint-disable-next-line react/prop-types
function Share({ data }) {
  let url = "url";
  const base_asset = "";

  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  // eslint-disable-next-line react/prop-types
  const title = `🏡 #縄文不動産 で「${data.describe} - ${data.name} - 」をチェック✨`;
  return (
    <>
      <div className="mt-5 bg-[#FDF9F1] rounded-md p-5 flex flex-col gap-5">
        <div className="text-[16px] font-semibold flex gap-2">
          <img
            className="w-[22px] h-[21px] text-line-height-24"
            src={`..${base_asset}/assets/git.svg`}
          />
          プレゼント企画
        </div>
        <div className="text-[14px] text-line-height-23">
          SNSやLINEで「縄文不動産」のお家を共有してもらうと、博物館からプレゼントがあります！
          ぜひお気に入りの物件をご家族やお友達に共有してください✨
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
              <img
                className="w-[32px] h-[32px]"
                src={`..${base_asset}/assets/x.svg`}
              />
            </TwitterShareButton>
            <LineShareButton url={url} title={title}>
              <img
                className="w-[32px] h-[32px]"
                src={`..${base_asset}/assets/line.svg`}
              />
            </LineShareButton>
            <FacebookShareButton url={url} quote={title}>
              <img
                className="w-[32px] h-[32px]"
                src={`..${base_asset}/assets/facebook.svg`}
              />
            </FacebookShareButton>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-[#FDF9F1] rounded-md p-5 flex flex-col gap-5">
        <div className="text-[16px] font-semibold flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196667 19.0217 0.000666667 18.5507 0 18V4C0 3.45 0.196 2.97933 0.588 2.588C0.98 2.19667 1.45067 2.00067 2 2H6.175C6.35833 1.41667 6.71667 0.937667 7.25 0.563C7.78333 0.188333 8.36667 0.000666667 9 0C9.66667 0 10.2627 0.187667 10.788 0.563C11.3133 0.938333 11.6673 1.41733 11.85 2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.0217 19.805 16.5507 20.0007 16 20H2ZM2 18H16V4H14V6C14 6.28333 13.904 6.521 13.712 6.713C13.52 6.905 13.2827 7.00067 13 7H5C4.71667 7 4.47933 6.904 4.288 6.712C4.09667 6.52 4.00067 6.28267 4 6V4H2V18ZM9 4C9.28333 4 9.521 3.904 9.713 3.712C9.905 3.52 10.0007 3.28267 10 3C9.99933 2.71733 9.90333 2.48 9.712 2.288C9.52067 2.096 9.28333 2 9 2C8.71667 2 8.47933 2.096 8.288 2.288C8.09667 2.48 8.00067 2.71733 8 3C7.99933 3.28267 8.09533 3.52033 8.288 3.713C8.48067 3.90567 8.718 4.00133 9 4Z"
              fill="#F54F77"
            />
          </svg>
          アンケート
        </div>
        <div className="text-[14px] text-line-height-23">
          ご参加いただきありがとうございます！<br></br>
          今後の展示をより良くするために、簡単なアンケートにご協力ください！
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe4485V3gSZklw0xD_svP7Fy_ashw1uS6_Ig4sJEE-9ac478g/viewform?usp=sf_link"
          className="text-[14px] text-line-height-23 font-[700] text-[#007AFF]"
        >
          アンケートに回答する
        </a>
      </div>
    </>
  );
}

export default Share;
