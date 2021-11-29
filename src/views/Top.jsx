import React from 'react';
import styles from './Top.module.css';
import { Link } from 'react-router-dom'


const Top = () => {
  console.log('top')
    return ( 
        <div> {/*消さない*/}
        <i class="icon fas fa-arrow-left fa-2x"></i>
        <center className={`${styles.test}`}>
 
        <div className="t1">
          <h1>一緒におやすみ</h1>
        </div>
        <div className="t2">
          <h2>~ともに実現する快適LIFE~</h2>
        </div>
            <br/>
        <div className="t3">
          <button className="btn rounded-pill btn-light">
            {/* <Link to="/auth/register" className="text-dark text-decoration-none">
            新規登録
            </Link> */}
          </button>
        </div>
            <br/> 
        
        
        <div className="box1">
        </div>
        <br/>
        <div className="box2">
            <Link to="/auth/register" className="text-dark text-decoration-none">
            メールアドレスで登録
            </Link>
        </div>
        <br/>
        <div className="box1">
            <Link to="/auth/login" className="text-dark text-decoration-none">
              ログイン
            </Link>
        </div>
        
        </center>
        </div> 
    )
}

export default Top
