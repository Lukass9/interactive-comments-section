import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { setTimestamForComment } from "../../../asserts/helpers/function/setTimestampForComment";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { CommentAreaMod } from "../../atoms/comentAreaMod/ComentAreaMod";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { ScoreWrapp } from "../../molecules/scoreWrapp/ScoreWrapp";
import { ReplyTextArea } from "../replyTextArea/ReplyTextArea";
import { Content, Wrapp } from "./comment.style";

interface Props {
    collectionId: string | undefined,
    arr: CommentsStruct,
    newReplying: string,
    timestamp: number,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct, collectionId: string | undefined) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string, collectionId: string | undefined) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    handleChangeReplying: (e: BaseSyntheticEvent) => void,
    key: React.Key,
}

const Comment: React.FC<Props> = ({collectionId, arr, timestamp, handleChangeReplying, newReplying, handleToggleReplying, handleSetUpdateMode, handleOpenModal, handleChangContent, handleChangeScore, handleReplying, key }) => {
    const { user, content, createdAt, score, isCurrentlyUser, isUpdate, isReplying, timestamp: postTimestamp} = arr
    const [commentConent, setCommentContent] = useState(content)
    const handleEditContent = (e: BaseSyntheticEvent) => {
        setCommentContent(e.target.value)
    }
    useEffect(()=>{
        setTimestamForComment(postTimestamp, timestamp, arr)
    },[timestamp])
    return (
        <>
            <Wrapp key={key}>
                <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user} />
                {isUpdate
                    ?
                    <CommentAreaMod isEdite={true} handleEditContent={handleEditContent} commentConent={commentConent} />
                    :
                    <Content>
                        {content}
                    </Content>
                    
                }
                <ScoreWrapp handleChangeScore={handleChangeScore} arr={arr} score={score} collectionId={collectionId}/>
                <CommentButton
                    collectionId={collectionId}
                    arr={arr}
                    isCurrentlyUser={isCurrentlyUser}
                    isUpdate={isUpdate}
                    commentConent={commentConent}
                    handleSetUpdateMode={handleSetUpdateMode}
                    handleChangContent={handleChangContent}
                    handleOpenModal={handleOpenModal}
                    handleToggleReplying={handleToggleReplying}
                />
            </Wrapp>

            {isReplying ?
                <>
                    <ReplyTextArea
                        user={user}
                        arr={arr}
                        handleChangeReplying={handleChangeReplying}
                        handleReplying={handleReplying}
                        newReplying={newReplying}
                    />
                </>
                : null}
        </>

    )
}

export default Comment