import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components'


const SearchIcon = styled(FaSearch)`
width: 1rem;
height: 1rem;
color: white;
margin-left: 10px;
`;

const BannerImageStyles = styled.div`

z-index: 0;
.fullWidthImage{
    z-index: -20;
    width: 100%;
}

.container{
    max-width: 680px;
    height: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;

    h2{
        font-family: 'Roboto Slab';
        font-weight: 400;
        margin-top: -300px;
        position: absolute;
        text-align: center;
        width: 680px;
        color: white;
    }
    .search{
        transform: translateY(-150px);

        button{
            background-color: #0074c1;
            color: white;
            font-family: "Open Sans";
            padding: .7rem 1rem;
            border: none;
            :hover{
                background-color: #225089;
            }
            
        }
        input{
            height: 50px;
            width: 400px;
            margin-right: 10px;
            margin-left: 50px;
        }
    }
}
`;

export default function BannerImage() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <BannerImageStyles>
           <div className="fullWidthImage">
                <StaticImage
                    src="../images/roof.jpg"
                    width={1920}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="roof photo"
                    />
            </div>
            <div className="container">
                <h2>
                Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services  
                </h2>
                <div className="search">
                    <input 
                        type="text"
                        id="searchTerms"
                        placeholder="Enter search term"
                        value={searchTerm}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        />

                    <button type="button" onClick={()=> console.log(searchTerm)}>
                            SEARCH <SearchIcon />
                    </button>
                </div>
            </div>
        </BannerImageStyles>
    )
}
