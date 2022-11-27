import React from "react";
import styled from "styled-components"

const WrapButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    font-weight: bolder;
    border: none;
    font-size: 16px;
    cursor: pointer;
`

const ButtonText = styled.div` 
    color: ${(props: {isDelete: boolean})=>props.isDelete? "#ED6368" : "#5457b6"};
    padding: 5px;
    font-weight: 700;
`
interface Button{
    text: string,
    img: string,
    isDelete?: boolean
}

const Button: React.FC<Button> = ({text,img, isDelete}) =>{
    return (
        <WrapButton>
            <img src={img} alt={text}/>
            <ButtonText isDelete={isDelete}>{text}</ButtonText>
        </WrapButton>
    )
}

export default Button