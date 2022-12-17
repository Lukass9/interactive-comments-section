import { BaseSyntheticEvent, useEffect, useRef } from "react";
import styled from "styled-components"
import { CommentArea } from "../../organisms/addCommentSection/AddCommentSection";


const CommentAreaModStyled = styled(CommentArea)` 
    grid-area: 2/1/2/6;
    order: -1;
    margin-top: 5px;
    @media (min-width: 1440px){
        grid-area: 2/2/4/6;
        width: ${(props:{isEdite:boolean})=>props.isEdite? '100%' : '75%'};
        order: 0;
    }
`
interface Props {
    isEdite?: boolean,
    handleEditContent: (e: BaseSyntheticEvent)=>void,
    commentConent: string
}

export const CommentAreaMod: React.FC<Props> = ({isEdite, handleEditContent, commentConent}) => {
    const replyTextAreaRef = useRef<HTMLTextAreaElement>()
    useEffect(()=>{
        const end = commentConent.length
        replyTextAreaRef.current?.setSelectionRange(end,end)
        replyTextAreaRef.current?.focus()
    },[])

    return (
        <CommentAreaModStyled isEdite={isEdite} ref={replyTextAreaRef} onChange={handleEditContent} value={commentConent} />
)}