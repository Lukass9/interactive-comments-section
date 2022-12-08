import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { CommentsStruct, ReplyStruct } from './asserts/interfaces/interfaces';
import { currentUserInitState, initialState } from './asserts/helpers/initialState/InitialState';
import { useComment } from './asserts/helpers/hooks/useComment';
import Reply from './components/organisms/reply/reply';
import { Modal } from './components/organisms/modal/modal';
import { findIndex } from './asserts/helpers/function/findIndex';
import { findBiggestID } from './asserts/helpers/function/findBigestID';

const App: React.FC = () => {
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
  const {singleComment, handleSetSingleComment, handleAddComment } = useComment(comments,currentUser,handleSetComments)

  const handleToggleUpdateMode = (arr: CommentsStruct | ReplyStruct) =>{
    arr.isUpdate = !arr.isUpdate
    setComments([...comments])
  }

  const handleChangContent = (arr: CommentsStruct | ReplyStruct, newContent: string) =>{
    arr.content = newContent
    handleToggleUpdateMode(arr)
  }

  const handleChangeScore = (event: BaseSyntheticEvent ,arr: CommentsStruct | ReplyStruct) =>{
    if(event.target.firstChild.data === " - " && arr.score > 0) arr.score--;
    else if(event.target.firstChild.data === " + ") arr.score++ 
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
    data.comments.map((comment : CommentsStruct )=>{
      const singleComment: CommentsStruct = comment
      savedCommentsStates.push(singleComment)
    })
    setComments(CheckCommentForCurrentUser(savedCommentsStates))
  },[currentUser])

  return (
    <>
    <Modal open={isOpen} onClose={handleCloseModal} deleteItem={handleDeleteItem}/>

    <Wrapp>
      <WrappComment>
        {comments.map((comment)=>(
          <>
            <Comment
              arr={comment}
              key={`key + ${comment.id}`}
              handleToggleReplying={handleToggleReplying}
              handleChangeScore={handleChangeScore}
              handleReplying={handleReplying}
              handleChangContent={handleChangContent}
              handleSetUpdateMode={handleToggleUpdateMode}
              handleOpenModal={handleOpenModal}
              newReplying={newReplying}
              handleChangeReplying={handleChangeReplying}
              />
            {comment.replies !== undefined && comment.replies.length > 0 ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Reply
                  reply={repl}
                  key={`keyReplies + ${repl.id}`}
                  handleToggleReplying={handleToggleReplying}  
                  handleChangeScore={handleChangeScore}
                  handleReplying={handleReplying}
                  handleChangContent={handleChangContent}
                  handleSetUpdateMode={handleToggleUpdateMode}
                  handleOpenModal={handleOpenModal}
                  newReplying={newReplying}
                  handleChangeReplying={handleChangeReplying}
                  />
                  ))}
              </WrappReplyComment> : null}
          </>
        ))}
      </WrappComment>
      <WrappComment>
        <AddCommentSection 
          handleAddComment={handleAddComment}
          handleSetSingleComment={handleSetSingleComment}
          singleComment={singleComment} 
          userImage={currentUser.image.png}/>
      </WrappComment>
    </Wrapp>
  </>
  );
}
export default App;