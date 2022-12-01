import React, { BaseSyntheticEvent, Component } from "react";
import { WrappComment } from "../../../App.style";
import { CommentsStruct, Reply } from "../../../asserts/interfaces/interfaces";
import { Avatar } from "../../atoms/Button/avatar/Avatar";
import Button from "../../atoms/Button/Button";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { ScoreWrapp } from "../../molecules/scoreWrapp/ScoreWrapp";
import AddCommentSection from "../addCommentSection/AddCommentSection";
import { Content, ReplyingTo, Wrapp } from "./comment.style";

interface Props extends Reply, CommentsStruct{
    isReply: boolean,
    handleChangeScore: (event: BaseSyntheticEvent, id: number) => void,
    handleReplying: (id: number) => void, 
    key: React.Key,
  }

const Comment: React.FC<Props> = ({ user, replyingTo, content, createdAt, score, isReply, isCurrentlyUser, handleChangeScore, handleReplying, id, key }) => {
    return (
        <Wrapp key={key} isReply={isReply}>
            <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user}/>
            <Content>
                {isReply ? <ReplyingTo> @{replyingTo} </ReplyingTo> : null}
                {content}
            </Content>
           <CommentButton id={id} score={score} isCurrentlyUser={isCurrentlyUser} handleChangeScore={handleChangeScore} handleReplying={handleReplying}/>
        </Wrapp>

    )
}

export default Comment