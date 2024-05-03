/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `kaiwenhuu.github.io.demo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-s3',
      options: {
        aws: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION  // Replace with your bucket's region
        },
        buckets: [process.env.AWS_BUCKET],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `notes`,
        path: `${__dirname}/notes`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-image',
    // `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //     gatsbyRemarkPlugins: [],
    //     providers: { // This part is for adding the React components
    //       components: {
    //         // Import and add react-katex component
    //         InlineMath: require('react-katex').InlineMath,
    //         BlockMath: require('react-katex').BlockMath
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
  ],
}
