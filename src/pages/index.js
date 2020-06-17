import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my personal site!</h1>
    <p>I'm building it with Gatsby.js.</p>
    <p>
      It's currently a work in progress, but my projects will appear here
      sometime in the future.
    </p>
    <h2 className="dots">...</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue velit
      tellus, tristique aliquet nisl tincidunt vel. Donec rhoncus tincidunt est,
      nec cursus augue venenatis in. Cras ornare, metus vel scelerisque
      placerat, dui sapien fermentum mauris, vitae lacinia nibh nisl sit amet
      tortor. Maecenas ultricies elit tortor, in lacinia quam rhoncus feugiat.
      Phasellus quam mauris, pulvinar a aliquam et, pretium sed lectus. Nunc
      vitae laoreet arcu, sit amet lacinia dolor. Pellentesque porttitor gravida
      velit. Nam imperdiet sodales urna, at eleifend lacus ullamcorper vitae.
    </p>
    <p>
      Ut ut arcu non ipsum condimentum suscipit. Etiam urna tortor, consectetur
      et suscipit et, venenatis in massa. Morbi eget tortor at velit dictum
      tempus. Vivamus fringilla consectetur nunc vitae blandit. Quisque lacus
      mauris, cursus quis dolor nec, molestie cursus purus. Nullam volutpat
      lacus quis urna scelerisque faucibus. Integer nec turpis tempus, egestas
      nisi ac, iaculis eros. Vestibulum consequat nunc sed eros consectetur, ac
      pretium leo iaculis. Aenean sagittis eros eleifend enim consectetur
      molestie eget id felis. In et sem quis tellus malesuada interdum. Nullam
      elementum urna purus, non tincidunt lorem molestie vitae. Fusce maximus
      tortor a ipsum tempus, quis vestibulum enim iaculis.
    </p>

    <p>
      Aliquam fermentum urna a congue dignissim. Nam dolor turpis, interdum nec
      risus ut, congue porttitor ligula. Etiam sit amet ultricies erat. Morbi
      rutrum lacus quis neque congue, quis commodo nibh tempus. Etiam aliquet
      tortor non mauris vestibulum fringilla. Nam id felis ut urna tempus
      feugiat quis vitae velit. Aliquam semper sodales blandit. Cras porttitor
      nibh laoreet placerat luctus. Vivamus non felis ut nisi posuere
      sollicitudin. Curabitur volutpat sapien feugiat purus tristique, non
      iaculis orci dapibus. Vestibulum ut nisi faucibus, sollicitudin neque nec,
      vehicula libero. Maecenas ac egestas lacus. Nulla rhoncus vitae mauris
      quis consectetur. Nam ullamcorper eros id felis finibus eleifend. Cras
      mattis, felis eget mollis ornare, justo metus tempor sapien, a faucibus
      lectus quam id velit.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
