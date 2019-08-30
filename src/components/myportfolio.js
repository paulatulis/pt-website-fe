import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm, scale, Typography } from "../utils/typography"

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
  

  let tribe = "https://live.staticflickr.com/65535/48643622147_4788c9fa0d_o.png"
  let foodbaby= "https://live.staticflickr.com/65535/48643612117_d19a05bc4f_o.png" 
  
  return (
    <div>
      <h3 style={{
        marginBottom: 0,
        marginRight: 2,
        }}>
          <a href="https://new-hire-app-frontend.firebaseapp.com" style={{color: '#5BBBE8'}}>Tribe</a> 
      </h3> 
      <p style={{
                ...scale(-1 / 5),
                display: `inline-block`,
                fontWeight: '700',
      }}>
        An app for new hires who want to get to know their new colleagues over lunch. 
      </p>
      <div style={{marginBottom: 0,}}>
        <img alt="my project" src={tribe}/>
      </div>
        <ul style={{marginLeft: rhythm(.5)}}>
          <li style={{marginBottom: 0,}}>Back End: Ruby on Rails </li>
          <li style={{marginBottom: 0,}}>Front End: JavaScript, React, Redux</li>
          <li style={{marginBottom: 0,}}>Authentication/authorization using JWT and bcrypt </li> 
          <li style={{marginBottom: 0,}}>Features to-do list where one can create items and check them off as complete</li>
          <li style={{marginBottom: 0,}}>Features lunch matcher that suggests a colleague and a restaurant nearby (suggestions pulled from Yelp API) </li> 
          <li style={{marginBottom: 0,}}>Feel free to sign up or log in with the following credentials: </li>
          username = TestUser123 <br></br>
          password = 1234
        </ul> 

      <h3 style={{
        marginBottom: 0,
        marginRight: 2,
      }}>
        <a href="https://github.com/paulatulis/food-baby-app-frontend" style={{color: '#5BBBE8'}}>Food Baby</a> 
      </h3> 
    <p style={{
                ...scale(-1 / 5),
                display: `inline-block`,
                fontWeight: '700',
                // marginBottom: rhythm(1),
                // marginLeft: rhythm(.5)
      }}>    Food Baby is a virtual, interactive recipe box 
        </p>

      <img style={{
                marginBottom: 0,
              }} alt="food baby homepage" src={foodbaby}/>
        <br></br>
        <ul style={{marginLeft: rhythm(.5)}}>
        <li style={{marginBottom: 0,}}>Back End: Ruby on Rails </li>
        <li style={{marginBottom: 0,}}>Front End: Vanilla JavaScript</li>
        <li style={{marginBottom: 0,}}>Click through the recipe carousel to view different options</li>
        <li style={{marginBottom: 0,}}>Once you've tried the dish, leave a review and a star rating</li> 
        </ul> 

      
    </div>
  
  )
}

export default MyPortfolio
