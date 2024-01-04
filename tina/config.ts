import { UsernamePasswordAuthJSProvider, TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";
import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const config = defineConfig({
    contentApiUrlOverride: "/api/tina/gql",
    authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
    media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    },
    /*tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
      static: true,
    },*/
  },
    build: {
        publicFolder: "public",
        outputFolder: "admin", // within the public folder
    },
    schema: {
        collections: [
            TinaUserCollection,
            Post,
            Global,
            Author,
            Page
        ]
    }
});
export default config;
