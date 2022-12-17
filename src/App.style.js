import styled from 'styled-components';

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
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (min-width: 1440px){
    /* align-items: center; */
    width: 50%;
    max-width: 725px;
  }
`
export const WrappReplyComment = styled.div`
  position: relative;
  margin-top: 9.375px;
   &::before{
        content: " ";
        position: absolute;
        top: 0;
        /* left: -5vw; */
        left: 2.5vw;
        width: 1px;
        height: 100%;
        background-color: hsl(239, 57%, 85%)
    }
    @media (min-width: 1440px){
    /* align-items: center; */
      width: 93%;
        &::before{
          left: 1%;
        }
    }
` 
