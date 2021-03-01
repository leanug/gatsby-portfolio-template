import React from 'react';
import Background from './Background'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
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
                <article className="fade-in">
                    <p>Creative Designs and Creative Works</p>
                    <h1>Minimalist and sustainable home and office decorations</h1>
                </article>
            </Background>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    article {
        width: 90vw;
        max-width: 80rem;
        text-align: center;
        
        p {
          font-size: 1.6rem;
        }

        h1 {
          line-height: 1.25;
          margin: 2rem 0 3rem 0;
          letter-spacing: 3px;
        }

        h4 {
          font-weight: 400;
        }

        @media (min-width: 800px) {
          h1 {
            letter-spacing: 5px;
          }
        }
    }
`

export default Hero;