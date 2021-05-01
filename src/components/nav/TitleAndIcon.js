import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const TitleTextStyles = styled.div`
h2{
    margin: 0;
    padding: 0;
}
margin-top: 18px;
`;

export default function TitleAndIcon() {
    return (
        <>
            <div>
                <StaticImage
                    src="../../images/logo.png"
                    width={75}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="logo"
                    style={{margin: "10px"}}
                    />
            </div>
            <TitleTextStyles >

                <h2>SOUTH CAROLINA</h2>
                <h2>REVENUE AND FISCAL AFFAIRS OFFICE</h2>
                <h3>Transforming data into solutions for South Carolina</h3>
            </TitleTextStyles>
        </>
    )
};

