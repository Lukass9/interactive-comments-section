import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Wrapp, WrappComment, WrappReplyComment } from "../../App.style";
import { useComment } from "../../asserts/helpers/hooks/useComment";
import { logout } from "../../firebase";
import { Navbar } from "../molecules/Navbar/Navbar";
import AddCommentSection from "../organisms/addCommentSection/AddCommentSection";
import Comment from "../organisms/comment/comment";
import { Modal } from "../organisms/modal/modal";
import Reply from "../organisms/reply/reply";

interface Props { }

export const Comments: React.FC<Props> = props => {
  const navigate = useNavigate()
  const [logedUser, setLogedUser] = useState(null) 
  const logoutUser = () =>{
    setLogedUser(null)
    logout()
  }

  useEffect(()=>{
    const auth = localStorage.getItem("auth")
    if(auth) setLogedUser(JSON.parse(auth))
    else navigate("/interactive-comments-section/SingIn")
  },[])

  useEffect(()=>{
    const auth = localStorage.getItem("auth")
    if(!auth) navigate("/interactive-comments-section/SingIn")
  }, [logedUser])

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
      <Modal open={isOpen} onClose={handleCloseModal} deleteItem={handleDeleteItem} />
      
      <Navbar 
        logoutUser={logoutUser}
        />
      <Wrapp>
        <WrappComment>
          {comments.map((comment) => (
            <>
              <Comment
                collectionId={comment.collectionId}
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
                  {comment.replies.map(repl => (
                    <Reply
                      collectionId={comment.collectionId}
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
            userImage={currentUser.image.png} />
        </WrappComment>
      </Wrapp>
    </>
  );
};