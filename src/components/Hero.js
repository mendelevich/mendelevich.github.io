import React from "react"

import Image from "./image"

const Hero = () => {
  return (
    <div className="hero section">
      <div className="section-container">
        <h1>Welcome to my personal site!</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </div>
  )
}

export default Hero
