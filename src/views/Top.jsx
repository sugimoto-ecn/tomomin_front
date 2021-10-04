import React from 'react';
import './Top.module.css';


const Top = () => {
    return ( 
        
        <center>
 
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
        <button type="button" className="btn btn-primary rounded-pill">Googleアカウントで登録</button>
        </div>
        <br/>
        <div className="box2">
        <button type="button" className="btn btn-primary rounded-pill">メールアドレスで登録</button>
        </div>
        <br/>
        <div className="box1">
        <button type="button" className="btn btn-primary rounded-pill">ログイン</button>
        </div>
        
        </center>
            
    )
}

export default Top
