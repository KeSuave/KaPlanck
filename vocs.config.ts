import { defineConfig } from "vocs";

export default defineConfig({
  rootDir: "docssrc",
  basePath: "/KaPlanck",
  baseUrl: "https://kesuave.github.io/KaPlanck",
  iconUrl: "/suave.png",
  title: "KaPlanck",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    /* {
      text: "Example",
      link: "/example",
    }, */
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
    { text: "Guide & API", link: "/getting-started", match: "/" },
    /* { text: "Blog", link: "/blog" }, */
  ],
});
