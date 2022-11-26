import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { commentsState, reply, user } from './asserts/interfaces/interfaces';
import { currentUserInitState, initialState } from './asserts/helpers/function/initialState/InitialState';

const App: React.FC = () => {

  const [comments, setComments] = useState<commentsState[]>(initialState)
  const [singleComment, setSingleComment] = useState('')
  const [currentUser, setCurrentUser] = useState(currentUserInitState)

  const handleSetSingleComment = (comment: BaseSyntheticEvent) =>{
    setSingleComment(comment.target.value)
  }
  const handleAddComment = (e: BaseSyntheticEvent) =>{ 
    e.preventDefault()
    const singleCommentTEST: commentsState = {
      id: comments[comments.length-1].id + 1,
      content: singleComment,
      createdAt: "Przed chwilą",
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
    const index = comments.findIndex(el=> el.id === id)
    let repliesIndex: number[] | undefined;
    comments.map((el,i) =>{
      el.replies?.findIndex((find, j)=> {
        if(find.id === id) repliesIndex = [i,j]
      })
    })

    const changeScore = (replies: reply | commentsState | undefined)=>{
      if(replies!==undefined) {
        if(event.target.firstChild.data === " - ")  {
          if(replies.score > 0) replies.score--
        }
        else replies.score++
      }
    }

    if(repliesIndex !== undefined ){
      changeScore(comments[repliesIndex[0]].replies?.at(repliesIndex[1]))
    }
    else changeScore(comments[index])
    setComments([...comments])
  }

  useEffect(()=>{
    setCurrentUser({
      username: data.currentUser.username,
      image: {
        png: data.currentUser.image.png
      }
    })
    const savedCommentsStates: commentsState[] = []

    data.comments.map((comment : commentsState )=>{
      const singleComment: commentsState = comment
      savedCommentsStates.push(singleComment)
    }) 
    setComments(savedCommentsStates)
    
  },[] )

  return (
    <Wrapp >
      <WrappComment>
        {comments.map(comment=>(
          <>
            <Comment
              key={`key + ${comment.id}`}
              id={comment.id}
              handleChangeScore = {handleChangeScore}
              content= {comment.content}
              username= {comment.user.username}
              createdAt= {comment.createdAt}
              score={comment.score} 
              userImage= {comment.user.image.png} 
              isReply={false}/>
            {comment.replies !== undefined ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Comment
                    key={`keyReplies + ${repl.id}`}  
                    id={repl.id}
                    handleChangeScore = {handleChangeScore}
                    content= {repl.content}
                    username= {repl.user.username}
                    createdAt= {repl.createdAt}
                    score={repl.score} 
                    userImage= {repl.user.image.png} 
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
