import styled from "styled-components"

export const WrapButton = styled.button`
    grid-area: 3/5/4/6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    border-radius: 10px;
    font-weight: bolder;
    border: none;
    font-size: 16px;
    cursor: pointer;

    :hover{
        opacity: .5;
    }

    @media (min-width: 1440px){
        grid-area: 1/5/2/6;
    }
`

export const ButtonText = styled.div` 
    color: ${(props: {isDelete: boolean})=>props.isDelete? "#ED6368" : "#5457b6"};
    padding: 5px;
    font-weight: 700;
`