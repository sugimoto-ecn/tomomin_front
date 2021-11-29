import React, {useState, useEffect, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../api';
import { UserContext } from '../providers/UserProvider';

const Login = () => {
    const token = localStorage.getItem('accessToken')
    
    const history = useHistory();
    if(token) history.push('/auth/user')
    const context = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const [errorMessage, setErrorMessage] = useState("");
    const loginFlow = async () => {
        if(!email||!password) return;
      
        if(password.length < 8){
            setErrorMessage('パスワードは8文字以上にしてください')
            return
        }
        const body = {
            email,
            password
        }
        const res = await login(body)
        console.log(res)
        if(res?.user?.accessToken){
            context.setUserInfo(res.user)
            localStorage.setItem('accessToken', res.user.accessToken)
            return history.push("/dashboard/sleeps");
        }
        if(res?.message){
            console.log('0000000')
            setErrorMessage(res.message)
        }
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{position: 'relative', 'top': '30px', 'left': '50px'}}>
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>

            <div class="container" style={{width: '35%'}}>
                <h3 style={{'margin-top': '110px', 'margin-bottom': '60px'}}>ログイン</h3>
                    <div class="mb-3" style={{'padding-bottom': '40px'}}>
                        <label for="exampleInputEmail1" class="form-label">メールアドレス</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                    </div>

                    <div class="mb-3" style={{'padding-bottom': '60px'}}>
                        <label for="exampleInputPassword1" class="form-label">パスワード</label>
                        {/* <input type="password" class="form-control" id="exampleInputPassword1" /> */}
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="text-center ">
                     {
                         errorMessage ? (
                            <p class="text-danger">*{errorMessage}</p>
                         ):""
                     }
                    </div>

                    <div class="text-center">
                        <button onClick={loginFlow} class="btn btn-white btn-outline-dark rounded-pill" style={{padding: '6px 50px'}}>ログイン</button>
                    </div>
                    <div class="text-center" style={{'padding-top': '50px'}}>
                        <a href="" class="text-dark">新規登録はこちら→</a>
                    </div>
            </div>
        </div>
    )
}

export default Login
