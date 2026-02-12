import LoginCom from "../components/LoginCom"

function Login() {
    return <LoginCom route="/api/token/" method="login" />
}

export default Login