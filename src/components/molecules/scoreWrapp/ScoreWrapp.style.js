import styled from "styled-components"

export const Wrapp = styled.div`
    grid-area: 3/1/4/2;
    align-self: center;
    display: flex;
    align-items: center;
    background-color: #f5f6fa;
    border-radius: 10px;
    max-width: 96.36px;
    max-height: 40px;

    @media (min-width: 1440px){
        grid-area: 1/1/3/2;
        flex-direction: column;
        max-width: 40px;
        max-height: 96.36px;
    } 
`

export const EditScore = styled.p`
    padding: 0 15px;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 0;
    color: #c3c4ef;
    cursor: pointer;
    &:hover{
        color: #5457b6;
    }
`
export const Score = styled.div`
    display: flex;
    justify-content: center;
    color: #5457b6;
    font-weight: 700;
    min-width: 18px;
`