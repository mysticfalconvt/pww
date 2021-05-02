import React from 'react'
import styled from 'styled-components'

const PopularLinksStyles = styled.div`
width: 1100px;
margin: auto;
font-family: "Open Sans";

h2 {
    font-size: 2rem;
    margin-top: .5rem;
    :after{
        content:"";
        display: block;
        white-space: pre;
        height: 10px;
        background-color: #1B3A61;
        margin-top: 10px;
  }
}

.linkContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
`;

export default function PopularServices({links}) {
  
    return (
        <PopularLinksStyles>
            <h2>Popular Services And Links</h2>
            <div className="linkContainer">
                {links.map((unit)=>{
                    return(
                        <a key={unit.id} href={`http://boskind.tech/unit/${unit.slug.current}`}>{unit.UnitNumber} - {unit.name}</a>
                        )
                    })}
            </div>
        </PopularLinksStyles>
    )
}

