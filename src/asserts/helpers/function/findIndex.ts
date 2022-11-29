import { CommentsStruct } from "../../interfaces/interfaces";

export const findIndex = (comments: CommentsStruct[], id: number): number | number[] =>{
    const index = comments.findIndex(el=> el.id === id)
    let repliesIndex: number[] | undefined;
    comments.map((el,i) =>{
      el.replies?.findIndex((find, j)=> {
        if(find.id === id) repliesIndex = [i,j]
      })
    })
    if(repliesIndex !== undefined) return repliesIndex
    return index
}