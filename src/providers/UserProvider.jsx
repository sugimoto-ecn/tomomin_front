import React, { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = (props) => {
    const [userInfo, setUserInfo] = useState({})
    const { children } = props;
    
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}