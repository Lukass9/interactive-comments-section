import styled, {} from 'styled-components';
import Comment from './components/organisms/comment/comment';
import data from './asserts/data/data.json';

const Wrapp = styled.main `
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* min-height: 100vh; */
  justify-content: center;
  align-items: center;
  `
const CommentWrap = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`
const App: React.FC = () => {
  return (
    <Wrapp>
      <CommentWrap>
        {data.comments.map(comment=>(
          <>
            <Comment  content= {comment.content}
            username= {comment.user.username}
            createdAt= {comment.createdAt}
            score={comment.score} 
            userImage= {comment.user.image.png} 
            isReply={false}/>
            {comment.replies.map(repl=>(
              <Comment  content= {repl.content}
              username= {repl.user.username}
              createdAt= {repl.createdAt}
              score={repl.score} 
              userImage= {repl.user.image.png} 
              isReply={true}/>
            ))}
          </>
        ))}
      </CommentWrap> 
    </Wrapp>
  );
}

export default App;
