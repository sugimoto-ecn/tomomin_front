import React from 'react'
import './UserRegister.module.css'

const UserRegister = () => {
    return (
        <div>
                    <h3>あなたの情報を登録しましょう</h3>

                    <div className="col-5 mx-auto">
                        <label for="Input" class="form-label">ユーザー名</label>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="ユーザー名" aria-label="ユーザー名" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <br />
                    <div className="col-5 mx-auto">
                        <label for="Input" class="form-label">フリーコメント</label>
                        <input type="text" class="form-control" id="Input" />
                    </div>

                    <center><i className="fas fa-arrow-circle-right fa-3x"></i></center>
        </div>


    )
}

export default UserRegister
