import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { featureBlockGridSchema } from "../../components/blocks/feature-grid";
import { section02BlockSchema } from "../../components/blocks/section-02";
import { section03BlockSchema } from "../../components/blocks/section-03";
import { section04BlockSchema } from "../../components/blocks/section-04";
import { section05BlockSchema } from "../../components/blocks/section-05";
import { section06BlockSchema } from "../../components/blocks/section-06";
import { section07BlockSchema } from "../../components/blocks/section-07";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      } else {
        return undefined;
        //return `/${document._sys.filename}`;
      }
    },
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockGridSchema,
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
