import React from "react";
import styled from "styled-components"
import { ButtonText, WrapButton } from "./Button.style";

interface Button{
    text: string,
    img: string,
    id: number,
    isDelete?: boolean
    handleReplying: (id: number) => void, 
}

const Button: React.FC<Button> = ({text,img, isDelete, handleReplying, id}) =>{
    return (
        <WrapButton onClick = {()=>handleReplying(id)}>
            <img src={img} alt={text}/>
            <ButtonText isDelete={isDelete}>{text}</ButtonText>
        </WrapButton>
    )
}

export default Button