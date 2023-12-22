"use client";

import React from 'react'
import type { Pages } from "../tina/__generated__/types";

import Hero from "@/components/blocks/hero";
import Section01 from "@/components/blocks/section-01";
import Section02 from "@/components/blocks/section-02";
import Section03 from "@/components/blocks/section-03";
import Section04 from "@/components/blocks/section-04";
import Section05 from "@/components/blocks/section-05";
import Section06 from "@/components/blocks/section-06";
import Section07 from "@/components/blocks/section-07";


export const PageComponent = (props: Pages) => {
    return ( 
        <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case 'PagesBlocksHero':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                )
              case 'PagesBlocksSection01':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Section01 data={block} />
                  </React.Fragment>
                )
            case 'PagesBlocksSection02':
                return (
                    <React.Fragment key={i + block.__typename}>
                     <Section02 data={block} />
                     </React.Fragment>
                    )
            case 'PagesBlocksSection03':
                return (
                    <React.Fragment key={i + block.__typename}>
                     <Section03 data={block} />
                     </React.Fragment>
                    )
            case 'PagesBlocksSection04':
                return (
                    <React.Fragment key={i + block.__typename}>
                    <Section04 data={block} />
                    </React.Fragment>
                    )
            case 'PagesBlocksSection05':
                return (
                    <React.Fragment key={i + block.__typename}>
                    <Section05 data={block} />
                    </React.Fragment>
                    )
            case 'PagesBlocksSection06':
                return (
                    <React.Fragment key={i + block.__typename}>
                    <Section06 data={block} />
                    </React.Fragment>
                    )
            case 'PagesBlocksSection07':
                return (
                    <React.Fragment key={i + block.__typename}>
                    <Section07 data={block} />
                    </React.Fragment>
                    )
            default:
                return null
            }
          })
        : null}
    </>
  )
}
