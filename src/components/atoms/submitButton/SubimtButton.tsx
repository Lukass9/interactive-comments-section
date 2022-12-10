import { Children } from "react";
import styled from 'styled-components'
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";

export const Button = styled.button`
    background-color: hsl(238, 40%, 52%);
    color: hsl(0, 0%, 100%);
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid hsl(238, 40%, 52%);
    border-radius: 5px;
`

interface Props {
    children: string
    arr?: CommentsStruct | ReplyStruct,
    newContent?: string,
    handleAction?: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    AdditionalValue?: string,
}   

export const SubimtButton: React.FC<Props> = ({children,AdditionalValue, handleAction, arr, newContent}) => {
    return (
        <>
            {handleAction && arr && newContent
            ? 
                <Button onClick={()=>{
                    let replyingToIndex = AdditionalValue? newContent.indexOf(AdditionalValue): 0
                    if(replyingToIndex >= 0 && AdditionalValue) replyingToIndex = replyingToIndex + AdditionalValue.length
                    handleAction(arr, newContent.substring(replyingToIndex))
                }}> {children} </Button>
            :
                <Button> {children} </Button>
            }
        </>
)};