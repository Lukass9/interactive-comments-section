import styled from "styled-components"


export const Wrapp = styled.section`
    position: relative;
    display: grid;
    grid-template: 1fr auto 1fr / 1fr 1fr 1fr 1fr 1fr;
    width: 95%;
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5% 0 0;
    border-radius: 10px;

    :first-child{
        margin-top: 9.375px;
    }
    @media (min-width: 1440px){
        grid-template: 1fr auto 0px / 10% 1fr 1fr 1fr 1fr;
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