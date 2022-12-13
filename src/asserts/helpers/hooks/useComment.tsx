import { BaseSyntheticEvent, useEffect, useState } from "react"
import { CommentsStruct, ReplyStruct } from "../../interfaces/interfaces"
import { findBiggestID } from "../function/findBigestID"
import { findIndex } from "../function/findIndex"
import { currentUserInitState, initialState } from "../initialState/InitialState"
import data from "../../data/data.json"

export const useComment = () =>{
    const [timestamp, setTimestamp] = useState(Date.now())
    const [singleComment, setSingleComment] = useState('')
    const [newReplying, setNewReplying] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [currentID, setCurrentID] = useState(0)
    const [comments, setComments] = useState<CommentsStruct[]>(initialState)
    const [currentUser, setCurrentUser] = useState(currentUserInitState)

    const handleChangeReplying = (e: BaseSyntheticEvent) => {
      setNewReplying(e.target.value)
    }
    const handleDeleteItem = () =>{
      const index: number | number[] = findIndex(comments,currentID)
      if(typeof index === 'number') comments.splice(index, 1)
      else comments.at(index[0])?.replies?.splice(index[1], 1)
      setComments([...comments])
      setIsOpen(false)
    }
    const handleToggleReplying = (arr: CommentsStruct | ReplyStruct) =>{
      arr.isReplying = !arr.isReplying
      setComments([...comments])
    }
    const handleCloseModal = () =>{
      setIsOpen(false)
    }  
    const handleOpenModal = (arr: CommentsStruct | ReplyStruct) =>{
      setCurrentID(arr.id)
      setIsOpen(true)
    }
    const handleSetComments = (changeComments: CommentsStruct[]) =>{
      setComments(changeComments)
    }
    const handleSetSingleComment = (comment: BaseSyntheticEvent) =>{
      setSingleComment(comment.target.value)
    }
    const handleAddComment = (e: BaseSyntheticEvent) =>{ 
      e.preventDefault()
      setTimestamp(Date.now())

      const SetSingleComment: CommentsStruct = {
        id: findBiggestID(comments) + 1,
        content: singleComment,
        createdAt: "now",
        timestamp: Date.now(),
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
    const handleToggleUpdateMode = (arr: CommentsStruct | ReplyStruct) =>{
      arr.isUpdate = !arr.isUpdate
      setComments([...comments])
    }
    const handleChangContent = (arr: CommentsStruct | ReplyStruct, newContent: string) =>{
      arr.content = newContent
      handleToggleUpdateMode(arr)
    }
    const handleChangeScore = (event: BaseSyntheticEvent ,arr: CommentsStruct | ReplyStruct) =>{
      if(arr.isChangeScore || arr.isCurrentlyUser) return

      if(event.target.firstChild.data === " - " && arr.score > 0) arr.score--;
      else if(event.target.firstChild.data === " + ") arr.score++ 
      arr.isChangeScore = true
      setComments([...comments])
    }
    const handleReplying = (arr: CommentsStruct | ReplyStruct, newContent: string) =>{
      let index: number | number[] = findIndex(comments,arr.id)
      if(typeof index !== "number") index = index[0]
      comments[index].replies?.push({
        id: findBiggestID(comments) + 1,
        content: newContent,
        createdAt:'now',
        isCurrentlyUser: true,
        timestamp: Date.now(),
        score:0,
        user: currentUser,
        replyingTo: arr.user.username
      })
      arr.isReplying = false
      setComments([...comments])
      setNewReplying("")
    }
    const CheckCommentForCurrentUser = (checkComment: CommentsStruct[]) =>{
      checkComment.map(el=>{
        el.replies?.map(elReplies =>{
          if(elReplies.user.username === currentUser.username) elReplies.isCurrentlyUser = true
        })
        if(el.user.username === currentUser.username) el.isCurrentlyUser = true
      })
      return checkComment
    }

    useEffect(()=>{
      setCurrentUser({
        username: data.currentUser.username,
        image: {
          png: data.currentUser.image.png
        }
      })
    },[] ) 
    
    useEffect(()=>{
      const savedCommentsStates: CommentsStruct[] = []
      data.comments.map(( comment )=>{
        const singleComment: CommentsStruct = comment
        // console.log("singleComment", singleComment)
        savedCommentsStates.push(singleComment)
      })
      setComments(CheckCommentForCurrentUser(savedCommentsStates))
    },[currentUser])

    useEffect(()=>{
      setTimestamp(Date.now())
    }, [comments])

    useEffect(()=>{
      comments.sort((a,b)=>{return b.score - a.score})
    }, [comments])
    return {
        singleComment,
        newReplying,
        isOpen,
        currentID,
        comments,
        currentUser,
        timestamp,
        handleChangeReplying,
        handleDeleteItem,
        handleToggleReplying,
        handleToggleUpdateMode,
        handleCloseModal,
        handleOpenModal,
        handleUpdateComment,
        handleSetSingleComment,
        handleAddComment,
        handleChangContent,
        handleChangeScore,
        handleReplying,
      }
  }