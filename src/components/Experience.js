import React, { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import jobs from '../constants/experience'
import styled from 'styled-components'
import { 
    setColor, 
    setRadius, 
    setContainer, 
    setTransition,
    setBreakpoint } from '../styles/'

function Jobs() {
  const [ value, setValue ] = useState(0)
  const { company, position, date, duties } = jobs[ value ]
  
  return (
    <Wrapper>
        <div className="jobs-center">

          {/* Btn container */}
          <div>
            <div className="btn-container">
              { jobs.map( ( item, index ) => {
                return (
                  <button 
                    key={ index } 
                    className={ `job-btn ${ index === value && 'active-btn' }` }
                    onClick={ () => setValue( index ) }
                  >
                    { item.company }
                  </button>)
              })}
            </div>
          </div>
         
          {/* Job info */}
          <article className="job-info">
            <h3>{ position }</h3>
            <p className="job-date">{ date }</p>
            { duties.map( item => {
                return (
                  <div key={ item.id } className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{ item.name }</p>
                  </div>
                )
              })}
            </article>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .container {
        ${ setContainer.container };
    }

    .btn-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 4rem;
    }

    .job-btn {
        background: transparent ;
        border-color: transparent;
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.sigma };
        cursor: pointer;
        font-weight: 700;
        line-height: 1;
        margin: 1rem;
        padding: 1.2rem;
        text-transform: capitalize;
        ${ setTransition() }
    }

    .job-btn:hover {
        background-color: ${ setColor.delta_2 };
    }

    .active-btn {
        background-color: ${ setColor.delta_2 };
        color: ${ setColor.sigma };
    }

.job-info h3 {
    margin-bottom: 1rem;
}

.job-date {
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
    background-color: ${ setColor.delta_2 };
    padding: 1.5rem;
    border-radius: ${ setRadius.radiusBeta };
}

.job-desc p {
    margin-bottom: 0;
}

@media screen and ( min-width: ${ setBreakpoint.small } ) {
    .jobs-center {
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
    }

    .btn-container {
        flex-direction: column;
        justify-content: flex-start;
    }

    .job-btn {
        margin: 0 2rem 2rem 2rem;
    }
}
`

export default Jobs
