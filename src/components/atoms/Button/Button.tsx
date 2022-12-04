import React from "react";
import styled from "styled-components"
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { ButtonText, WrapButton } from "./Button.style";

interface Button{
    text: string,
    img: string,
    arr: CommentsStruct | ReplyStruct,
    isDelete?: boolean
    handleAction: (arr: CommentsStruct | ReplyStruct) => void, 
}

const Button: React.FC<Button> = ({text,img, isDelete, handleAction, arr}) =>{
    return (
        <WrapButton onClick = {()=>handleAction(arr)}>
            <img src={img} alt={text}/>
            <ButtonText isDelete={isDelete}>{text}</ButtonText>
        </WrapButton>
    )
}

export default Button