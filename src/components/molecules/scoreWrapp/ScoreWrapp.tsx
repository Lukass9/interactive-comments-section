import { BaseSyntheticEvent } from "react";
import { CommentsStruct, ReplyStruct } from "../../../asserts/interfaces/interfaces";
import { EditScore, Score, Wrapp } from "./ScoreWrapp.style";

interface Props {
    handleChangeScore: (event: BaseSyntheticEvent, arr:  CommentsStruct | ReplyStruct) => void,
    score: number,
    arr:  CommentsStruct | ReplyStruct
 }

export const ScoreWrapp: React.FC<Props> = ({handleChangeScore,score, arr}) => {
    return (
        <Wrapp>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, arr)}> + </EditScore>
            <Score> {score} </Score>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, arr)}> - </EditScore>
        </Wrapp>
    )
};