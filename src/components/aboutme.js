import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query aboutMeQuery {
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
    <div className="site-content">
      <p>
      I'm Paula, a human person and full stack web developer. I fell in love with code in all of its wonderful, complex glory in early 2019 and decided to go all in by enrolling in Flatiron School’s software immersive. Previously, I worked in public communications and account management. 
      <br></br>
      <br></br>
      I’m still at the beginning of my journey in the world of web development, so you’ll usually find me learning as much as I can about anything and everything code-related. When I’m not doing that, I’m probably wandering around a farmers market or eating ice cream, or both. 
      </p>
    </div>
  )
}

export default AboutMe