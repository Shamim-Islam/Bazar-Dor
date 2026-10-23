import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navlinks from "./components/Navlinks";
import Marquee from "./components/Marquee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

const HindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "বাজারদর — আজকের পণ্যমূল্য",
  description: "প্রতিদিনের বাজারদর ও দামের পরিবর্তন",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${HindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastContainer position="top-right" autoClose={3000} />
        <Header />
        <Navlinks />
        <Suspense fallback={<div className="h-10" />}>
          <Marquee />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
