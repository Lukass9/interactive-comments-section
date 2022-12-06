import React, { BaseSyntheticEvent, useState } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentButton } from "../../molecules/commentButton/commentButton";
import { CommentAreaMod, Content, Wrapp } from "./comment.style";

interface Props {
    arr: CommentsStruct,
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    key: React.Key,
}

const Comment: React.FC<Props> = ({ arr, handleToggleReplying, handleSetUpdateMode, handleOpenModal, handleChangContent, handleChangeScore, handleReplying, key }) => {
    const {user, content, createdAt, score, isCurrentlyUser, isUpdate, isReplying } = arr
    const [commentConent, setCommentContent] = useState(content)
    const [newReplying, setNewReplying] = useState()
    const handleChangeContent = (e: BaseSyntheticEvent) => {
        setCommentContent(e.target.value)
    }
    const handleChangeReplying = (e: BaseSyntheticEvent) => {
        setNewReplying(e.target.value)
    }
    return (
        <>
            <Wrapp key={key}>
                <CommentAuthor createdAt={createdAt} isCurrentlyUser={isCurrentlyUser} user={user} />
                {isUpdate
                    ?
                    <CommentAreaMod onChange={handleChangeContent} value={commentConent} />
                    :
                    <Content>
                        {content}
                    </Content>
                }
                <CommentButton
                    arr={arr}
                    score={score}
                    isCurrentlyUser={isCurrentlyUser}
                    isUpdate={isUpdate}
                    commentConent={commentConent}
                    handleChangeScore={handleChangeScore}
                    handleSetUpdateMode={handleSetUpdateMode}
                    handleChangContent={handleChangContent}
                    handleOpenModal={handleOpenModal}
                    handleToggleReplying={handleToggleReplying}
                />
            </Wrapp>
            {isReplying? <Wrapp>
                <CommentAuthor  isCurrentlyUser={isCurrentlyUser} user={user} />
                <CommentAreaMod onChange={handleChangeReplying} value={newReplying} />
                <WrapButton>
                    <SubimtButton newContent={newReplying} arr={arr} handleAction={handleReplying}>REPLY</SubimtButton>
                </WrapButton>
            </Wrapp>
            :null}
        </>

    )
}

export default Comment