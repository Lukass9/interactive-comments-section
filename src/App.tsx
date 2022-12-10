import Comment from './components/organisms/comment/comment';
import AddCommentSection from './components/organisms/addCommentSection/AddCommentSection';
import { Wrapp, WrappComment, WrappReplyComment } from './App.style';
import { useComment } from './asserts/helpers/hooks/useComment';
import Reply from './components/organisms/reply/reply';
import { Modal } from './components/organisms/modal/modal';

// TODO - dodaj Intl.RelativeTimeFormat do odmierzania czasu w komentarzach

const App: React.FC = () => {
  const { comments, 
          currentUser, 
          timestamp,
          handleDeleteItem,  
          handleChangeReplying, 
          newReplying, 
          handleOpenModal, 
          handleToggleUpdateMode,
          handleChangContent,
          handleReplying, 
          handleChangeScore, 
          handleToggleReplying, 
          isOpen, 
          handleCloseModal, 
          singleComment, 
          handleSetSingleComment, 
          handleAddComment } = useComment()
  return (
    <>
    <Modal open={isOpen} onClose={handleCloseModal} deleteItem={handleDeleteItem}/>

    <Wrapp>
      <WrappComment>
        {comments.map((comment)=>(
          <>
            <Comment
              arr={comment}
              timestamp={timestamp}
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
                  timestamp={timestamp}
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