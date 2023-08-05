import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tzipora.zip`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {},
    },
  ],
};

export default config;
