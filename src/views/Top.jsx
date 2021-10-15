import React from 'react';
import styles from './Top.module.css';


const Top = () => {
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
        新規登録
        </div>
            <br/> 
        
        
        <div className="box1">
        <button type="button" className="btn rounded-pill btn-light">Googleアカウントで登録</button>
        </div>
        <br/>
        <div className="box2">
        <button type="button" className="btn rounded-pill btn-light">メールアドレスで登録</button>
        </div>
        <br/>
        <div className="box1">
        <button type="button" className="btn rounded-pill btn-light">ログイン</button>
        </div>
        
        </center>
        </div> 
    )
}

export default Top
