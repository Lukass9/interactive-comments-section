import { BaseSyntheticEvent } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { EditScore, Score, Wrapp } from "./ScoreWrapp.style";

interface Props {
    handleChangeScore: (event: BaseSyntheticEvent, arr:  CommentsStruct | ReplyStruct, collectionId: string | undefined) => void,
    score: number,
    arr:  CommentsStruct | ReplyStruct,
    collectionId: string | undefined,
 }

export const ScoreWrapp: React.FC<Props> = ({handleChangeScore,score, arr, collectionId}) => {
    return (
        <Wrapp>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, arr, collectionId)}> + </EditScore>
            <Score> {score} </Score>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, arr, collectionId)}> - </EditScore>
        </Wrapp>
    )
};