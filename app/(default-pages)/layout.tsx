//"use client";

//import { useEffect } from "react";

import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import layoutData from "../../content/global/index.json";
import { Global } from "@/tina/__generated__/types";

export default async function Layout({
    rawData = {},
  data = layoutData,
children
}: { 
    rawData?: object;
    data?: Omit<Global, "id" | "_sys" | "_values">;
    children: React.ReactNode,params:{ file_name: string }}) {
     
 //const res = await client.queries.contentQuery({ relativePath: `${props.params.file_name}.md` });
  //const res = await getStaticProps(params);
  /*useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });*/
 //console.log("Layout",res);

  return (
    <>
      <Header data={data?.header} />

      <main className="grow">{children}</main>

      <Footer
      rawData={rawData}
      data={data?.footer}
      icon={data?.header.icon}
      />
    </>
  );
}

/*const getStaticProps = async (params) => {

  let postResponse = {}
  try {
    //postResponse = await client.queries.post({ relativePath: 'HelloWorld.md' })
    postResponse = await client.queries.contentQuery({ relativePath: `${params.file_name}.md` });
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      data: postResponse.data,
      query: postResponse.query,
      variables: postResponse.variables,
    },
  }
}*/
