import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { featureBlockSchema } from "../../components/blocks/features";
import { bannerBlockSchema } from "../../components/blocks/banner";
import { section02BlockSchema } from "../../components/blocks/section-02";
import { section03BlockSchema } from "../../components/blocks/section-03";
import { section04BlockSchema } from "../../components/blocks/section-04";
import { section05BlockSchema } from "../../components/blocks/section-05";
import { section06BlockSchema } from "../../components/blocks/section-06";
import { section07BlockSchema } from "../../components/blocks/section-07";



const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        bannerBlockSchema,
        section02BlockSchema,
        section03BlockSchema,
        section04BlockSchema,
        section05BlockSchema,
        section06BlockSchema,
        section07BlockSchema,
      ],
    },
  ],
};

export default Page;
