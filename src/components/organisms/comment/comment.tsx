import React from "react";
import styled from "styled-components"

const Wrapp = styled.section`
    display: flex;
    flex-direction: column;
    width: 95vw;
    background-color: #ffffff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
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
interface Props {
    bg: string;
}
const WrapButton = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props: { bg: string; }) => props.bg};
    /* background-color: #f5f6fa; */
    border-radius: 5px;
`
const EditScore = styled.img`
    padding: 15px;
`
const Score = styled.div`
    
`



interface comments {
    username: string,
    content: string, 
    createdAt: string,
    score: number,
    userImage: string
}

const Component: React.FC <comments> = ({username,content,createdAt,score,userImage}) =>{
    return (
        <Wrapp>
            <WrapRow> 
                <Avatar src={userImage} alt="avatar" />
                <UserName> {username} </UserName>
                <CreatedAt> {createdAt} </CreatedAt>
            </WrapRow>
            <Content>
                {content}
            </Content>
            <WrapRowButton>
                <WrapButton bg={"#f5f6fa"}>
                    <EditScore src="\images\icon-plus.svg" alt="plus"/>
                    <Score> {score} </Score>
                    <EditScore src="\images\icon-minus.svg" alt="minus"/>
                </WrapButton>
                <WrapButton bg={"#fff"}>
                    <img src="\images\icon-reply.svg" alt="reply"/>
                    <p>Reply</p>
                </WrapButton>
            </WrapRowButton>
        </Wrapp>
    )
}

export default Component