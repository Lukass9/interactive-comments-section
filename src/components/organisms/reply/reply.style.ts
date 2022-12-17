import styled from "styled-components"

export const WrappForReply = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const Wrapp = styled.section`
    display: grid;
    grid-template: 1fr auto 1fr / 1fr 1fr 1fr 1fr 1fr;
    width: 90%;
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5% 0 auto;
    border-radius: 10px;

    :first-child{
        margin-top: 0px;
    }

    @media (min-width: 1440px){
        grid-template: 1fr auto 0 / 10% 1fr 1fr 15% 15%;
    }
`
export const Content = styled.p`
    grid-area: 2/1/2/6;
    color: #324152;
    line-height: 23px;
    letter-spacing: .5px;
    word-break: break-word;
    @media (min-width: 1440px){
        grid-area: 2/2/4/6;
    }
`
export const ReplyingTo = styled.p`
    display: inline;
    color: #5457b6;
    font-weight: bold;
    margin: 0;
    padding: 0;
`
