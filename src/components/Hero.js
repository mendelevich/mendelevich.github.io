import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "hero-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cafe: file(relativePath: { eq: "cafe.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero section">
      <div className="section-container">
        <h1>Welcome to my personal site!</h1>
        <Img fluid={data.flower.childImageSharp.fluid} />
        <Img fluid={data.cafe.childImageSharp.fluid} />
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      </div>
    </div>
  )
}

export default Hero
