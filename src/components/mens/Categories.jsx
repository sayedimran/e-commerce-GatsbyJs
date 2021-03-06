import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../../styles/mens/categories.module.css"

const Card = ({ fluid, src, title }) => (
  <section className={styles.card}>
    <Img fluid={fluid} className={styles.image} />
    <section className={styles.info}>
      <p className={styles.title}>{title}</p>
      <Link to={`${src}`}>
        <button className={styles.button}>View More</button>
      </Link>
    </section>
  </section>
)

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      shirts: file(relativePath: { eq: "images/mens/shirts/shirt1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hoodies: file(relativePath: { eq: "images/mens/hoodies/hoodies.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headwares: file(
        relativePath: { eq: "images/mens/headwares/headwares.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accessories: file(
        relativePath: { eq: "images/mens/accessories/accessories.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Men Categories</h1>
      <section className={styles.container}>
        <Card
          fluid={data.shirts.childImageSharp.fluid}
          src={`/products/mens/shirts-Tshirts`}
          title="Shirts and T-shirts"
        />
        <Card
          fluid={data.hoodies.childImageSharp.fluid}
          src={`/products/mens/hoodies-jackets`}
          title="Hoodies and Jackets"
        />
        <Card
          fluid={data.headwares.childImageSharp.fluid}
          src={"/products/mens/head-footwares"}
          title="Headwares and Footwares"
        />
        <Card
          fluid={data.accessories.childImageSharp.fluid}
          src={"/products/mens/accessories"}
          title="All Accessories"
        />
      </section>
    </section>
  )
}

export default Categories
