import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { setTimestamForComment } from "../../../asserts/helpers/function/setTimestampForComment";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { CommentAreaMod } from "../../atoms/comentAreaMod/ComentAreaMod";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { ScoreWrapp } from "../../molecules/scoreWrapp/ScoreWrapp";
import { ReplyTextArea } from "../replyTextArea/ReplyTextArea";
import { Content, ReplyingTo, Wrapp, WrappForReply } from "./reply.style";

interface Props {
    reply: ReplyStruct,
    newReplying: string,
    timestamp: number,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    handleChangeReplying:(e: BaseSyntheticEvent) => void,
    key: React.Key,
}

const Reply: React.FC<Props> = ({ reply, timestamp, handleChangeReplying, newReplying, handleToggleReplying, handleChangContent, handleSetUpdateMode, handleOpenModal, handleChangeScore, handleReplying, key }) => {
    const { user, replyingTo, content, createdAt, score, isCurrentlyUser, isUpdate, isReplying, timestamp: postTimestamp} = reply
    const AdditionalValueForContent = {value: `@${replyingTo}, `}
    const AdditionalValue = AdditionalValueForContent.value
    const [commentConent, setCommentContent] = useState( AdditionalValueForContent.value + content)
    const handleEditContent = (e: BaseSyntheticEvent) => {
        setCommentContent(e.target.value)
    }

    useEffect(()=>{
        setTimestamForComment(postTimestamp, timestamp, reply)
        },[timestamp])

    return (
        <>
            <Wrapp key={key}>
                <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user} />
                {isUpdate
                    ?
                    <CommentAreaMod isEdite={true} handleEditContent={handleEditContent} commentConent={commentConent}/>
                    :
                    <Content>
                        <ReplyingTo> @{replyingTo} </ReplyingTo>
                        {content}
                    </Content>
                }
                <ScoreWrapp handleChangeScore={handleChangeScore} arr={reply} score={score} />
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
                    AdditionalValue={AdditionalValue}
                />
            </Wrapp>
            {isReplying? 
            <WrappForReply>
                <ReplyTextArea
                    isReply={true}
                    user={user}
                    arr={reply}
                    handleChangeReplying={handleChangeReplying}
                    handleReplying={handleReplying}
                    newReplying={newReplying}
                    />
            </WrappForReply>
            :null}
        </>

    )
}

export default Reply