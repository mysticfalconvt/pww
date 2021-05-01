import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu"
import {useState} from "react"
import TitleAndIcon from "./TitleAndIcon.js"
import NavSearch from "./Search"


const HeaderStyles = styled.header`

nav{
  border-bottom: 3px solid #1B3A61;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.right{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 90px;
  align-items: center;
}

h2{
  font-family: "Roboto Slab";
  font-size: 1rem;
  letter-spacing: 1px;
}
h3{
  font-family: "Roboto Slab";
  font-size: .8rem;
  font-weight: 200;
  opacity: .75;
  font-style: italic;
}
a{
color: inherit;
padding: 10px;
text-decoration: none;
font-family: "Open Sans";

:hover{
  text-decoration: underline;
}
}

`;

export default function Header({ siteTitle }) {
  const [openNav , setOpenNav] = useState(false)
  return (
  <HeaderStyles>
    <nav className="leftFlex">
      <div className="left">
        <BurgerMenu open={openNav} click={setOpenNav} />
        <TitleAndIcon />
      </div>
      <div className="right">
        <a href="/">About Us</a>
        <a href="/">Events</a>
        <a href="/">Boards & Committees</a>
        <NavSearch></NavSearch>
      </div>
    </nav>

    



  </HeaderStyles>
)
  };
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


