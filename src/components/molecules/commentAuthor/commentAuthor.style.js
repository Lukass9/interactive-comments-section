import styled from "styled-components"

export const WrapRow = styled.div`
    grid-area: 1/1/2/6;
    display: flex;
    align-items: center;

    @media (min-width: 1440px){
        grid-area: 1/2/2/5;
    }
`
export const UserName = styled.h1`
    font-size: 16px;
    margin: 0 5px;
`
export const CreatedAt = styled.p`
    color: #324152;
    margin: 0 5px;
`
export const UserStyle = styled.p`
    padding: 2px 10px;
    background-color: #5457b6;
    color: white;
    border-radius: 2px;
    font-size: 14px;
    margin: 0 5px;
`