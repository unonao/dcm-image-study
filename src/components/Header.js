import { auth } from '../firebase';
import githubimg from './images/github.png'

const Log = () => {
    const user = auth.currentUser;
    if (user) {
        return (<div><p><a href="/auth">{user.displayName}</a></p></div>)
    } else {
        return (<p><a href="/log">ログイン</a></p>)
    }
}

export function Header() {
    return (
        <header className="head">
            <div className='head_box'>
                <div>
                    <a rel='noreferrer' href="https://github.com/unonao/dcm-image-study" target="_blank"><img class="img img_github" src={githubimg} width="50" height="50" alt="github"></img></a>
                </div>
                <div className='login'>
                    <a href="/auth">{Log()}</a>
                </div>
            </div>
            <div className="contents">
                <div className="content">
                    <a href="/">home</a>
                </div>
                <div className="content">
                    <a href="/basic/">lecture <span>▼</span></a>
                    <div className='sub-menu'>
                        <ul>
                            <li><a href="/basic/head/">頭部の正常構造と機能</a></li>
                            <li><a href="/basic/thorax/">胸部の正常構造と機能</a></li>
                            <li><a href="/basic/abdomen/">腹部の正常構造と機能</a></li>
                            <li><a href="/basic/pelvis/">骨盤部の正常構造と機能</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <a href="/practice_menu/" >practice</a>
                </div>
            </div>
        </header>
    );
}
