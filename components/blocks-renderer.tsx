import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";
import { Banner } from "./blocks/banner";
import Section02 from "@/components/blocks/section-02";
import Section03 from "@/components/blocks/section-03";
import Section04 from "@/components/blocks/section-04";
import Section05 from "@/components/blocks/section-05";
import Section06 from "@/components/blocks/section-06";
import Section07 from "@/components/blocks/section-07";


export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.filter(block => block !== null).map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksBanner":
        return <Banner data={block} />;
        case 'PageBlocksSection02':
            return (
                <Section02 data={block} />
        )
        case 'PageBlocksSection03':
            return <Section03 data={block} />
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
        )

    default:
      return null;
  }
};
