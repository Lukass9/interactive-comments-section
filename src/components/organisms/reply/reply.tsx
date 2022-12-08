import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { CommentAreaMod } from "../comment/comment.style";
import { ReplyTextArea } from "../replyTextArea/ReplyTextArea";
import { Content, ReplyingTo, Wrapp } from "./reply.style";

interface Props {
    reply: ReplyStruct,
    newReplying: string,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    handleChangeReplying:(e: BaseSyntheticEvent) => void,
    key: React.Key,
}

const Reply: React.FC<Props> = ({ reply, handleChangeReplying, newReplying, handleToggleReplying, handleChangContent, handleSetUpdateMode, handleOpenModal, handleChangeScore, handleReplying, key }) => {
    const { user, replyingTo, content, createdAt, score, isCurrentlyUser, isUpdate, isReplying} = reply
    const [commentConent, setCommentContent] = useState(content)
    const handleChangeContent = (e: BaseSyntheticEvent) => {
        setCommentContent(e.target.value)
    }
    return (
        <>
            <Wrapp key={key}>
                <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user} />
                {isUpdate
                    ?
                    <CommentAreaMod onChange={handleChangeContent} value={commentConent} />
                    :
                    <Content>
                        <ReplyingTo> @{replyingTo} </ReplyingTo>
                        {content}
                    </Content>
                }
                <CommentButton
                    arr={reply}
                    score={score}
                    isCurrentlyUser={isCurrentlyUser}
                    isUpdate={isUpdate}
                    commentConent={commentConent}
                    handleOpenModal={handleOpenModal}
                    handleChangeScore={handleChangeScore}
                    handleSetUpdateMode={handleSetUpdateMode}
                    handleChangContent={handleChangContent}
                    handleToggleReplying={handleToggleReplying}
                />
            </Wrapp>
            {isReplying? 
            <Wrapp>
                <ReplyTextArea 
                    isCurrentlyUser={isCurrentlyUser} 
                    user={user}
                    arr={reply}
                    handleChangeReplying={handleChangeReplying}
                    handleReplying={handleReplying}
                    newReplying={newReplying}
                    />
            </Wrapp>
            :null}
        </>

    )
}

export default Reply