import React from 'react';
import styles from './Top.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



const Top = () => {
  console.log('top')
    return ( 
        <div> {/*消さない*/}
        {/* <i class="icon fas fa-arrow-left fa-2x"></i> */}
        <center className={`${styles.test}`}>
         
 
        <div className={`${styles.t1}`}>
          <h1>一緒におやすみ</h1>
        </div>
        <div className={`${styles.t2}`}>
          <h2>〜 ともに実現する快適LIFE 〜</h2>
        </div>
            <br/>
        <div className="t3">
             {/* <button className="btn rounded-pill btn-light">
             <Link to="/auth/register" className="text-dark text-decoration-none">
            新規登録
            </Link> 
          </button> */} 
        </div>
            <br/> 
        
        <br/>
        <div className={`${styles.box1}`}>
            <Link to="/auth/register" className="text-dark text-decoration-none">
            <Button variant="outline" color="primary" size="large">
        メールアドレスで登録
      </Button>
            </Link>
        </div>
        <br/>
        <div className={`${styles.box2}`}>
            <Link to="/auth/login" className="text-dark text-decoration-none">
            <Button variant="outline" color="primary" size="large">
              ログイン
              </Button>
            </Link>
        </div>
        
        </center>
        </div> 
    )
}

export default Top
