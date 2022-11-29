import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { CommentsStruct, Reply } from './asserts/interfaces/interfaces';
import { currentUserInitState, initialState } from './asserts/helpers/initialState/InitialState';
import { findIndex } from './asserts/helpers/function/findIndex';

const App: React.FC = () => {

  const [comments, setComments] = useState<CommentsStruct[]>(initialState)
  const [singleComment, setSingleComment] = useState('')
  const [currentUser, setCurrentUser] = useState(currentUserInitState)

  const handleSetSingleComment = (comment: BaseSyntheticEvent) =>{
    setSingleComment(comment.target.value)
  }
  const handleAddComment = (e: BaseSyntheticEvent) =>{ 
    e.preventDefault()
    const singleCommentTEST: CommentsStruct = {
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
    setComments( [...comments, singleCommentTEST] )
    setSingleComment('')
  }
  const handleChangeScore = (event: BaseSyntheticEvent ,id: number) =>{
    const index = findIndex(comments, id)

    const changeScore = (replies: Reply | CommentsStruct | undefined)=>{
      if(replies!==undefined) {
        if(event.target.firstChild.data === " - ")  {
          if(replies.score > 0) replies.score--
        }
        else replies.score++
      }
    }

    if(index !== undefined && typeof index !== "number"){
      changeScore(comments[index[0]].replies?.at(index[1]))
    }
    else changeScore(comments[index])
    setComments([...comments])
  }
  const handleReplying = (id: number) =>{
    console.log("id", id)
    console.log("findIndex", findIndex(comments, id))
    console.log("typeof", typeof findIndex(comments, id))
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
    <Wrapp >
      <WrappComment>
        {comments.map(comment=>(
          <>
            <Comment
              id={comment.id}
              content= {comment.content}
              user={comment.user}
              createdAt= {comment.createdAt}
              score={comment.score} 
              isCurrentlyUser={comment.isCurrentlyUser}
              key={`key + ${comment.id}`}
              handleChangeScore = {handleChangeScore}
              handleReplying={handleReplying}
              isReply={false}
              isWriteComment={comment.isWriteComment}
              />
            {comment.replies !== undefined && comment.replies.length > 0 ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Comment
                  id={repl.id}
                  content= {repl.content}
                  createdAt= {repl.createdAt}
                  score={repl.score}
                  user={repl.user}
                  isCurrentlyUser={repl.isCurrentlyUser}
                  replyingTo={repl.replyingTo}
                  key={`keyReplies + ${repl.id}`}  
                  handleReplying={handleReplying}
                  handleChangeScore = {handleChangeScore}
                  isReply={true}/>
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
  );
}
export default App;
