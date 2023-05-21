import styled from "styled-components";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { saveToken } from "../functions/auth.function";

export default function Signin() {
    const [textmsg, setTextmsg] = useState("")

    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })

    function login(e) {
        e.preventDefault()
        setLoading(true)
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/signin`, inputs)
            .then(res => saveToken(res.data.token))
            .catch(err => setTextmsg(err.response.data))
            .finally(() => setLoading(false))
    }

    console.debug("Entrou")

    return (
        <Main>
            <Navbar />
            <Logo />
            <Form onSubmit={login}>
                <p>{textmsg}</p>
                <Input placeholder="E-mail" type="email" value={inputs.email} setValue={(value) => setInputs({ ...inputs, email: value })} on={loading} />
                <Input placeholder="Senha" type="password" value={inputs.password} setValue={(value) => setInputs({ ...inputs, password: value })} on={loading} />
                <Button text="Entrar" on={loading} type="submit" />
            </Form>
        </Main>
    )
}
const Main = styled.div`
    width: 1000px;
    margin: auto;
`
const Form = styled.form`
    margin-bottom: 50px;
    p{
        text-align: center;
        color: red;
    }
    &>:last-child{
        margin-top: 30px;
    }
`
