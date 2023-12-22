export const metadata = {
  title: "Home - FinTech",
  description: "Page description",
};
import { PageComponent } from "@/components/page";
import client from "@/tina/__generated__/client";

export default function Home() {
    const result = await client.queries.contentQuery({ variables: { relativePath: "home.md" } });
   
  return <PageComponent {...result} />;
}
