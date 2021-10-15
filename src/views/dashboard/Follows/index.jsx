import React from 'react'
import styles from './Follows.module.css'
import DefaultLayout from '../../../components/templates/DefaultLayout'
// import { Switch } from 'react-neumorphic-toggle';
// console.log(Switch)
import Switch from "react-switch";


const Follows = () => {
    return (
        <div>
           <DefaultLayout>
                <>
                <div>
                    C-3
                    {/* <Switch /> */}
                    <Switch onChange={() => console.log('test')} checked={() => console.log("ijj")} />
                </div>
                </>
            </DefaultLayout>
        </div>
    )
}

export default Follows
