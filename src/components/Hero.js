import React from 'react';
import Background from './Background'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { BsChevronDown } from 'react-icons/bs'
import { setColor, setBreakpoint } from '../styles';

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <Background
                image={ fluid }
            >
                <div className="fade-in container">
                    <h1 className="display-1">
                        <span>Hello, I'm Erica,</span><br />
                        A blockchain software developer and interdisciplinary problem solver
                    </h1>
                    <BsChevronDown className="icon" />
                </div>
            </Background>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .container {
        .display-1 {
            font-size: 3rem;
            font-weight: 500;
            line-height: 1.3;
        }
        
        span {
            color: ${ setColor.alpha };
        }

        p {
            font-size: 2rem;
        }

        .h1 {
            font-weight: 700;
            font-size: 4rem;
            line-height: 1.25;
            letter-spacing: 3px;
            margin: 2rem 0 3rem 0;
        }

        h4 {
          font-weight: 400;
        }

        @media screen and ( min-width: ${ setBreakpoint.small } ) {
            .display-1 {
                font-size: 7rem;
                font-weight: 500;
                line-height: 1.3;
                letter-spacing: 3px;
            }
        }
    }

    .icon {
        position: absolute;
        bottom: 5rem;
        left: 0;
        right: 0;
        margin: auto;
        display: block;
        font-size: 2rem;
        -webkit-animation: action 1s infinite  alternate;
        animation: action 1s infinite  alternate;
        
        @-webkit-keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
        @keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
    }
`

export default Hero;