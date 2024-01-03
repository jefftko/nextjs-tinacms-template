//"use client";

//import { useEffect } from "react";

import React, { ReactNode }from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import layoutData from "../../content/global/index.json";
import { Global } from "@/tina/__generated__/types";

export default function Layout({
  rawData = {},
  data = layoutData,
  children,
}: {
  rawData?: object;
  data?: Omit<Global, 'id' | '_sys' | '_values'>;
  children: ReactNode;
}){


  return (
    <>
      <Header data={data?.header} />
      <main className="grow">{children}</main>

      <Footer rawData={rawData} data={data?.footer} icon={data?.header.icon} />
    </>
  );
}

