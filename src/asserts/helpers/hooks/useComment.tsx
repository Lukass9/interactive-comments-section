import { BaseSyntheticEvent, useEffect, useState } from "react"
import { CommentsStruct, LogedUser, ReplyStruct } from "../../interfaces/interfaces"
import { findBiggestID } from "../function/findBigestID"
import { findIndex } from "../function/findIndex"
import { currentUserInitState, initialState } from "../initialState/InitialState"
import data from "../../data/data.json"
import { addDoc, collection, getDocs, query, where, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { async } from "@firebase/util"

export const useComment = () => {
  const [timestamp, setTimestamp] = useState(Date.now())
  const [singleComment, setSingleComment] = useState('')
  const [newReplying, setNewReplying] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [currentID, setCurrentID] = useState(0)
  const [currentCollectionId, setCurrentCollectionId] = useState('')
  const [comments, setComments] = useState<CommentsStruct[]>(initialState)
  const [currentUser, setCurrentUser] = useState(currentUserInitState)
  const commentsCollectionRef = collection(db, "comments")


  const handleChangeReplying = (e: BaseSyntheticEvent) => {
    setNewReplying(e.target.value)
  }
  const handleDeleteItem = () => {
    const index: number | number[] = findIndex(comments, currentID)
    if (typeof index === 'number') {
      //database
      const deleteComment = async () => {
        const id = comments[index].collectionId
        if (typeof id === "string") {
          const commentDoc = doc(db, "comments", id)
          await deleteDoc(commentDoc);
        }
      }
      deleteComment()
      //
      comments.splice(index, 1)
    }
    else {
      comments.at(index[0])?.replies?.splice(index[1], 1)
      //database
      const deleteSubcomments = async ()=>{
        const id = comments[index[0]].collectionId
        if(typeof id === "string"){
          const commentDoc = doc(db, "comments", id)
          const updateField = {replies: comments[index[0]].replies }
          await updateDoc(commentDoc, updateField)
        }
      }
      deleteSubcomments()
      //
      
    }
    setComments([...comments])
    setIsOpen(false)
  }
  const handleToggleReplying = (arr: CommentsStruct | ReplyStruct) => {
    arr.isReplying = !arr.isReplying
    setComments([...comments])
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }
  const handleOpenModal = (arr: CommentsStruct | ReplyStruct) => {
    // if(arr.collectionId) setCurrentCollectionId(arr.collectionId)
    setCurrentID(arr.id)
    setIsOpen(true)
  }
  const handleSetComments = (changeComments: CommentsStruct[]) => {
    setComments(changeComments)
  }
  const handleSetSingleComment = (comment: BaseSyntheticEvent) => {
    setSingleComment(comment.target.value)
  }
  const handleAddComment = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setTimestamp(Date.now())

    const newSingleComment: CommentsStruct = {
      id: findBiggestID(comments) + 1,
      content: singleComment,
      createdAt: "now",
      timestamp: Date.now(),
      isCurrentlyUser: true,
      isUpdate: false,
      score: 0,
      replies: [],
      user: {
        username: currentUser.username,
        image: {
          png: currentUser.image.png
        }
      }
    }

    await addDoc(commentsCollectionRef, newSingleComment)
    handleSetComments([...comments, newSingleComment])
    setCurrentUser({ ...currentUser }) // trigger get data from database 
    setSingleComment('')
  }
  const handleUpdateComment = (id: number) => {
    comments[id].content = singleComment
    handleSetComments([...comments])
  }
  const handleToggleUpdateMode = (arr: CommentsStruct | ReplyStruct) => {
    arr.isUpdate = !arr.isUpdate
    setComments([...comments])
  }
  const handleChangContent = async (arr: CommentsStruct | ReplyStruct, newContent: string, collectionId: string | undefined) => {
    arr.content = newContent
    handleToggleUpdateMode(arr)

    //database
    const updateComment = async (collectionId: string, arr: CommentsStruct | ReplyStruct) => {
      const commentDoc = doc(db, "comments", collectionId)
      let updateField = {}

      if ("replyingTo" in arr) {
        const commentIndex = comments.findIndex(el => el.collectionId === collectionId)
        updateField = { replies: comments[commentIndex].replies }
      }
      else {
        updateField = { score: arr.content }
      }
      await updateDoc(commentDoc, updateField)
    }
    if (collectionId) updateComment(collectionId, arr)
    //
  }
  const handleChangeScore = (event: BaseSyntheticEvent, arr: CommentsStruct | ReplyStruct, collectionId: string | undefined) => {
    if (arr.isChangeScore || arr.isCurrentlyUser) return

    if (event.target.firstChild.data === " - " && arr.score > 0) arr.score--;
    else if (event.target.firstChild.data === " + ") arr.score++
    arr.isChangeScore = true
    setComments([...comments])

    //database
    const updateComment = async (collectionId: string, arr: CommentsStruct | ReplyStruct) => {
      const userDoc = doc(db, "comments", collectionId)
      let updateField = {}


      if ("replyingTo" in arr) {
        const comentIndex = comments.findIndex(el => el.collectionId === collectionId)
        updateField = { replies: comments[comentIndex].replies }
      }
      else {
        updateField = { score: arr.score }
      }
      await updateDoc(userDoc, updateField)
    }
    if (collectionId) updateComment(collectionId, arr)
  }
  const handleReplying = (arr: CommentsStruct | ReplyStruct, newContent: string) => {
    let index: number | number[] = findIndex(comments, arr.id)
    let indexNumber :number
    if (typeof index !== "number") indexNumber = index[0]
    else indexNumber = index;
    comments[indexNumber].replies?.push({
      id: findBiggestID(comments) + 1,
      content: newContent,
      createdAt: 'now',
      isCurrentlyUser: true,
      timestamp: Date.now(),
      score: 0,
      user: currentUser,
      replyingTo: arr.user.username
    })
    arr.isReplying = false

    //database
    const addReplying = async () =>{
      const id = comments[indexNumber].collectionId 
      if(typeof id === "string"){
        const commentDoc = doc(db, "comments", id)
        const updateField = {replies: comments[indexNumber].replies }
        await updateDoc(commentDoc, updateField)
      }
    }
    addReplying()
    setComments([...comments])
    setNewReplying("")
  }
  const CheckCommentForCurrentUser = (checkComment: CommentsStruct[]) => {
    checkComment.map(el => {
      el.replies?.map(elReplies => {
        if (elReplies.user.username === currentUser.username) elReplies.isCurrentlyUser = true
        else elReplies.isCurrentlyUser = false
      })
      if (el.user.username === currentUser.username) el.isCurrentlyUser = true
      else el.isCurrentlyUser = false
    })
    return checkComment
  }

  useEffect(() => {
    const auth = localStorage.getItem("auth")
    if (auth) {
      const logedUser: LogedUser = JSON.parse(auth)
      setCurrentUser({
        // username: "juliusomo",
        username: logedUser.currentUser.name,
        image: {
          png: data.currentUser.image.png
        }
      })
    }
    // const addAllCommentsToDatabase = () =>{
    //   comments.map(async el=> await addDoc(commentsCollectionRef, el))
    // }
    // addAllCommentsToDatabase()
  }, [])

  useEffect(() => {
    let savedCommentsStates: CommentsStruct[] = []
    const getComments = async () => {
      const commentsData = await getDocs(commentsCollectionRef)
      const comments: CommentsStruct[] = commentsData.docs.map((doc) => ({ ...doc.data() as CommentsStruct, collectionId: doc.id }))

      if (!commentsData.empty) savedCommentsStates = comments
      else if (localStorage.getItem("comments")) {
        const tmp = localStorage.getItem("comments")
        if (tmp) savedCommentsStates = JSON.parse(tmp)
      }
      else {
        data.comments.map((comment) => {
          const singleComment: CommentsStruct = comment
          savedCommentsStates.push(singleComment)
        })
      }
      setComments(CheckCommentForCurrentUser(savedCommentsStates))
    }
    getComments()
  }, [currentUser])

  useEffect(() => {
    setTimestamp(Date.now())

    comments.sort((a, b) => {
      if (b.score === a.score && a.timestamp && b.timestamp) return a.timestamp - b.timestamp
      else return b.score - a.score
    })

    if (comments[0].user.username !== '') localStorage.setItem("comments", JSON.stringify(comments))

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