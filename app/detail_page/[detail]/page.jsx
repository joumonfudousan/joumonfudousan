import { locations } from "../../data/mocData";
import Detail from "../../detail/page";

export async function generateMetadata({ params }) {
  const name = params.detail;
  const getData = locations.filter((item) => item.nameEg == name);
  const data = getData.length ? getData[0] : null;

  let title = "";
  let description = "";
  const ogp =
    "https://manhtd-amcolab.github.io/next_page/images/OGP_original.png";

  if (data) {
    title = `🏡 縄文不動産で「${data.describe} - ${data.name} - 」をチェック✨`;
  }

  return {
    title: title,
    description: description,
    openGraph: {
      images: [
        {
          url: ogp,
          alt: "ogp image",
        },
      ],
    },
    twitter: {
      title: title,
      description: description,
      card: "summary_large_image",
      images: [ogp],
    },
  };
}

export async function generateStaticParams() {
  const slugs = locations.map((item) => item.nameEg);
  return slugs.map((slug) => ({
    detail: slug,
  }));
}

const DetailPage = ({ params, searchParams }) => {
  return <Detail params={params.detail} />;
};

export default DetailPage;
