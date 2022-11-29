import React, { BaseSyntheticEvent, Component } from "react";
import { WrappComment } from "../../../App.style";
import { Comments } from "../../../asserts/interfaces/interfaces";
import Button from "../../atoms/Button/Button";
import AddCommentSection from "../addCommentSection/AddCommentSection";
import { Avatar, Content, CreatedAt, EditScore, ReplyingTo, Score, ScoreWrapp, User, UserName, Wrapp, WrapRow, WrapRowButton } from "./comment.style";

const Comment: React.FC<Comments> = ({ user: { username, image: { png } }, replyingTo, content, createdAt, score, isReply, isCurrentlyUser, handleChangeScore, handleReplying, id, key }) => {
    return (
        <Wrapp key={key} isReply={isReply}>
            <WrapRow>
                <Avatar src={png} alt="avatar" />
                <UserName> {username} </UserName>
                {isCurrentlyUser ? <User>you</User> : null}
                <CreatedAt> {createdAt} </CreatedAt>
            </WrapRow>
            <Content>
                {isReply ? <ReplyingTo> @{replyingTo} </ReplyingTo> : null}
                {content}
            </Content>
            <WrapRowButton>
                <ScoreWrapp>
                    <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, id)}> + </EditScore>
                    <Score> {score} </Score>
                    <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, id)}> - </EditScore>
                </ScoreWrapp>
                {isCurrentlyUser ?
                    <WrapRowButton>
                        <Button
                            handleReplying={handleReplying}
                            id={id}
                            text="Delete"
                            isDelete
                            img="\images\icon-delete.svg" />
                        <Button
                            handleReplying={handleReplying}
                            id={id}
                            text="Edit"
                            img="\images\icon-edit.svg" />
                    </WrapRowButton>
                    :
                    <Button
                        handleReplying={handleReplying}
                        id={id}
                        text="Reply"
                        img="\images\icon-reply.svg" />
                }
            </WrapRowButton>
        </Wrapp>

    )
}

export default Comment