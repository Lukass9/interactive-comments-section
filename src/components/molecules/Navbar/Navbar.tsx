import { useEffect, useState } from "react";
import styled from "styled-components"
import { LogedUser } from "../../../asserts/interfaces/interfaces";

const Wrapp = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    z-index: 100;
`
const LogoutButton = styled.a`
  cursor: pointer;
  :hover{
    color: #5457b6;
  }
`

interface Props {
    logoutUser: () => void;
}
export const Navbar: React.FC<Props> = ({ logoutUser }) => {
    const [currentUser, setCurrentUser] = useState('')
    useEffect(() => {

        const user = localStorage.getItem("auth")
        if(user){ 
        const parsedUser: LogedUser = JSON.parse(user) 
        setCurrentUser(parsedUser.currentUser.name)
        }

    }, [])

    return (
        <Wrapp>
            <p>Welcome <b> {currentUser} </b> </p>
            <LogoutButton onClick={logoutUser}>Logout</LogoutButton>
        </Wrapp>
    )
};