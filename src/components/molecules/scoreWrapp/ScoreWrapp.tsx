import { BaseSyntheticEvent } from "react";
import { EditScore, Score, Wrapp } from "./ScoreWrapp.style";

interface Props {
    handleChangeScore: (event: BaseSyntheticEvent, id: number) => void,
    score: number,
    id: number
 }

export const ScoreWrapp: React.FC<Props> = ({handleChangeScore,score, id}) => {
    return (
        <Wrapp>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, id)}> + </EditScore>
            <Score> {score} </Score>
            <EditScore onClick={(event: BaseSyntheticEvent) => handleChangeScore(event, id)}> - </EditScore>
        </Wrapp>
    )
};