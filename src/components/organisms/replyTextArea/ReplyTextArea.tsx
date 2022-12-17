import { BaseSyntheticEvent } from "react";
import { CommentsStruct, ReplyStruct, User } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAreaMod } from "../../atoms/comentAreaMod/ComentAreaMod"
import { Wrapp } from "../addCommentSection/AddCommentSection";
import { Avatar } from "../../atoms/avatar/Avatar";
import { WrapButtonReply, WrappReply } from "./ReplyTextArea.style";
 
interface Props {
    isEdite?: boolean,
    isReply?: boolean,
    arr: CommentsStruct | ReplyStruct,
    user: User,
    handleChangeReplying:(e: BaseSyntheticEvent) => void,
    newReplying: string,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
}

export const ReplyTextArea: React.FC<Props> = ({arr, user, handleChangeReplying, newReplying, handleReplying, isReply, isEdite}) => {

    return (
    <WrappReply onSubmit={ (e:React.FormEvent<HTMLInputElement>) => e.preventDefault()} isReply={isReply}>
        <Avatar src={process.env.PUBLIC_URL + user.image.png} alt="Avatar"/> 
        <CommentAreaMod  isEdite={isEdite} handleEditContent={handleChangeReplying} commentConent={newReplying} />
        <WrapButtonReply as="div">
            <SubimtButton newContent={newReplying} arr={arr} handleAction={handleReplying}>REPLY</SubimtButton>
        </WrapButtonReply>
    </WrappReply>
)};