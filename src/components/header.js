import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header style={{
    background: 'var(--test-7)',
    marginBottom: "1.45rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
  }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'var(--test-8)',
            textDecoration: 'none',
            fontFamily: "var(--test-font-2)",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
