import { createGlobalStyle } from 'styled-components'
import { 
    setColor, 
    setFont, 
    setRadius, 
    setBreakpoint, 
    setTransition } from '../styles/'

const Globals = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background:  ${ setColor.delta_1 };
        color:       ${ setColor.sigma };
        font-family: ${ setFont.primaryFont };
        font-size: 1.6em;
        line-height: 2;
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: ${ setColor.sigma };
        text-decoration: none;
        ${ setTransition() };
    }

    a:hover {
        color: ${ setColor.alpha };
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${ setFont.primaryFont };
        font-weight: 500;
        line-height: 1.25;
    }

    h1 { font-size: 2em; }
    h2 { font-size: 1.8em; }
    h3 { font-size: 1.3em; }
    h4 { font-size: 1.1em; }
    h5 { font-size: 1em; }
    h6 { font-size: 0.875em; }

    .display-1 { font-size: 3em; }
    .display-2 { font-size: 2em; }
    .display-3 { font-size: 1.5em; }

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        h1 { font-size: 2.4em; }
        h2 { font-size: 2em; }
        h3 { font-size: 1.6em; }
        h4 { font-size: 1.3em; }
        h5 { font-size: 1em; }
        h6 { font-size: 0.875em; }

        .display-1 { font-size: 5em; }
        .display-2 { font-size: 2.8em; }
        .display-3 { font-size: 1.5em; }
    }

    p {
        line-height: 1.8;
        margin: 0 0 1.25rem 0;
    }

    .bcg {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

    .btn {
        background-color: ${ setColor.sigma };
        border: none;
        border-radius: ${ setRadius.beta };
        color: ${ setColor.delta_1 };
        cursor: pointer;
        font-size: 1.6rem;
        padding: 1.3rem 3rem;
        text-transform: capitalize;
        transition: all 0.5s linear;
    }

    button {
        border: none;
    }

    .center {
        text-align: center;
    }

    .container {
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    }

    .p-y {
        padding: 10rem 0;
    }

    .section-bg {
        background-color: ${ setColor.delta_2 };
        width: 100%;
    }

    .small {
        font-size: 1.2rem;
    }

    .vh-100 {
        min-height: 100vh;
    }
`

export default Globals