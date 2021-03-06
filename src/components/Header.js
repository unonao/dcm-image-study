import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import githubimg from './images/github.png'


export class Header extends React.Component {
    state = {
        user: null,
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ user: user });
        })
    }

    render() {
        const Log = () => {
            const user = auth.currentUser;
            if (user) {
                return (<p><Link to="/login">{user.displayName}</Link></p>)
            } else {
                return (<p><Link to="/newlogin/">ログイン</Link></p>)
            }
        }
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
                <div>
                    <h1>画像診断勉強ツール（仮）</h1>
                </div>
                <div className="contents">
                    <div className="content">
                        <Link to="/">home</Link>
                    </div>
                    <div className="content">
                        <Link to="/lecture/">lecture</Link>
                    </div>
                    <div className="content">
                        <Link to="/practice_menu" >practice</Link>
                    </div>
                </div>
            </header>
        );
    }
}
