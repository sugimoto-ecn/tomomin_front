import React from 'react'
import styles from './TopBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';


const TopBar = () => {
    return (
        <div className={`${styles.topBar}`}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="row">
                        <div className="col col-5">
                            <a class="navbar-brand" href="#"> <img src="..." alt="サービス名の画像" width="30" height="30" /></a>
                        </div>
                        <div className="col col-7">
                            <form class="d-flex ">
                                {/*友達検索*/}
                                <input type="search" class="form-control me-sm-2" placeholder="友達を検索する" aria-label="検索" />
                                <button type="submit" class="btn btn btn-outline-secondary flex-shrink-0">検索</button>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        {/* ドロップダウンメニュー */}
                        <Dropdown>
                            <Dropdown.Toggle variant="light">
                                <i className="fas fa-user-cog fa-2x" style={{ color: '#666666', padding: 'none !important' }}></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar
