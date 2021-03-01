import React from 'react';
import links from '../constants/links'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, 1fr);

    &.navbar-links {
        grid-auto-flow: column;
        justify-content: right;
    }

    &.sidebar-links {
        grid-auto-flow: row;
        justify-content: left;
    }

    a {
        font-size: 1.3rem;
        letter-spacing: 1px;
        transition: all 0.2s ease-out;
    }

    a:hover {
        opacity: 0.6;
    }

    .active {
        font-weight: 700;
    }
`

const Links = ({ styleClass }) => {
    return (
        <Wrapper className={`${styleClass ? styleClass : ""}`}>
            {links.map( link => {
                const { url, title, id } = link
                return(
                    <Link activeClassName="active" key={ id } to={ url }>{ title }</Link>
                )
            })}
        </Wrapper>
    );
};

export default Links;