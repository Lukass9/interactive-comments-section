import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { CommentAreaMod } from "../comment/comment.style";
import { Content, ReplyingTo, Wrapp } from "./reply.style";

interface Props {
    reply: ReplyStruct,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    key: React.Key,
}

const Reply: React.FC<Props> = ({ reply, handleToggleReplying, handleChangContent, handleSetUpdateMode, handleOpenModal, handleChangeScore, handleReplying, key }) => {
    const { user, replyingTo, content, createdAt, score, isCurrentlyUser, isUpdate, isReplying} = reply
    const [commentConent, setCommentContent] = useState(content)
    const [newReplying, setNewReplying] = useState()
    const handleChangeContent = (e: BaseSyntheticEvent) => {
        setCommentContent(e.target.value)
    }
    const handleChangeReplying = (e: BaseSyntheticEvent) => {
        setNewReplying(e.target.value)
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
            {isReplying? <Wrapp>
                <CommentAuthor  isCurrentlyUser={isCurrentlyUser} user={user} />
                <CommentAreaMod onChange={handleChangeReplying} value={newReplying} />
                <WrapButton>
                    <SubimtButton newContent={newReplying} arr={reply} handleAction={handleReplying}>REPLY</SubimtButton>
                </WrapButton>
            </Wrapp>
            :null}
        </>

    )
}

export default Reply