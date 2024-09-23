import { locations } from "../../data/mocData";
import Detail from "../../detail/page";

const title = "縄文不動産";
const description = "縄文不動産";
const ogp =
  "https://363f-222-252-21-148.ngrok-free.app/images/OGP_original.png";

export async function generateMetadata({ params }) {
  console.log("params", params.detail);
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
  return <Detail />;
};

export default DetailPage;
