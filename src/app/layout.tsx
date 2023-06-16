import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import Providers from "@/app/Providers";
import Footer from "@/components/ui/footer/Footer";
import LayoutComp from "@/components/LayoutComp";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "EDOPAG Solutions",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          <Navbar />
          <LayoutComp>{children}</LayoutComp>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
