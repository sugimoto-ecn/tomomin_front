import React, {useContext} from 'react'
import "./Product.module.css"
import { useHistory } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'
import { getLoginUser } from '../api'

const Product = () => {
        const context = useContext(UserContext);
        const history = useHistory();
        const checkVerify = async () => {
            const res = await getLoginUser(context.userInfo.id)
            context.setUserInfo(res?.user)
            localStorage.setItem('accessToken', res.user.accessToken)

            if(res?.user?.product_verified){
                history.push('/dashboard/sleeps')
            }
        }

        return (
            <div>
                <div className='out'>
                
                    <div className='center'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <h1>暗証番号を製品に入力してください</h1>
                        <br></br>
                    <h1>{context.userInfo.product}</h1>
                    <br></br>
                    <h1 onClick={checkVerify}>→</h1>
                    </div>
                   
                    
                </div>
            </div>
        )
}

export default Product
