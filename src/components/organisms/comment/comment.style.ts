import styled from "styled-components"

export const Wrapp = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${(props: {isReply: boolean})=> props.isReply? '90vw' : '95vw' };
    background-color: #ffffff;
    padding: 20px;
    margin: 9.375px 2.5vw 0 0;
    border-radius: 10px;

    :first-child{
        margin-top: ${(props: {isReply: boolean}) => props.isReply? "0px" : "9.375px"};
    }
    
`
export const WrapRow = styled.div`
    display: flex;
    align-items: center;
`
export const WrapRowButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 5px;
`
export const UserName = styled.h1`
    font-size: 16px;
    margin: 0 5px;
`
export const CreatedAt = styled.p`
    color: #324152;
    margin: 0 5px;
`
export const Content = styled.p`
    color: #324152;
    line-height: 23px;
    letter-spacing: .5px;
`

export const ScoreWrapp = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props: { bg: string; }) => props.bg};
    border-radius: 10px;
`
export const WrapButton = styled(ScoreWrapp)`
    cursor: pointer;
`
export const EditScore = styled.p`
    padding: 0 15px;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 0;
    color: #c3c4ef;
    cursor: pointer;
    &:hover{
        color: #5457b6;
    }
`
export const Score = styled.div`
    display: flex;
    justify-content: center;
    color: #5457b6;
    font-weight: 700;
    min-width: 18px;
`
export const Reply = styled.div` 
    color: #5457b6;
    padding: 5px;
    font-weight: 700;
`
