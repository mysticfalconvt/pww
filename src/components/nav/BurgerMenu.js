import React from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const MenuIcon = styled(GiHamburgerMenu)`
color: white;
transform: scale(2);
`;
const CloseIcon = styled(AiOutlineClose)`
color: white;
transform: scale(2);
`;

const BurgerStyles = styled.button`
background-color: #3068AD;
width: 60px;
height: 100%;
padding-top:10px;
border: none;
p{
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    text-align: center;
    display: inline;
    margin: 0px;
}

:hover  {
    background: #225089;
}

`;

export default function BurgerMenu({open, click}) {
    return (
        <BurgerStyles onClick={()=>click(!open)}>

                {!open && 
                <>
                    <MenuIcon></MenuIcon>
                    <p>MENU</p>
                </>}
                {open && 
                <>
                    <CloseIcon></CloseIcon>
                    <p>CLOSE</p>
                </>}
                
        </BurgerStyles>
    )
}
