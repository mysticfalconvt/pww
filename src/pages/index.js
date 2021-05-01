import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BannerImage from "../components/BannerImage"
import Cards from "../components/Cards"

export default function IndexPage({data}){
const cardData = data.links.nodes;
 return(
  <Layout>
    <Seo title="Home" />
   <BannerImage />
   <Cards cards={cardData}/>
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
 }
`;
