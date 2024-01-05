import Link from "next/link";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";


export const Header = ({ data }: { data: GlobalHeader }) => {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            {data.image && (
            <Link className="block" href="/" aria-label="Cruip" tinaField={tinaField(data.image, "src")}
>
               <Image
                    src={data.image.src}
                    width={130}
                    height={130}
                    alt="logo"
                  /> 
                  </Link>)}
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link
                  className="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm"
                  href="/apply"
                >
                  Get your card
                  <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg
                      className="fill-current"
                      width="12"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export const headerBlockSchema: TinaTemplate = {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
          {
      type: "object",
      label: "Logo",
      name: "image",
      ui: {
        defaultItem: {
          src: "images/logo.png",
          alt: "Hero Image",
          width: 130,
          height: 130,
        },
      },
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
        {
          name: "width",
          label: "Width",
          type: "number",
        },
        {
          name: "height",
          label: "Height",
          type: "number",
        }
      ],
    },
        iconSchema as any,
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Color",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "home",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
          ],
        },
      ],
    }


