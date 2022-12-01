import { ScoreWrapp } from "../scoreWrapp/ScoreWrapp";
import Button from "../../atoms/Button/Button";
import { WrapRowButton } from "./commentButton.style";
import { BaseSyntheticEvent } from "react";

interface Props { 
    handleChangeScore: (event: BaseSyntheticEvent, id: number) => void,
    handleReplying: (id: number) => void, 
    id: number,
    score: number,
    isCurrentlyUser?: boolean,
}
export const CommentButton: React.FC<Props> = ({handleChangeScore, id, score, isCurrentlyUser, handleReplying}) => {
    return (
        <WrapRowButton>
            <ScoreWrapp handleChangeScore={handleChangeScore} id={id} score={score} />
            {isCurrentlyUser ?
                <WrapRowButton>
                    <Button
                        handleReplying={handleReplying}
                        id={id}
                        text="Delete"
                        isDelete
                        img="\images\icon-delete.svg" />
                    <Button
                        handleReplying={handleReplying}
                        id={id}
                        text="Edit"
                        img="\images\icon-edit.svg" />
                </WrapRowButton>
                :
                <Button
                    handleReplying={handleReplying}
                    id={id}
                    text="Reply"
                    img="\images\icon-reply.svg" />
            }
        </WrapRowButton>
    )
};