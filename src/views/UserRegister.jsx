import React, {useState, useEffect, useContext} from 'react'
import './UserRegister.module.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'
import { updateUser, getLoginUser } from '../api'

const UserRegister = () => {
    const context = useContext(UserContext);  
    const history = useHistory(); 
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleChangeName = (val) => {
        if(val.length >= 200){
            setError("文字数が多いです")
            return
        }
        setName(val)
    }

    const handleChangeMessage = (val) => {
        if(val.length >= 200){
            setError("文字数が多いです")
            return
        }
        setMessage(val)
    }

    const update = async () => {
        try{
            if(!name?.length) return

            const body = {
                name,
                message
            }
            const update = await updateUser(context.userInfo.id, body)
            const res = await getLoginUser(context.userInfo.id)
            console.log(res)
            context.setUserInfo(res?.user)
            localStorage.setItem('accessToken', res.user.accessToken)

            history.push('/auth/product')
        }catch(err){
            console.log(err)
            setError("エラーが発生しました")
        }
    }

    useEffect(() => {
        console.log(context.userInfo)
        setName(context.userInfo.name)
        setMessage(context.userInfo.message)
    }, [])

    return (
        <div>
                    <h3>あなたの情報を登録しましょう</h3>

                    <div className="col-5 mx-auto">
                        <label for="Input" class="form-label">ユーザー名</label>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input 
                            value={name}
                            onChange={(e) => handleChangeName(e.target.value)}
                            type="text" class="form-control" placeholder="ユーザー名" aria-label="ユーザー名" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <br />
                    <div className="col-5 mx-auto">
                        <label for="Input" class="form-label">フリーコメント</label>
                        <input 
                        value={message}
                        onChange={(e) => handleChangeMessage(e.target.value)}
                        type="text" class="form-control" id="Input" />
                    {
                         error ? (
                            <p class="text-danger">*{error}</p>
                         ):""
                     }
                    </div>

                    <center onClick={update}><i className="fas fa-arrow-circle-right fa-3x"></i></center>
        </div>


    )
}

export default UserRegister
