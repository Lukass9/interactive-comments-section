import styled from "styled-components"
import { auth, registerWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SetStateAction, useEffect, useState } from "react";
import { FormWrapp, Input, Label, LabelWrapp, Wrapp } from "./register";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/submitButton/SubimtButton";
interface Props { }

export const SingUp: React.FC<Props> = props => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log("user", user)
        console.log("loading", loading)
    }, [user, loading])

    return (
        <Wrapp>
            <FormWrapp>
                <LabelWrapp>
                    <Input required type="text" name="Name" id="Name" value={name} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)} />
                    <Label htmlFor="Name"> Name </Label>
                </LabelWrapp>
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
                    registerWithEmailAndPassword(name, email, password)
                    setName('')
                    setEmail('')
                    setPassword('')
                }}> Sing up </Button>
                <p> Have allready an account? <Link to="/SingIn">Sing in</Link></p>
            </FormWrapp>
        </Wrapp>
    )
};