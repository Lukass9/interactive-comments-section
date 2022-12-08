import { BaseSyntheticEvent, useEffect, useRef } from "react";
import { CommentsStruct, ReplyStruct, User } from "../../../asserts/interfaces/interfaces";
import { WrapButton } from "../../atoms/Button/Button.style";
import { SubimtButton } from "../../atoms/submitButton/SubimtButton";
import { CommentAuthor } from "../../molecules/commentAuthor/commentAuthor";
import { CommentAreaMod} from "../comment/comment.style";

interface Props {
    isCurrentlyUser?: boolean,
    arr: CommentsStruct | ReplyStruct,
    user: User,
    handleChangeReplying:(e: BaseSyntheticEvent) => void,
    newReplying: string,
    handleReplying: (arr: CommentsStruct | ReplyStruct, newContent: string) => void,
}

export const ReplyTextArea: React.FC<Props> = ({arr, isCurrentlyUser, user, handleChangeReplying, newReplying, handleReplying}) => {
    const replyTextAreaRef = useRef<HTMLTextAreaElement>()
    useEffect(()=>{
        replyTextAreaRef.current?.focus()
    },[])

    return (
    <>
        <CommentAuthor  isCurrentlyUser={isCurrentlyUser} user={user} />
        <CommentAreaMod ref={replyTextAreaRef} onChange={handleChangeReplying} value={newReplying} />
        <WrapButton as="div">
            <SubimtButton newContent={newReplying} arr={arr} handleAction={handleReplying}>REPLY</SubimtButton>
        </WrapButton>
    </>
)};