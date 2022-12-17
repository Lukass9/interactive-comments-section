import styled from "styled-components"
import ReactDOM from "react-dom"

const Wrapp = styled.div`
    display: flex;
    width: 80vw;
    max-width: 300px;
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
    width: 100%;
    justify-content: space-around;
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
const H1 = styled.h1 `
    font-size: 20px;
    color: #67727e;
`
const P = styled.p`
    color: #67727e;
    font-size: 14px;
    line-height: 20px;
`
const Button = styled.button`
    padding: 10px 15px;
    color: #fff;
    background-color: ${(props:{color: string}) =>props.color};
    border: none;
    border-radius: 5px;
`

const modalRoot = document.getElementById("modal") as HTMLElement;

interface Props {
    open: boolean,
    onClose: ()=> void,
    deleteItem: ()=> void,
}
export const Modal: React.FC<Props> = props => {
    if(!props.open) return null

    return ReactDOM.createPortal(
        <>
            <OverlayStyle/>
            <Wrapp>
                <H1>Delete comment</H1>
                <P>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</P>
                <WrappButton>
                    <Button color="#67727e" onClick={props.onClose}>NO, CANCEL</Button>
                    <Button color="#ed6468" onClick={props.deleteItem}>YES, DELETE</Button>
                </WrappButton>
            </Wrapp>
        </>
        ,modalRoot
    )
};