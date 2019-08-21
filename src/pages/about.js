import React from "react"
import { Link, graphql } from "gatsby"

import AboutMe from "../components/aboutme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"


class About extends React.Component {
  
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const pticecream = "https://live.staticflickr.com/65535/48594922931_fc56dfd1b0_o.jpg"
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img alt="ice cream cone" src={pticecream}/>
       <AboutMe/>
      </Layout>
    )
  }
}

export default About

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
