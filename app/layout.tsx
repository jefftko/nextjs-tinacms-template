"use client";

import { useEffect } from "react";

import "./css/style.css";

import AOS from "aos";
import "aos/dist/aos.css";


import localFont from "next/font/local";

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-350.woff2",
      weight: "350",
    },
    {
      path: "../public/fonts/Aspekta-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Aspekta-450.woff2",
      weight: "450",
    },
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-550.woff2",
      weight: "550",
    },
    {
      path: "../public/fonts/Aspekta-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

/*export const metadata = {
  title: ",
  description: "",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <html lang="en">
      <body
        className={`${aspekta.variable} font-aspekta antialiased bg-white text-slate-800 font-[350]`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
