import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BannerImage from "../components/BannerImage"
import Cards from "../components/Cards"
import PopularServices from "../components/PopularServices"

export default function IndexPage({data}){
const cardData = data.links.nodes;
const links = data.units.nodes
 return(
  <Layout>
    <Seo title="Home" />
   <BannerImage />
   <Cards cards={cardData}/>
   <PopularServices links={links}/>
  </Layout>
)
 }

 export const query = graphql`
 query linksQuery {
   links: allSanityLinks(limit: 4) {
     nodes {
       name
       url
       description
       image {
         asset{
          url
         }
       }
     }
   }
   units: allSanityUnit(sort: { fields: [UnitNumber], order: ASC }) {
      nodes {
        name
        slug {
          current
        }
        UnitNumber
        
      }
    }
 }
`;

