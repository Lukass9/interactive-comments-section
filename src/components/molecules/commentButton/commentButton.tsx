import { ScoreWrapp } from "../scoreWrapp/ScoreWrapp";
import Button from "../../atoms/Button/Button";
import { WrapRowButton } from "./commentButton.style";
import { BaseSyntheticEvent } from "react";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";

interface Props { 
    handleChangeScore: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    handleReplying: (arr: CommentsStruct | ReplyStruct) => void, 
    commentConent: string,
    arr: CommentsStruct | ReplyStruct,
    id: number,
    score: number,
    isCurrentlyUser?: boolean,
    isUpdate?: boolean,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string)=> void
}
export const CommentButton: React.FC<Props> = ({arr, handleChangContent, commentConent, handleSetUpdateMode,handleChangeScore, id, score, isCurrentlyUser, isUpdate, handleReplying}) => {
    return (
        <WrapRowButton>
            <ScoreWrapp handleChangeScore={handleChangeScore} arr={arr} score={score} />
            {isUpdate ? 
            <SubimtButton newContent={commentConent} arr={arr} handleAction={handleChangContent}>UPDATE</SubimtButton>
            :
            isCurrentlyUser ?
                <WrapRowButton>
                    <Button
                        handleAction={handleReplying}
                        arr={arr}
                        text="Delete"
                        isDelete
                        img="\images\icon-delete.svg" />
                    <Button
                        handleAction={handleSetUpdateMode}
                        arr={arr}
                        text="Edit"
                        img="\images\icon-edit.svg" />
                </WrapRowButton>
                :
                <Button
                    handleAction={handleReplying}
                    arr={arr}
                    text="Reply"
                    img="\images\icon-reply.svg" />
            }
        </WrapRowButton>
    )
};