import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "EDOPAG Studio",
  description: "portfolio website",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
