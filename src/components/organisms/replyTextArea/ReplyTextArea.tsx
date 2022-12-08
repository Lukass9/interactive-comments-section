import { BaseSyntheticEvent } from "react";
import { CommentsStruct, ReplyStruct, User } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentAreaMod } from "../../atoms/comentAreaMod/ComentAreaMod"
 
interface Props {
    isCurrentlyUser?: boolean,
    arr: CommentsStruct | ReplyStruct,
    user: User,
    handleChangeReplying:(e: BaseSyntheticEvent) => void,
    newReplying: string,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
}

export const ReplyTextArea: React.FC<Props> = ({arr, isCurrentlyUser, user, handleChangeReplying, newReplying, handleReplying}) => {

    return (
    <>
        <CommentAuthor isCurrentlyUser={isCurrentlyUser} user={user} />
        <CommentAreaMod  handleEditContent={handleChangeReplying} commentConent={newReplying} />
        <WrapButton as="div">
            <SubimtButton newContent={newReplying} arr={arr} handleAction={handleReplying}>REPLY</SubimtButton>
        </WrapButton>
    </>
)};