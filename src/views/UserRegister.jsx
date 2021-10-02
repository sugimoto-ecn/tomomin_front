import React from 'react'
import './UserRegister.module.css'

const UserRegister = () => {
    return (
        <div>
            <html lang="ja">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                </head>

                <body>
                    <h3>あなたの情報を登録しましょう</h3>

                    <div class="col-5 mx-auto">
                        <label for="Input" class="form-label">ユーザー名</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="ユーザー名" aria-label="ユーザー名" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <br />
                    <div class="col-5 mx-auto">
                        <label for="Input" class="form-label">フリーコメント</label>
                        <input type="text" class="form-control" id="Input" />
                    </div>



                    <center><i class="fas fa-arrow-circle-right fa-3x"></i></center>


                </body>

            </html>
        </div>


    )
}

export default UserRegister
