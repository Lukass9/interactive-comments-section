import { BaseSyntheticEvent, useEffect, useRef } from "react";
import styled from "styled-components"
import { CommentArea } from "../../organisms/addCommentSection/AddCommentSection";

const CommentAreaModStyled = styled(CommentArea)` 
    order: 0;
    margin-top: 5px;
`
interface Props {
    handleEditContent: (e: BaseSyntheticEvent)=>void,
    commentConent: string
}

export const CommentAreaMod: React.FC<Props> = ({handleEditContent, commentConent}) => {
    const replyTextAreaRef = useRef<HTMLTextAreaElement>()
    useEffect(()=>{
        replyTextAreaRef.current?.focus()
    },[])

    return <CommentAreaModStyled ref={replyTextAreaRef} onChange={handleEditContent} value={commentConent} />};