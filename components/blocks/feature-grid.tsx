import { Icon } from "../utils/icon";
import { iconSchema } from "../utils/icon";
import {
  PageBlocksFeatureGrid,
  PageBlocksFeatureGridItems,
} from "../../tina/__generated__/types";

export function FeatureGrid({
  featuresColor,
  data,
  dataIndex,
}: {
  featuresColor: string;
  data: PageBlocksFeatureGridItems;
  dataIndex: number;
}) {
  return (
    <div
      className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-slate-200 last:after:hidden"
      data-aos="fade-up"
      data-aos-delay={dataIndex * 100}
    >
      <div className="mb-3">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
              <stop stopColor="#2563EB" offset="0%" />
              <stop stopColor="#3B82F6" offset="100%" />
            </linearGradient>
          </defs>
          <g fillRule="nonzero" fill="none">
            <path
              d="M43.443 49.745a1.028 1.028 0 0 1-.262-.019l-23.5-4.9a1 1 0 0 1-.775-1.186l6.2-29.352a1.006 1.006 0 0 1 1.182-.773l23.42 4.885a1 1 0 0 1 .776 1.183l-6.12 29.37a1 1 0 0 1-.921.795v-.003Z"
              fill="#7DD3FC"
            />
            <path
              d="M25 32H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1ZM8 15.25l3.5 4 6.5-6.5-1-.75-5.5 4.25-2.5-2-1 1Z"
              fill="url(#a)"
              style={{ mixBlendMode: "multiply" }}
              transform="translate(6 6)"
            />
          </g>
        </svg>
      </div>
      <h4 className="text-xl font-bold mb-1">Create custom cards</h4>
      <p className="text-slate-500">
        Create cards that work exactly as you configured them. Make real-time
        decisions on charges and spendings.
      </p>
    </div>
  );
}

export const FeatureGrids = ({ data }: { data: PageBlocksFeatureGrid }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-28 md:pb-20">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none">
            {data.items &&
              data.items.map(function (block, i) {
                if (!block) return null;
                return (
                  <FeatureGrid
                    featuresColor={data.color ?? ""}
                    dataIndex={i}
                    key={i}
                    data={block}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const featureBlockGridSchema = {
  name: "featureGrid",
  label: "Feature Grid",
  ui: {
    previewSrc: "/blocks/features-grid.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
