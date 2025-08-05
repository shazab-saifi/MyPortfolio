import Landing from "@/components/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shazab Saifi",
  description:
    "I'm a design engineer who crafts user interfaces and writes code. I blend design and development to create seamless, engaging digital experiences.",
  openGraph: {
    images: [
      {
        url: "/ogimage.png",
        alt: "Shazab Saifi OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shazab Saifi",
    description:
      "I'm a design engineer who crafts user interfaces and writes code. I blend design and development to create seamless, engaging digital experiences.",
    images: [
      {
        url: "/ogimage.png",
        alt: "Shazab Saifi OG Image",
      },
    ],
  },
};

export default function Home() {
  return <Landing />;
}
