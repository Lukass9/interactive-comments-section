import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { CommentsStruct, ReplyStruct } from './asserts/interfaces/interfaces';
import { currentUserInitState, initialState } from './asserts/helpers/initialState/InitialState';
import { useComment } from './asserts/helpers/hooks/useComment';
import Reply from './components/organisms/reply/reply';
import { Modal } from './components/organisms/modal/modal';


const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [comments, setComments] = useState<CommentsStruct[]>(initialState)
  const [currentUser, setCurrentUser] = useState(currentUserInitState)

  
  const handleCloseModal = () =>{
    setIsOpen(false)
  }
  const handleOpenModal = (arr: CommentsStruct | ReplyStruct) =>{
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
  const handleReplying = (arr: CommentsStruct | ReplyStruct) =>{
    // console.log("id", id)
    // console.log("findIndex", findIndex(comments, id))
    // console.log("typeof", typeof findIndex(comments, id))
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
    <Modal open={isOpen} onClose={handleCloseModal} />

    <Wrapp >
      <WrappComment>
        {comments.map((comment)=>(
          <>
            <Comment
              arr={comment}
              key={`key + ${comment.id}`}
              handleChangeScore={handleChangeScore}
              handleReplying={handleReplying}
              handleChangContent={handleChangContent}
              handleSetUpdateMode={handleToggleUpdateMode}
              handleOpenModal={handleOpenModal}
              />
            {comment.replies !== undefined && comment.replies.length > 0 ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Reply
                  reply={repl}
                  key={`keyReplies + ${repl.id}`}  
                  handleChangeScore={handleChangeScore}
                  handleReplying={handleReplying}
                  handleChangContent={handleChangContent}
                  handleSetUpdateMode={handleToggleUpdateMode}
                  handleOpenModal={handleOpenModal}
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