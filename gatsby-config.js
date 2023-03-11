module.exports = {
  siteMetadata: {
    title: `ColorOdysee`,
    siteUrl: `https://colorodysee.com`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/logo-full.png",
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
};
