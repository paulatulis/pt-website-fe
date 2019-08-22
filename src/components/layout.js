import React from "react"
import { Link } from "gatsby"
import About from '../pages/about'


import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {

  render() {
    
    const ListLink = props => (
      
      <li style={{ display: `inline-block`, marginRight: `1rem`, color: '#5BBBE8' }}>
        <Link to={props.to}>{props.children}</Link>
      </li>
    )
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const background = "https://live.staticflickr.com/65535/48602352402_4bcaf8978a_o.jpg"
    // <a data-flickr-embed="true"  href="https://www.flickr.com/photos/183733073@N06/48602352402/in/dateposted-public/" title="atmosphere"><img src="https://live.staticflickr.com/65535/48602352402_4bcaf8978a_o.jpg" width="5990" height="1242" alt="atmosphere"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    let header
    let navbar


    if (location.pathname === rootPath) {
      
      header = (
        <h1
          style={{
            ...scale(1.3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>

        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="" 
      ><img style={{
        
          // maxWidth: rhythm(80),
          maxHeight: rhythm(80),
          padding: `${rhythm(0.5)} ${rhythm(0.5)}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        
      }} alt="clouds" src={background}/>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div >
        <ListLink style={{ color: '#5BBBE8'}} to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </div>

        <header>{header}</header>

        <main>{children}</main>
      </div>
      </div>
    )
  }
}

export default Layout
