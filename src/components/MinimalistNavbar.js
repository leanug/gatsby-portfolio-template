import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { 
  setBreakpoint, 
  setGridGap, 
  setColor,
  setTransition } from '../styles'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
        <NavCenter>
            <div className="logo-wrap">
                {/* <img src={logo} alt="logo" /> */}
                <button onClick={ toggleSidebar } className="toggle-btn">
                    <FaBars />
                </button>
                <Link to="/">
                    <span className="logo">Erica Legrand</span>
                </Link>
            </div>
            <div className="icons">
                <SocialLinks styleClass="social-icons-header" />
            </div>
        </NavCenter>    
    </Nav>
  )
}

const Nav = styled.nav`
    background-color: ${ setColor.delta_1 };
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`

const NavCenter = styled.div`
    align-items: center;
    width: 90vw;
    max-width: 1440px;
    min-height: 7rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    .logo-wrap {
        display: grid;
        justify-content: start;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: ${ setGridGap.beta };
    }

    .logo {
        font-weight: 500;
    }

    .icons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .toggle-btn {
        background: transparent;
        border-color: transparent;
        color: ${ setColor.sigma };
        cursor: pointer;
        font-size: 2rem;
        height: 2.5rem;
        ${ setTransition() };
    }

    .toggle-btn:hover {
        opacity: 0.6;
    }

    @media screen and (min-width: ${ setBreakpoint.medium }) {
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
        column-gap: 1rem;
        align-items: center;

     

      .nav-icons {
          display: flex;
          justify-content: space-between;
      }

      .nav-icons .social-icon {
          font-size: 1.5rem;
          margin-left: 0.5rem;
      }
    }
`

export default Navbar
