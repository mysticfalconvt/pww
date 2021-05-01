import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu"
import {useState} from "react"
import TitleAndIcon from "./TitleAndIcon.js"
import NavSearch from "./Search"


const HeaderStyles = styled.header`
position: relative;

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

.bigNav{
  position: absolute;
  width: 100%;
  height: 500px;
  top: 100px;
  border-bottom: 5px solid #1B3A61;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .firstColumn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f3f6f9;
    color: black;
    font-weight: 800;
    a{
      width: 250px;
      text-align: center;
      border-bottom: 1.5px solid #1B3A6130;
      :last-child{
        border-bottom: none;
      }
    }
  }

  .links{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 2rem;
    background: white;
    a{
      color: black;
      width: 250px;
      margin: 0;
      padding: 0;
    }

    h4{
      color: #1B3A61;
      text-align: start;
      padding: 10px 0;
      margin: 0;
      font-weight: 800; 
      :after{
        content:"";
        display: block;
        white-space: pre;
        width: 60px;
        height: 3px;
        background-color: #8C6910;
        margin-top: 10px;
      }
    }
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

    {openNav && <BigNav />}
    



  </HeaderStyles>
)
  };

function BigNav(){
  return(
    <div className="bigNav">
      <div className="firstColumn">
        <a>Home</a>
        <a>News & Events</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Boards & Committees</a>
      </div>
      <div className="links">
        <h4>Data & Research</h4>
        <a>Economy</a>
        <a>State Finances</a>
        <a>Education</a>
        <a>Healthcare</a>
        <a>Local Government</a>
        <a>Population and Demographics</a>
        <a>State Register Calculations</a>
        <a>Presentations</a>
        <h4>Legislative Fiscal Impacts</h4>
        <a>Current General Assembly Session</a>
        <a>Previous General Assembly Session</a>
        <a>Forms</a>
      </div>
      <div className="links">
        <h4>Geography & Mapping</h4>
        <a>Economy</a>
        <a>State Finances</a>
        <a>Education</a>
        <a>Healthcare</a>
        <a>Local Government</a>
        <a>Population and Demographics</a>
        <a>State Register Calculations</a>
        <a>Presentations</a>
      </div>
      <div className="links">
        <h4>Programs & Services</h4>
        <a>Economy</a>
        <a>State Finances</a>
        <a>Education</a>
        <a>Healthcare</a>
        <a>Local Government</a>
        <a>Population and Demographics</a>
        <a>State Register Calculations</a>
        <a>Presentations</a>
      </div>
    </div>
  )
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


