import React from "react"
import styled from 'styled-components'

const Title = ({ title, text }) => {
  return (
    <Wrapper>
      <h2 className="display-2">{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 3em;

  h2 {
    margin: 0 0 1.2rem 0;
  }

  & > p {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

export default Title