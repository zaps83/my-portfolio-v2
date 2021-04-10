import styled from 'styled-components/macro'

export const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 40px;
    transform: scale(.6);
    margin-top: 2em;

    @media (max-width: 900px) {
        transform: scale(.25);
        margin-top: 4em;
    }
`

export const CircleOne = styled.div`
    background-color: ${props => props.theme.secondary};
    padding: 40px;
    border-radius: 50%;
    position: relative;
    top: 85px;
    left: 35px;
`

export const CircleTwo = styled.div`background-color: ${props => props.theme.secondary};
    padding: 40px;
    border-radius: 50%;
`

export const CircleThree = styled.div`
background-color: ${props => props.theme.secondary};
    padding: 40px;
    border-radius: 50%;
    position: relative;
    top: 85px;
    right: 35px;
`

export const ArrowOne = styled.div`
    width: 40px;
    margin: 0 0 0 0;
    height: 15px;
    background-color: ${props => props.theme.secondary};
    position: relative;
    transform: rotate(135deg);
    left: 20px;
    top: 40px;

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

export const ArrowTwo = styled.div`
    width: 40px;
    margin: 0 4px 0 0;
    height: 15px;
    background-color: ${props => props.theme.secondary};
    position: relative;
    transform: rotate(45deg);
    right: 20px;
    top: 40px;

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