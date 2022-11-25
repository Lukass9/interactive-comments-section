import React, { BaseSyntheticEvent } from "react";
import styled from "styled-components"

const Wrapp = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${(props: {isReply: boolean})=> props.isReply? '90vw' : '95vw' };
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5vw 0 0;
    border-radius: 10px;

    :first-child{
        margin-top: ${(props: {isReply: boolean}) => props.isReply? "0px" : "9.375px"};
    }
    
`
const WrapRow = styled.div`
    display: flex;
    align-items: center;
`
const WrapRowButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 5px;
`
const UserName = styled.h1`
    font-size: 16px;
    margin: 0 5px;
`
const CreatedAt = styled.p`
    color: #324152;
    margin: 0 5px;
`
const Content = styled.p`
    color: #324152;
    line-height: 23px;
    letter-spacing: .5px;
`

const ScoreWrapp = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props: { bg: string; }) => props.bg};
    border-radius: 10px;
`
const WrapButton = styled(ScoreWrapp)`
    cursor: pointer;
`
const EditScore = styled.p`
    padding: 0 15px;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 0;
    color: #c3c4ef;
    cursor: pointer;
    &:hover{
        color: #5457b6;
    }
`
const Score = styled.div`
    display: flex;
    justify-content: center;
    color: #5457b6;
    font-weight: 700;
    min-width: 18px;
`
const Reply = styled.div` 
    color: #5457b6;
    padding: 5px;
    font-weight: 700;
`

interface comments {
    username: string,
    id: number,
    content: string, 
    createdAt: string,
    score: number,
    userImage: string,
    isReply: boolean
    handleChangeScore: (event: BaseSyntheticEvent, id: number) => void
}

const Comment: React.FC <comments> = ({username,content,createdAt,score,userImage, isReply, handleChangeScore, id}) =>{
    return (
        <Wrapp isReply={isReply}>
            <WrapRow> 
                <Avatar src={userImage} alt="avatar" />
                <UserName> {username} </UserName>
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