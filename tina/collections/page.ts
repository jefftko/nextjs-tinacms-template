import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { featureBlockGridSchema } from "../../components/blocks/section-01";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
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
        featureBlockGridSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      ],
    }
  ],
};
