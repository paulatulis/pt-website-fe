import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const ContactMe = () => {
  const data = useStaticQuery(graphql`
    query contactMeQuery {
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
      I'd love to chat! You can <a href="mailto:paula@gmail.com" target="_top"> email me</a>, <a href="https://twitter.com/paulatulis" target="_blank"> tweet</a> at me, connect with me on <a href="https://www.linkedin.com/in/paulatulis/" target="_blank">LinkedIn</a>, send a carrier pigeon, etc.
      </p>
    </div>
  )
}

export default ContactMe