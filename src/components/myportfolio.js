import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const MyPortfolio = () => {
  const data = useStaticQuery(graphql`
    query myPortfolioQuery {
      avatar: file(absolutePath: { regex: "/icecream.JPG/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  
  return (
    <div>
      <p>
        <br></br>
      A better version of this page is coming soon! For now, you can check out one of my projects, Tribe, by clicking <a href="https://new-hire-app-frontend.firebaseapp.com">here</a>.
      </p>
    </div>
  )
}

export default MyPortfolio