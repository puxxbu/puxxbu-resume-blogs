import autoprefixer from "autoprefixer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";
require("dotenv").config();

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/valerino-gozen-995473148/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/puxxbu",
  },
  email: {
    label: "Email",
    href: "mailto:bvgozen@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  // docs: {
  //   label: "Documentation",
  //   to: "docs",
  // },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "https://puxxbu.my.id/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Valerino Gozen",
  tagline:
    "A Senior Full-Stack Software Engineer passionate about solving meaningful problems at scale.",
  url: "https://puxxbu.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "digipie",
  projectName: "kaya-folio",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Valerino Gozen",
      logo: {
        alt: "Valerino Gozen",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://puxxbu.my.id/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            // internetProfiles.blog,
            // internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.resume,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `<a href="https://evantay.com">Design by Valerino Gozen, Template by Evan Tay</a> • <a href="https://github.com/puxxbu/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/puxxbu/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
    //[
    // "@dipakparmar/docusaurus-plugin-umami",
    // /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
    // ({
    //   websiteID: process.env.UMAMI_WEB_ID,
    //   analyticsDomain: process.env.UMAMI_WEB_DOMAIN,
    //   scriptName: "script.js",
    //   dataHostURL: process.env.UMAMI_WEB_DOMAIN,
    //   dataAutoTrack: true, // Optional, defaults to true
    //   dataDoNotTrack: false, // Optional, defaults to false
    //   dataCache: false, // Optional, defaults to false
    //   dataDomains: process.env.UMAMI_WEB_DOMAIN, // Optional, comma separated list of domains, *Recommended*
    //   dataExcludeSearch: false, // Optional, defaults to false
    //   dataExcludeHash: false, // Optional, defaults to false
    //   dataTag: "puxxbu", // Optional
    // }),
    //],
  ],
  scripts: [
    {
      src: "https://tianji.slapmomon.my.id/tracker.js",
      async: true,
      defer: true,
      "data-website-id": "cmfm6obyg0001a3uyoij9k81z",
    },
    {
      src: `https://${process.env.UMAMI_WEB_DOMAIN}/script.js`,
      async: true,
      defer: true,
      "data-website-id": process.env.UMAMI_WEB_ID,
      "data-host-url": process.env.UMAMI_WEB_DOMAIN,
      "data-auto-track": "true",
      "data-do-not-track": "false",
      "data-cache": "false",
      "data-domains": process.env.UMAMI_WEB_DOMAIN,
      "data-exclude-search": "false",
      "data-exclude-hash": "false",
      "data-tag": "puxxbu",
    },
  ],
};
