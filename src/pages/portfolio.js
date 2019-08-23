import React from "react"
import { Link, graphql } from "gatsby"

import MyPortfolio from "../components/myportfolio"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

class Portfolio extends React.Component {
  
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const hardHat = "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      
      
      return (
        <Layout location={this.props.location} title={siteTitle}>
            <img style={{
                display: 'flex',
                alignItems: 'center'
                }} alt="under construction" src={hardHat}/>
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