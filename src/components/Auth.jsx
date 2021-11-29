import React ,{ useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import jwtDecode from "jwt-decode";
import { UserContext } from '../providers/UserProvider';

const Auth = (props) => {
   
    const history = useHistory();
    const context = useContext(UserContext)
    const token = localStorage.getItem('accessToken');
    console.log(token)
    if(!token) {
        history.push('/top')
        return props.children
    } 
    const decodedToken = jwtDecode(token);

    if(!context.userInfo?.id){
        context.setUserInfo(decodedToken)
    }   

    const isExpired = decodedToken?.exp * 1000 < Date.now()
    if(isExpired) {
        localStorage.removeItem('accessToken');
        history.push('/top')
        return props.children
    }
    console.log(decodedToken)
    if(!decodedToken.verify){
        history.push('/auth/product')
        return props.children
    }else{
        history.push('/dashboard/sleeps')
        return props.children
    }

    return props.children
        
}

export default Auth