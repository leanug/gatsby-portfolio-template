import React from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { setColor, setBreakpoint, setRadius } from '../../styles/'

const Service = () => (
    <Wrapper>
        <FaBars className="as-icon" />
        <h5>John Doe</h5> 
        <p>Cloud bread live-edge direct trade deep v yr gentrify. Bitters williamsburg air plant</p> 
        <p>Cloud bread live-edge direct trade deep v yr gentrify. Bitters williamsburg air plant</p>  
    </Wrapper>
)

const Wrapper = styled.div`
    h5 {
        margin: 1.5rem 0;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .as-icon {
        font-size: 3rem;
    }
`

export default Service;