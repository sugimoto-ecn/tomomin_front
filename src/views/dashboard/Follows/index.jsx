import React from 'react'
import styles from './Follows.module.css'
import DefaultLayout from '../../../components/templates/DefaultLayout'
// import { Switch } from 'react-neumorphic-toggle';
// console.log(Switch)
import Switch from "react-switch";
import FollowTable from "../../../components/organisms/FollowTable"


const Follows = () => {
    return (
        <div>
           <DefaultLayout>
                <>
                <div>
                    {/* C-3
                    <Switch onChange={() => console.log('test')} checked={() => console.log("ijj")} /> */}
                    <FollowTable />
                </div>
                </>
            </DefaultLayout>
        </div>
    )
}

export default Follows
