import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import githubimg from './images/github.png'


/* リロード時にログインが間に合ってない現象
https://qiita.com/hummer/items/65b296803f8b200838bd
*/
const Log = () => {
    const user = auth.currentUser;
    if (user) {
        return (<p><Link to="/login">{user.displayName}</Link></p>)
    } else {
        return (<p><Link to="/login">ログイン</Link></p>)
    }
}

export function Header() {
    return (
        <header className="head">
            <div className='head_box'>
                <div>
                    <a rel='noreferrer' href="https://github.com/unonao/dcm-image-study" target="_blank"><img className="img img_github" src={githubimg} width="50" height="50" alt="github"></img></a>
                </div>
                <div className='login'>
                    {Log()}
                </div>
            </div>
            <div className="contents">
                <div className="content">
                    <Link to="/">home</Link>
                </div>
                <div className="content">
                    <Link to="/lecture/">lecture <span>▼</span></Link>
                    <div className='sub-menu'>
                        <ul>
                            <li><Link to="/lecture/head">頭部の正常構造と機能</Link></li>
                            <li><Link to="/lecture/thorax">胸部の正常構造と機能</Link></li>
                            <li><Link to="/lecture/abdomen">腹部の正常構造と機能</Link></li>
                            <li><Link to="/lecture/pelvis">骨盤部の正常構造と機能</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Link to="/practice_menu" >practice</Link>
                </div>
            </div>
        </header>
    );
}
