import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { CommentAreaMod } from "../comment/comment.style";
import { Content, ReplyingTo, Wrapp } from "./reply.style";

interface Props{
    reply: ReplyStruct,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct) => void, 
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    key: React.Key,
  }

const Reply: React.FC<Props> = ({ reply ,handleChangContent, handleSetUpdateMode, handleOpenModal, handleChangeScore, handleReplying, key }) => {
    const {id, user, replyingTo, content, createdAt, score, isCurrentlyUser, isUpdate} = reply
    const [commentConent, setCommentContent] = useState(content)
    const handleChangeContent = (e: BaseSyntheticEvent) =>{
        setCommentContent(e.target.value)
    }

    return (
        <Wrapp key={key}>
            <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user}/>
            {isUpdate
                ? 
                    <CommentAreaMod onChange={handleChangeContent} value={commentConent}/> 
                :
                <Content>
                    <ReplyingTo> @{replyingTo} </ReplyingTo>
                    {content}
                </Content>
            }
            <CommentButton
                arr={reply}
                id={id} 
                score={score} 
                isCurrentlyUser={isCurrentlyUser} 
                isUpdate={isUpdate}
                commentConent={commentConent}
                handleOpenModal={handleOpenModal}
                handleChangeScore={handleChangeScore} 
                handleReplying={handleReplying}
                handleSetUpdateMode={handleSetUpdateMode}
                handleChangContent={handleChangContent}
            />
        </Wrapp>

    )
}

export default Reply