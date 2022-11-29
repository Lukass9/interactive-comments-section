import React, { BaseSyntheticEvent } from "react";
import styled from "styled-components"

const Wrapp = styled.form`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: ${(props: {isReply: boolean})=> props.isReply? '90vw' : '95vw' };
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5vw 0 0;
    border-radius: 10px;
`
const Avatar = styled.img`
    width: 30px;
    height: 30px;
`
const Comment = styled.textarea`
    font-family: 'Rubik', sans-serif;
    padding: 10px 20px;
    width: 100%;
    order: -1;
    border: 1px solid lightgray;
    min-height: 80px;
    border-radius: 5px;
    outline: none;
    resize: none;
    color: #324152;
    margin-bottom: 10px;
`
const Button = styled.button`
    background-color: hsl(238, 40%, 52%);
    color: hsl(0, 0%, 100%);
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid hsl(238, 40%, 52%);
    border-radius: 5px;
`
interface commentSection {
    userImage: string,
    singleComment: string,
    handleSetSingleComment: (comment: BaseSyntheticEvent)=>void,
    handleAddComment: (e: BaseSyntheticEvent)=>void,
    isReply?: boolean
}
const AddCommentSection: React.FC<commentSection> = ({userImage, singleComment, handleSetSingleComment, handleAddComment, isReply}) =>{
    return (
        <Wrapp 
            isReply={isReply}
            onSubmit={handleAddComment}>
            <Avatar src={userImage} alt="userAvatar"/>
            <Comment onChange={handleSetSingleComment} value={singleComment} type="textarea" placeholder="Add a comment..."/>
            <Button> SEND </Button>
        </Wrapp>
    )
}

export default AddCommentSection