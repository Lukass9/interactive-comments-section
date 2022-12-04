import React, { BaseSyntheticEvent, useState } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { CommentAreaMod, Content, Wrapp } from "./comment.style";

interface Props {
    arr: CommentsStruct,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct) => void, 
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    key: React.Key,
  }

const Comment: React.FC<Props> = ({arr, handleSetUpdateMode, handleChangContent, handleChangeScore, handleReplying, key}) => {
    const  {id, user, content, createdAt, score, isCurrentlyUser, isUpdate} = arr
    const [commentConent, setCommentContent] = useState(content)
    const handleChangeContent = (e: BaseSyntheticEvent) =>{
        setCommentContent(e.target.value)
    }
    return (
        <Wrapp key={key}>
            <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user}/>
            {isUpdate
            ? 
                <CommentAreaMod onChange={handleChangeContent} value={commentConent}/>
            :
                <Content>
                    {content}
                </Content>
            }
           <CommentButton
            arr={arr}
            id={id} 
            score={score} 
            isCurrentlyUser={isCurrentlyUser} 
            isUpdate={isUpdate}
            commentConent={commentConent}
            handleChangeScore={handleChangeScore} 
            handleReplying={handleReplying}
            handleSetUpdateMode={handleSetUpdateMode}
            handleChangContent={handleChangContent}
            />
        </Wrapp>

    )
}

export default Comment