import { CommentsStruct } from "../../interfaces/interfaces"

export const findBiggestID = (comments: CommentsStruct[]) =>{
    let biggestID = 0;
    comments.map(el=>{
        if(el.id > biggestID) biggestID=el.id
        el.replies?.map(elRep=>{
            if(elRep.id > biggestID) biggestID=elRep.id
        })
    })
    return biggestID
} 