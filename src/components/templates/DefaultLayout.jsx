import React from 'react'
import SideBar from '../organisms/SideBar'
import TopBar from '../organisms/TopBar'
import styles from './Default.module.css'

const DefaultLayout = ({children}) => {
    return (
        <div className="row　p-0 no-gutters">
            <TopBar />
            
            <SideBar />
            
            <div className="offset-2 col-10" style={{ paddingLeft:"10px", paddingTop:"74px"}}>
            {children}
            </div>
        </div>
    )
}

export default DefaultLayout
