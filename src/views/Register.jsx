import React from 'react'

const Register = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16" style={{position: 'relative', 'top': '30px', 'left': '50px'}}>
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>

            <div class="container" style={{width: '35%'}}>
                <h3 style={{'margin-top': '50px', 'margin-bottom': '60px'}}>新規登録</h3>

                <form>
                    <div class="mb-3" style={{'padding-bottom': '40px'}}>
                        <label for="exampleInputEmail1" class="form-label">メールアドレス</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3" style={{'padding-bottom': '0px'}}>
                        <label for="exampleInputPassword1" class="form-label">パスワード</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3" style={{'padding-bottom': '0px'}}>
                        <label for="exampleInputPassword1" class="form-label">パスワード（確認用）</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="text-center" style={{'padding-top': '30px'}}>
                        <a href="" class="text-dark">利用規約</a>
                    </div>
                
                    <div class="mb-3 form-check text-center" style={{padding: '20px 0px'}}>
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">利用規約に同意する</label>
                    </div>
               
                    <div class="text-center">
                        <button type="submit" class="btn btn-white btn-outline-dark rounded-pill" style={{padding: '6px 50px'}}>登録する</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Register
