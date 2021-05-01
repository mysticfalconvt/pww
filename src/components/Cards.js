import { graphql } from 'gatsby';
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background: #E1E5EA;
    margin-top: -10px;
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    padding-bottom: 35px;
    justify-items: center;
    justify-content: center;
    --cardSize: 240px;
    --imageSize: 160px;
    .card {
        background: white;
        margin-top: 40px;
        padding: 20px;
        width: var(--cardSize);
        height: var(--cardSize);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .image {
            width: var(--imageSize);
            height: var(--imageSize);
            justify-items: center;
        }
        border: 2px solid white;

        :hover{
            border: 2px solid #225089;
        }

        h3{
            font-family: "Open Sans";
            text-transform: uppercase;
            font-size: 1rem;
            text-align: center;
        }
    }
`;

export default function Cards({cards}) {
    return (
        <CardContainer>
            {cards.map((card)=><Card singleCard={card} />)}
        </CardContainer>
    )
}


function Card({singleCard}){
console.log(singleCard)
return(
    <div className="card">
        <div className="image">
            <img src={singleCard.image.asset.url} />
        </div>
        <h3>{singleCard.name}</h3>
    </div>
)
}




 