import styled from "styled-components"

export const Wrapp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const FormWrapp = styled.form`  
   display: flex;
   box-shadow: 0px 0px 50px 0px rgba(196, 196, 231, 1);
   padding: 60px;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   border-radius: 15px;
   /* border: 1px solid red; */
`
export const LabelWrapp = styled.label`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 20px 0px;  
`
export const Label = styled.label` 
    position: absolute;
    font-size: 14px;
    color: darkgray;
    transform: translateY(2px) translateX(2px);
    transition: font-size, color, transform .15s linear;
    padding: 0 5px;
    background-color: transparent;
    z-index: 10;
`
export const Input = styled.input`
    :focus{
        & + Label {
            font-size: 18px;
            color: black;
            transform: translateY(-25px);
        }
        :valid{
        & + Label {
            color: black;
        }
        }
        :invalid{
            & + Label {
                color: black;
            }
        }
    }
    :valid{
        & + Label {
            font-size: 18px;
            transform: translateY(-25px);
            color: black;
        }
    }
`