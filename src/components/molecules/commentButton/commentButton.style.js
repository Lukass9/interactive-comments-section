import styled from "styled-components"

export const WrapRowButton = styled.div`
    grid-area: 3/4/4/6;
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80px;
    max-width: 160px ;

    @media (min-width: 1440px){
        grid-area: 1/4/2/6;
    }
`
