import styled from 'styled-components/macro'

export const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 40px;
    font-size: 100px;
    position: relative;
    top: 2px;
    transform: scale(.6);
    font-weight: 800;

    @media (max-width: ${props => props.page === 'singlePost' ? '600px' : '900px'}) {
        transform: scale(.25);
    }
`