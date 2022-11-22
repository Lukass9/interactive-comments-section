import styled, {} from 'styled-components';
import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';

const Wrapp = styled.main `
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  `
const WrappComment = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`
const WrappReplyComment = styled.div`
  position: relative;
  margin-top: 9.375px;
   &::before{
        content: " ";
        position: absolute;
        top: 0;
        left: -5vw;
        width: 1px;
        height: 100%;
        background-color: hsl(239, 57%, 85%)
    }
` 
const App: React.FC = () => {
  return (
    <Wrapp>
      <WrappComment>
        {data.comments.map(comment=>(
          <>
            <Comment  content= {comment.content}
            username= {comment.user.username}
            createdAt= {comment.createdAt}
            score={comment.score} 
            userImage= {comment.user.image.png} 
            isReply={false}/>
            {comment.replies.length>0 ? 
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
        <AddCommentSection userImage={data.currentUser.image.png}/>
      </WrappComment>
    </Wrapp>
  );
}

export default App;
