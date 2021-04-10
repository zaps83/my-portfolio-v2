import styled from 'styled-components/macro'


export const Open = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 40px;
    font-size: 100px;
    position: relative;
    top: 2px;
    font-weight: 800;
    transform: scale(.8);
    margin-bottom: .2em;
    letter-spacing: .3em;

    @media (max-width: ${props => props.page === 'singlePost' ? '600px' : '900px'}) {
        transform: scale(.35);
        letter-spacing: 0;
    }
`

export const Close = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 40px;
    font-size: 100px;
    position: relative;
    top: 2px;
    font-weight: 800;
    transform: scale(.8);
    margin-bottom: .2em;
    
    @media (max-width: ${props => props.page === 'singlePost' ? '600px' : '900px'}) {
        transform: scale(.35);
    }
`