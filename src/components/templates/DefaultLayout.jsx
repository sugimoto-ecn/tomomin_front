import React from 'react'
import SideBar from '../organisms/SideBar'
import TopBar from '../organisms/TopBar'
import styles from './Default.module.css'

const DefaultLayout = ({children}) => {
    return (
        <div>
            <TopBar />
            <div className="col-2">
            <SideBar />
            </div>
            {children}
        </div>
    )
}

export default DefaultLayout
