import React from 'react'
import styles from './TopBar.module.css'

const TopBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">  <img src="..." alt="サービス名の画像" width="30" height="30" /></a>
                    <form class="d-flex mr-auto">
                        {/*友達検索*/}
                        <input type="search" class="form-control me-sm-2" placeholder="友達を検索する" aria-label="検索..." />
                        <button type="submit" class="btn btn btn-outline-secondary flex-shrink-0">検索</button>
                    </form>
                    {/*ドロップダウンメニュー */}
                    <div className="d-flex ml-auto">
                        <div className="dropdown">
                            <a className="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user-cog fa-2x " style={{ color: '#666666' }}></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">メニュー1</a></li>
                                <li><a className="dropdown-item" href="#">メニュー2</a></li>
                                <li><a className="dropdown-item" href="#">メニュー3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar
