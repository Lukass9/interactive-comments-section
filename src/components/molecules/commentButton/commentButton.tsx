import { ScoreWrapp } from "../scoreWrapp/ScoreWrapp";
import Button from "../../atoms/Button/Button";
import { WrapRowButton } from "./commentButton.style";
import { BaseSyntheticEvent } from "react";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";

interface Props { 
    handleChangeScore?: (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct) => void,
    commentConent: string,
    arr: CommentsStruct | ReplyStruct,
    score?: number,
    isCurrentlyUser?: boolean,
    isUpdate?: boolean,
    handleSetUpdateMode: (arr: CommentsStruct | ReplyStruct) => void,
    handleChangContent: (arr: CommentsStruct | ReplyStruct, newContent: string)=> void,
    handleOpenModal: (arr: CommentsStruct | ReplyStruct) => void,
    handleToggleReplying: (arr: CommentsStruct | ReplyStruct) => void,
    AdditionalValue?: string,
}
export const CommentButton: React.FC<Props> = ({ arr,AdditionalValue, handleToggleReplying, handleChangContent, commentConent, handleOpenModal, handleSetUpdateMode,handleChangeScore, score, isCurrentlyUser, isUpdate}) => {
    return (
        <WrapRowButton>
            {isUpdate ? 
            <SubimtButton AdditionalValue={AdditionalValue} newContent={commentConent} arr={arr} handleAction={handleChangContent}>UPDATE</SubimtButton>
            :
            isCurrentlyUser ?
                <WrapRowButton>
                    <Button
                        handleAction={handleOpenModal}
                        arr={arr}
                        text="Delete"
                        isDelete
                        img={process.env.PUBLIC_URL + '/images/icon-delete.svg'} />
                    <Button
                        handleAction={handleSetUpdateMode}
                        arr={arr}
                        text="Edit"
                        img={process.env.PUBLIC_URL + '/images/icon-edit.svg'}/>
                </WrapRowButton>
                :
                <Button
                    handleAction={handleToggleReplying}
                    arr={arr}
                    text="Reply"
                    img={process.env.PUBLIC_URL + '/images/icon-reply.svg'} />
            }
        </WrapRowButton>
    )
};