import React from "react"
import styled from 'styled-components'
import { setColor, setBreakpoint } from '../styles'

const Title = ({ title, text }) => {
    return (
        <Wrapper>
            <div>
                <div className="line"></div>
                <h2 className="display-2">{ title || 'default title' }</h2>
                { text && <p>{ text }</p> }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 2em;

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        justify-content: center;
        margin-bottom: 4em;
    }

    .line {
        background-color: ${ setColor.alpha };
        height: 0.2rem;
        margin-bottom: 1rem;
        width: 3rem;
    }
`

export default Title