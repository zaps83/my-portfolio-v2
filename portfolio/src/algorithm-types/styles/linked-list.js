import styled from 'styled-components/macro'

export const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(.6);


    @media (max-width: ${props => props.page === 'singlePost' ? '1000px' : '900px'}) {
        transform: scale(.4);
    }

    @media (max-width: ${props => props.page === 'singlePost' ? '700px' : '900px'}) {
        transform: scale(.25);
    }
    
`

export const Circle = styled.div`
    background-color: ${props => props.theme.secondary};
    padding: 40px;
    border-radius: 50%;
`

export const Arrow = styled.div`
    width: 40px;
    margin: 0 4px 0 0;
    height: 15px;
    background-color: ${props => props.theme.secondary};
    position: relative;
    left: -3px;

    &:before {
        content: "";
        display: inline-block;
        background-color: ${props => props.theme.secondary};
        width: 25px;
        height: 10px;
        transform: rotate(-45deg);
        position: absolute;
        right: -8px;
        bottom: -3px;
    }

    &:after {
        content: "";
        display: inline-block;
        background-color: ${props => props.theme.secondary};
        width: 25px;
        height: 10px;
        transform: rotate(45deg);
        position: absolute;
        right: -8px;
        top: -3px; 
    }
`