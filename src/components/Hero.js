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
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero section">
      <div className="split left">
        <h1>hi, i'm eve</h1>
        <h3>software engineer based in nyc</h3>
        <p>
          full-stack: web development with javascript, express, react, and
          postgres
        </p>
        <p>front-end: mobile & web development with react & react native</p>
        <h3>check out my work below</h3>
      </div>
      <div className="split right">
        <div className="hero-img">
          <Img fluid={data.hands.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default Hero
