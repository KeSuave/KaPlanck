import { defineConfig } from "vocs";

export default defineConfig({
  rootDir: "docssrc",
  basePath: "/KaPlanck",
  baseUrl: "https://kesuave.github.io/KaPlanck",
  iconUrl: "/suave.png",
  title: "KaPlanck",
  sidebar: [
    {
      text: "Introduction",
      link: "/introduction",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "API Reference",
      link: "/api",
    },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/KeSuave/KaPlanck",
    },
  ],
  topNav: [
    { text: "API Reference", link: "/api", match: "/" },
    /* { text: "Blog", link: "/blog" }, */
  ],
});
