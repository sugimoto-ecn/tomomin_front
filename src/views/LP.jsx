import React from 'react'
import styles from './LP.module.css'



const LP = () => {
    console.log("LP")
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="row">
                        <div className="col col-5">
                            <a class="navbar-brand" href="#"> <img src="..." alt="サービス名の画像" width="30" height="30" /></a>
                        </div>
                        </div>

                         <div className="row justify-content-end">
<button type="button" class="btn page-link link-dark">ログイン</button>
                    </div>
                    </div>
                    </nav>
                    <a class="navbar-brand" className={`${styles.test}`} href="#"> <img src="logo111.png" alt="画像" className={`${styles.test}`} /></a>
                    <h1>
                        概要
        </h1>
       
        </div>
    )
}


export default LP

