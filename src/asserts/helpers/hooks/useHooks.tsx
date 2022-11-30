import { BaseSyntheticEvent, useState } from "react"
import { CommentsStruct, User } from "../../interfaces/interfaces"

export const useComment = (comments: CommentsStruct[], currentUser: User, handleSetComments:(changeComments: CommentsStruct[])=>void) =>{
    const [singleComment, setSingleComment] = useState('')
  
    const handleSetSingleComment = (comment: BaseSyntheticEvent) =>{
      setSingleComment(comment.target.value)
    }
  
    const handleAddComment = (e: BaseSyntheticEvent) =>{ 
      e.preventDefault()
      const SetSingleComment: CommentsStruct = {
        id: comments[comments.length-1].id + 1,
        content: singleComment,
        createdAt: "Przed chwilą",
        isCurrentlyUser: true,
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
  
    return {
        singleComment: singleComment,
        handleSetSingleComment: handleSetSingleComment,
        handleAddComment: handleAddComment
      }
  }