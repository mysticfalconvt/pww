import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const SearchIcon = styled(FaSearch)`
width: 40px;
height: 40px;
color: #3068ad;
border: 1px solid #3068ad;
padding: 5px;
margin-right: 10px;
z-index: 1000;
`;

export default function NavSearch() {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <>
            <SearchIcon onClick={() => setShowSearch(!showSearch)}></SearchIcon>
            {showSearch && <SearchBox />}
        </>
    )
}


const SearchBoxStyles = styled.div`
position: absolute;
width: 410px;
height: 80px;
top: 60px;
right: 10px;
background-color: #3068ad;
display: flex;
justify-content: space-evenly;
align-items: center;
button{
    background-color: #3068ad;
    color: white;
    font-family: "Open Sans";
    padding: .5rem 1rem;
    border: 3px solid white;
    :hover{
        background-color: #225089;
    }
    :active {
        background: #142B47;
    }
}
input{
    height: 50px;
    width: 250px;
}

`;

function SearchBox() {
    const [searchTerm, setsearchTerm] = useState("")

    return (
        <SearchBoxStyles>

            <input
                type="text"
                id="searchTerms"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />

            <button type="button" onClick={() => console.log(searchTerm)}>
                SEARCH
                </button>

        </SearchBoxStyles>

    )

}