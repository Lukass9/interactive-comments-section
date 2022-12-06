import styled from "styled-components"

export const WrapButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    border-radius: 10px;
    font-weight: bolder;
    border: none;
    font-size: 16px;
    cursor: pointer;
`

export const ButtonText = styled.div` 
    color: ${(props: {isDelete: boolean})=>props.isDelete? "#ED6368" : "#5457b6"};
    padding: 5px;
    font-weight: 700;
`