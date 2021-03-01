import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import Links from './Links'
import styled from 'styled-components'
import { setBreakpoint, setGridGap } from '../styles/'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
        <NavCenter>
            <div className="logo-wrap">
                {/* <img src={logo} alt="logo" /> */}
                <Link to="/">
                    <span className="logo">OMEGA</span>
                </Link>
            </div>
            <div className="nav-links">
                <Links styleClass="navbar-links" />
            </div>
            <div>
                <SocialLinks styleClass="social-icons-header" />
                <button onClick={ toggleSidebar } className="toggle-btn">
                <FaBars />
            </button>
            </div>
        </NavCenter>    
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    background: transparent;
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
  min-height: 10rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  .logo-wrap {
    display: grid;
    justify-content: start;
    grid-auto-flow: column;
    align-items: baseline;
    grid-gap: ${ setGridGap.gridGap };
  }

  .logo-img {
    background-image: url('../assets/logo.svg');
  }

  .logo-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    line-height: normal;
  }

  img {
    margin-right: 1.5rem;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .nav-links {
    display: none;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    width: min-content;
  }

  @media screen and (min-width: ${ setBreakpoint.medium }) {
    & {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        column-gap: 1rem;
        align-items: center;
    }

    .toggle-btn {
        display: none;
    }

    .nav-links {
        justify-content: center;
        display: flex;
        text-transform: uppercase;
    }

    .social-icons-header {
        display: flex;
        justify-content: end;
    }

    .page-link {
        margin-right: 1rem;
    }

    .page-link {
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
    }

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