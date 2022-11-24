import styled, {} from 'styled-components';

export const Wrapp = styled.main `
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  `
export const WrappComment = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`
export const WrappReplyComment = styled.div`
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
