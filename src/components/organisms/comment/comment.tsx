import React, { BaseSyntheticEvent } from "react";
import { Comments } from "../../../asserts/interfaces/interfaces";
import { Avatar, Content, CreatedAt, EditScore, Reply, Score, ScoreWrapp, UserName, WrapButton, Wrapp, WrapRow, WrapRowButton } from "./comment.style";

const Comment: React.FC <Comments> = ({username,content,createdAt,score,userImage, isReply, isCurrentlyUser , handleChangeScore, id, key}) =>{
    return (
        <Wrapp key={key} isReply={isReply}>
            <WrapRow> 
                <Avatar src={userImage} alt="avatar" />
                <UserName> {username} </UserName>
                {isCurrentlyUser? <p>you</p> : null}
                <CreatedAt> {createdAt} </CreatedAt>
            </WrapRow>
            <Content>
                {content}
            </Content>
            <WrapRowButton>
                <ScoreWrapp bg={"#f5f6fa"}>
                    <EditScore onClick={(event: BaseSyntheticEvent)=> handleChangeScore(event ,id)}> + </EditScore>
                    <Score> {score} </Score>
                    <EditScore onClick={(event: BaseSyntheticEvent)=> handleChangeScore(event ,id)}> - </EditScore>
                </ScoreWrapp>
                <WrapButton bg={"#fff"}>
                    <img src="\images\icon-reply.svg" alt="reply"/>
                    <Reply>Reply</Reply>
                </WrapButton>
            </WrapRowButton>
        </Wrapp>
    )
}

export default Comment