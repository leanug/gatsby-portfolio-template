import React from 'react';
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { setGridGap } from '../styles';

const query = graphql`
    {
        erica:file(relativePath: {eq: "person-1.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const About = () => {
    const {
        erica: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <div><Image fluid={ fluid } alt="Erica Legrand" /></div>
            <div className="text">
                <h2>Hello from about</h2>
                <p>
                    Mustache kogi next level, lo-fi lyft keffiyeh live-edge fixie.
                </p>
                <p>
                    Sriracha selvage shaman copper mug air plant seitan fixie fingerstache lyft live-edge typewriter paleo tote bag enamel pin. 
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptatem enim optio odio soluta. Aspernatur.</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${ setGridGap.gridGapGamma };
`

export default About;