import React from "react";
import styled from "styled-components"
import { ButtonText, WrapButton } from "./Button.style";

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