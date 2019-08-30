import React from "react"
import { Link, graphql } from "gatsby"

import MyPortfolio from "../components/myportfolio"
import Layout from "../components/layout"
import { rhythm, scale, Typography } from "../utils/typography"
import Image from "gatsby-image"

class Portfolio extends React.Component {
  
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title

      return (
        <Layout location={this.props.location} title={siteTitle}>
            <MyPortfolio />
        </Layout>
      )
    }
  }
  
  export default Portfolio

  export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`