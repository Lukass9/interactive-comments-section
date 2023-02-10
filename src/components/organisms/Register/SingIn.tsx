import styled from "styled-components"
import { auth, logInWithEmailAndPassword, db} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SetStateAction, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, doc, getDoc, getDocs } from "firebase/firestore";
import { FormWrapp, Input, Label, LabelWrapp, Wrapp } from "./register";
import { Button } from "../../atoms/submitButton/SubimtButton";
// import { FormWrapp, LabelWrapp, Wrapp } from "./register";
interface Props { }

export const SingIn: React.FC<Props> = props => {
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const collections = collection(db, "users") 
    const navigate = useNavigate()

    useEffect(() => {
        if(user) {
            const {email, uid} = user
            
            const getUser = async ()=>{
                try{
                    const q = query(collections, where("uid", "==", uid));
                    const doc = await getDocs(q)
                    const currentUser = doc.docs[0].data()
                    localStorage.setItem('auth', JSON.stringify({email, uid, currentUser}))
                    navigate("/")
                }catch(err){
                    console.log(err)
                }
              }
              getUser()
        }
    }, [user, loading])

    return ( 
        <Wrapp>
            <FormWrapp>
                <LabelWrapp>
                    <Input required type="text" name="Login" id="Email" value={email} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)} />
                    <Label htmlFor="Email"> Email </Label>
                </LabelWrapp>
                <LabelWrapp>
                    <Input required type="password" name="Password" id="Password" value={password} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)} />
                    <Label htmlFor="Password"> Password </Label>
                </LabelWrapp>
                <Button onClick={(e: { preventDefault: () => void; }) => {
                    e.preventDefault()
                    logInWithEmailAndPassword(email, password)
                    setEmail('')
                    setPassword('')
                }}> Sing in </Button>
                <p>You dont have an account yet? <Link to="/interactive-comments-section/SingUp">Sign up</Link>  now!</p>
            </FormWrapp>
        </Wrapp>
    )
};