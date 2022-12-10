import styled from "styled-components"

export const Wrapp = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90vw;
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5vw 0 0;
    border-radius: 10px;

    :first-child{
        margin-top: 0px;
    }
`
export const Content = styled.p`
    color: #324152;
    line-height: 23px;
    letter-spacing: .5px;
    word-break: break-word;
`
export const ReplyingTo = styled.p`
    display: inline;
    color: #5457b6;
    font-weight: bold;
    margin: 0;
    padding: 0;
`
