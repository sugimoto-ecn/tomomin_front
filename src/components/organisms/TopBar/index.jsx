import React from 'react'
import styles from './TopBar.module.css'

const TopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">

                        <img src="..." alt="サービス名の画像" width="30" height="30" />
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarForm" aria-controls="navbarForm" aria-expanded="false" aria-label="ナビゲーションの切替">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarForm">
                        <form className="d-flex ms-auto">
                            <input type="text" class="form-control me-2" placeholder="友達を探す" aria-label="検索..." />
                            <button type="submit" class="btn btn-outline-secondary flex-shrink-0">検索</button>

                            <i className="fas fa-user-cog fa-2x"></i>{/* 画像が表示されない*/}
                        </form>Ï
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default TopBar
