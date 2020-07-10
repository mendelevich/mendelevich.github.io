import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

// import "../styles/styles.scss"

const projects = []

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects projects={projects} title="featured projects" showLink />
  </Layout>
)

export default IndexPage
