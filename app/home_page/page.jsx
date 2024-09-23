import Home from "../home/page";

const title = "縄文不動産";
const description = "縄文不動産";
const ogp =
  "https://363f-222-252-21-148.ngrok-free.app/images/OGP_original.png";

export const metadata = {
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

const HomePage = () => {
  return <Home />;
};

export default HomePage;
