import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cafe: file(relativePath: { eq: "cafe.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hands: file(relativePath: { eq: "hands.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero section">
      <div className="section-container">
        <div className="side left">
          <h1>hi, I'm eve</h1>
          <h3>i'm a software engineer based in nyc</h3>
          <p>
            experienced with full-stack and front-end development with
            javascript
          </p>
        </div>
        <div className="side right">
          {/* <div className="images">
            <div className="top-right">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.cafe.childImageSharp.fluid} />
            </div>
          </div> */}
          <div className="hero-img">
            <Img fluid={data.hands.childImageSharp.fluid} />
          </div>
        </div>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      </div>
    </div>
  )
}

export default Hero
