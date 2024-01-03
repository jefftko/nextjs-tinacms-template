"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "@/tina/__generated__/databaseClient";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Layout({ children,params}: { children: React.ReactNode,params:{ file_name: string }}) {
     
 //const res = await client.queries.contentQuery({ relativePath: `${props.params.file_name}.md` });

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
