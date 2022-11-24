import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { useEffect, useState } from 'react';
import { commentsState, reply, user } from './asserts/interfaces/interfaces';

const App: React.FC = () => {
  const currentUserInitState: user = {
    username: '',
    image: {
      png:''
    }
  }
  const initialState: commentsState[] = [{
    id: 0,
    content: '',
    createdAt: '',
    score: 0,
    user: currentUserInitState
  }]
  const [comments, setComments] = useState<commentsState[]>(initialState)
  const [currentUser, setCurrentUser] = useState(currentUserInitState)

  useEffect(()=>{

    setCurrentUser({
      username: data.currentUser.username,
      image: {
        png: data.currentUser.image.png
      } 
    })

    const comments: commentsState[] = []

    if(data.comments.length > 0){
      data.comments.map((comment : commentsState )=>{
        const singleComment: commentsState = {
          id: comment.id,
          content: comment.content,
          createdAt: comment.createdAt,
          score: comment.score,
          user: {
            image: { 
              png: comment.user.image.png
            },
            username: comment.user.username
          },
          replies: comment.replies !== undefined ?
            comment.replies.map((reply: reply)=>{
              const singleReply: reply = {
                id: reply.id,
                content: reply.content,
                createdAt: reply.createdAt,
                replyingTo: reply.replyingTo,
                score: reply.score,
                user: {
                  image: {
                    png: reply.user.image.png
                  },
                  username: reply.user.username
                }
              }
              return singleReply
            }) : undefined 
        } 
        comments.push(singleComment)
      }) 
    }
    // setComments(comments)

    const singleCommentTEST: commentsState = {
      id: 15,
      content: "przykładowy komentarz",
      createdAt: "Przed chwilą",
      score: 10,
      user: {
        username: "NewUser",
        image:{
          png: "./images/avatars/image-amyrobson.png"
        }
      }
    } 
    setComments( [...comments, singleCommentTEST] )

  },[])
  return (
    <Wrapp>
      <WrappComment>
        {comments.map(comment=>(
          <>
            <Comment  content= {comment.content}
            username= {comment.user.username}
            createdAt= {comment.createdAt}
            score={comment.score} 
            userImage= {comment.user.image.png} 
            isReply={false}/>
            {comment.replies != undefined ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Comment  content= {repl.content}
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
        <AddCommentSection userImage={currentUser.image.png}/>
      </WrappComment>
    </Wrapp>
  );
}

export default App;
