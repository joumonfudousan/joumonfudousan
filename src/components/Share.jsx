import git from "../assets/git.svg";
import xIcon from "../assets/x.svg";
import line from "../assets/line.svg";
import facebook from "../assets/facebook.svg";
import ogp from "../assets/OGP_original.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";
import { Helmet, HelmetProvider } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
function Share({ data }) {
  const url = window.location.href;
  // eslint-disable-next-line react/prop-types
  const title = data.name;
  // eslint-disable-next-line react/prop-types
  const description = data.describe;
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogp} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogp} />
      </Helmet>
      <div className="mt-5 bg-[#FDF9F1] rounded-md p-5 flex flex-col gap-5">
        <div className="text-[16px] font-semibold flex gap-2">
          <img className="w-[22px] h-[21px] text-line-height-24" src={git} />
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
              <img className="w-[32px] h-[32px]" src={xIcon} />
            </TwitterShareButton>
            <LineShareButton url={url} title={title}>
              <img className="w-[32px] h-[32px]" src={line} />
            </LineShareButton>
            <FacebookShareButton url={url} quote={title}>
              <img className="w-[32px] h-[32px]" src={facebook} />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Share;
