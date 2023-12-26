"use client";

import React from "react";
import type { PageQuery, PageBlocks } from "@/tina/__generated__/types";

import Hero from "@/components/blocks/hero";
import { FeatureGrids } from "@/components/blocks/feature-grid";
import Section02 from "@/components/blocks/section-02";
import Section03 from "@/components/blocks/section-03";
import Section04 from "@/components/blocks/section-04";
import Section05 from "@/components/blocks/section-05";
import Section06 from "@/components/blocks/section-06";
import Section07 from "@/components/blocks/section-07";

import { tinaField, useTina } from "tinacms/dist/react";

export const PageComponent = (props: {
  data: PageQuery;
  variables: object;
  query: string;
}) => {
  const { data } = useTina(props);
  return (
    <>
      {data.page.blocks
        ? data.page.blocks.map(function (block, i) {
            if (!block) return null;
            return (
              <div
                key={i + block.__typename}
                data-tina-field={tinaField(block)}
              >
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  console.log("blockname", block.__typename);
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatureGrid":
      return <FeatureGrids data={block} />;
   /* case 'PageBlocksSection02':
                return (
                     <Section02 data={block} />
                    )
            case 'PageBlocksSection03':
                return (
                     <Section03 data={block} />
                    )
            case 'PageBlocksSection04':
                return (
                    <Section04 data={block} />
                    )
            case 'PageBlocksSection05':
                return (
                    <Section05 data={block} />
                    )
            case 'PageBlocksSection06':
                return (
                    <Section06 data={block} />
                    )
            case 'PageBlocksSection07':
                return (
                    <Section07 data={block} />
                    )*/
    default:
      return null;
  }
};
