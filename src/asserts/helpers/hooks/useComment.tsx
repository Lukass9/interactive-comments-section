import { BaseSyntheticEvent, useState } from "react"
import { CommentsStruct, User } from "../../interfaces/interfaces"
import { findBiggestID } from "../function/findBigestID"

export const useComment = (comments: CommentsStruct[], currentUser: User, handleSetComments:(changeComments: CommentsStruct[])=>void) =>{
    const [singleComment, setSingleComment] = useState('')
  
    const handleSetSingleComment = (comment: BaseSyntheticEvent) =>{
      setSingleComment(comment.target.value)
    }
  
    const handleAddComment = (e: BaseSyntheticEvent) =>{ 
      e.preventDefault()
      const SetSingleComment: CommentsStruct = {
        id: findBiggestID(comments) + 1,
        content: singleComment,
        createdAt: "Przed chwilą",
        isCurrentlyUser: true,
        isUpdate: false,
        score: 0,
        user: {
          username: currentUser.username,
          image:{
            png: currentUser.image.png
          }
        }
      }
      handleSetComments( [...comments, SetSingleComment] )
      setSingleComment('')
    }

    const handleUpdateComment = (id: number) =>{
      comments[id].content = singleComment
      handleSetComments([...comments])
    }
  
    return {
        handleUpdateComment,
        singleComment,
        handleSetSingleComment,
        handleAddComment
      }
  }