import styled from "styled-components"
import ReactDOM from "react-dom"

const Wrapp = styled.div`
    display: flex;
    width: 80vw;
    border-radius: 10px;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 1000;
    background-color: #fff;
`
const WrappButton = styled.div`
    display: flex;
`

const OverlayStyle = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 1000;
`
const modalRoot = document.getElementById("modal") as HTMLElement;

interface Props {
    open: boolean,
    onClose: ()=> void,
}
export const Modal: React.FC<Props> = props => {
    if(!props.open) return null

    return ReactDOM.createPortal(
        <>
            <OverlayStyle/>
            <Wrapp>
                <h1>Delete comment</h1>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <WrappButton>
                    <button onClick={props.onClose}>NO, CANCEL</button>
                    <button>YES, DELETE</button>
                </WrappButton>
            </Wrapp>
        </>
        ,modalRoot
    )
};