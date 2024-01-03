import React from "react";
import { notFound } from 'next/navigation'
//import client from "@/tina/__generated__/client";
import { client } from "@/tina/__generated__/databaseClient";
//import { useTina } from "tinacms/dist/react";
import { PageComponent } from "@/components/page";


export default async function Home(
    props:{ params: { file_name: string } }
) {
  //const { params } =props;
  const res = await client.queries.contentQuery({ relativePath: `${props.params.file_name}.md` });
  //console.log("Home", props);
  //console.log('home',res.data?.Global)
  if(!res.data?.page) {
    return notFound();
  }
  return (
    <PageComponent
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}

export const metadata = {
  title: "Home - Nantronix",
  description: "Page description",
}
