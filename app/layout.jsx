import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Store from "./store/page";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Barber Bettel",
};

const roboto = Roboto({
  subsets: ["latin"],
  style: ["italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
