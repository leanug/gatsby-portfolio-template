module.exports = {
  siteMetadata: {
    title: "Erica Legrand",
    titleTemplate: "%s · Erica Legrand",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://omegainteriordesign.netlify.app", // No trailing slash allowed!
    image: "/mainImg.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ 
          resolve: "gatsby-remark-images",
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 1200,
          },
        }],
      },
    },
  ],
}