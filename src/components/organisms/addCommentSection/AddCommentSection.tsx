import React, { BaseSyntheticEvent } from "react";
import styled from "styled-components"
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";

export const Wrapp = styled.form`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5% 0 0;
    border-radius: 10px;
`
const Avatar = styled.img`
    width: 30px;
    height: 30px;
`
export const CommentArea = styled.textarea`
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

    @media (min-width: 1440px){
        width: 80%;
        order: 0;
    }
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
            <Avatar src={process.env.PUBLIC_URL + userImage} alt="userAvatar"/>
            <CommentArea onChange={handleSetSingleComment} value={singleComment} type="textarea" placeholder="Add a comment..."/>
            <SubimtButton>SEND</SubimtButton>
        </Wrapp>
    )
}

export default AddCommentSection