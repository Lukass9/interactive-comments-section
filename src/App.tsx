import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { useEffect, useState } from 'react';

interface reply {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  replyingTo: string,
  user:{
    userImage: string,
    userName: string,
  }
}

interface commentsState {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user:{
      userImage: string,
      userName: string,
    },
    replies?: reply[]
}

const App: React.FC = () => {
  const initialState: commentsState[] = [{
    id: 0,
    content: '',
    createdAt: '',
    score: 0,
    user:{
      userImage: '',
      userName: '',
    }
  }]
  const [comments, setComments] = useState(initialState)

  useEffect(()=>{
    const comments: commentsState[] = []
    data.comments.map(comment=>{
      const singleComment: commentsState = {
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt,
        score: comment.score,
        user: {
          userImage: comment.user.image.png,
          userName: comment.user.username
        },
        replies: comment.replies.length>0 ?
          comment.replies.map(reply=>{
            const singleReply: reply = {
              id: reply.id,
              content: reply.content,
              createdAt: reply.createdAt,
              replyingTo: reply.replyingTo,
              score: reply.score,
              user: {
                userImage: reply.user.image.png,
                userName: reply.user.username
              }
            }
            return singleReply
          }) : undefined
      } 
      comments.push(singleComment)
    })
    setComments(comments)

    const singleCommentTEST: commentsState = {
      id: 15,
      content: "przykładowy komentarz",
      createdAt: "Przed chwilą",
      score: 10,
      user: {
        userImage: "./images/avatars/image-amyrobson.png",
        userName: "NewUser"
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
            username= {comment.user.userName}
            createdAt= {comment.createdAt}
            score={comment.score} 
            userImage= {comment.user.userImage} 
            isReply={false}/>
            {comment.replies != undefined ? 
              <WrappReplyComment>
                {comment.replies.map(repl=>(
                  <Comment  content= {repl.content}
                  username= {repl.user.userName}
                  createdAt= {repl.createdAt}
                  score={repl.score} 
                  userImage= {repl.user.userImage} 
                  isReply={true}/>
                ))}
              </WrappReplyComment> : null}
          </>
        ))}
      </WrappComment>
      <WrappComment>
        <AddCommentSection userImage={data.currentUser.image.png}/>
      </WrappComment>
    </Wrapp>
  );
}

export default App;
