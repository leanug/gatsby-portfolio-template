/**
 * Styled componentes helper functions
 */

export const setColor = {
    alpha  : "#FF0000", // Red
    delta_1: "#1F1F1F", // Dark 1
    delta_2: "#262626", // Dark 2
    delta_3: "#303030", // Dark 3
    sigma  : "#F7F7F7", // Light
}

export const setFont = {
    primaryFont  : '"Roboto"',
    secondaryFont: '"Roboto"'
}

export const setBreakpoint = {
    small  : '57.6rem',
    medium : '76.8rem',
    large  : '99.2rem',
    xLarge : '120rem',
    xxLarge: '140rem'
}

export const setGridGap = {
    alpha: '4rem',
    beta: '2rem',
    gamma: '1rem',
}

export const setRadius = {
    alpha:  '1rem',
    beta:   '0.5rem',
}

export const setContainer = {
    container: `
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    `
}

export const setContainerFluid = {
    container: `
        margin: 0 auto;
        width: 90vw;
    `
}

export const setTransition = ({
    property = 'all',
    time = '0.3s',
    timing = 'ease-in-out' 
} = {}) => {
    return `transition: ${property} ${time} ${timing}`
}