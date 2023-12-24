import { PageComponent } from "@/components/page";
//import client from "@/tina/__generated__/client";
import { client } from "@/tina/__generated__/databaseClient";

export default async function Home() {
    const res = await client.queries.page({ relativePath: "home.md" });
  return <PageComponent 
  data={JSON.parse(JSON.stringify(res.data))}
  query={res.query}
  variables={res.variables}
 />;
}

export const metadata = {
  title: "Home - FinTech",
  description: "Page description",
};
