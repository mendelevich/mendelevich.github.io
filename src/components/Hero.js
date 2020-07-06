import React from "react"

import Image from "./image"

const Hero = () => {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'var(--test-9)',
      paddingTop: '5rem'
    }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <h1>Welcome to my personal site!</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </div>
  )
}

export default Hero