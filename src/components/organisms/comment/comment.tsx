import React, { BaseSyntheticEvent } from "react";
import { Comments } from "../../../asserts/interfaces/interfaces";
import Button from "../../atoms/Button/Button";
import { Avatar, Content, CreatedAt, EditScore,  Score, ScoreWrapp, User, UserName,  Wrapp, WrapRow, WrapRowButton } from "./comment.style";

const Comment: React.FC <Comments> = ({username,content,createdAt,score,userImage, isReply, isCurrentlyUser , handleChangeScore, id, key}) =>{
    return (
        <Wrapp key={key} isReply={isReply}>
            <WrapRow> 
                <Avatar src={userImage} alt="avatar" />
                <UserName> {username} </UserName>
                {isCurrentlyUser? <User>you</User> : null}
                <CreatedAt> {createdAt} </CreatedAt>
            </WrapRow>
            <Content>
                {content}
            </Content>
            <WrapRowButton>
                <ScoreWrapp>
                    <EditScore onClick={(event: BaseSyntheticEvent)=> handleChangeScore(event ,id)}> + </EditScore>
                    <Score> {score} </Score>
                    <EditScore onClick={(event: BaseSyntheticEvent)=> handleChangeScore(event ,id)}> - </EditScore>
                </ScoreWrapp>
                
                {isCurrentlyUser? 
                <WrapRowButton>
                    <Button text="Delete" isDelete img="\images\icon-delete.svg"/>
                    <Button text="Edit" img="\images\icon-edit.svg"/>
                </WrapRowButton>
                :
                    <Button text="Reply" img="\images\icon-reply.svg"/>
                }
                
            </WrapRowButton>
        </Wrapp>
    )
}

export default Comment