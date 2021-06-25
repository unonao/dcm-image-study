import React from 'react';
import {provider,auth} from '../firebase';




export class Auth extends React.Component{
    state = {
      user: null,
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
        this.setState({ user })
      })
    }
    //componentDidMountはrenderが実行された後に行われる。データの受け渡しが可能な状態になったら下記のコードが実行されていく。
    //onAuthstateChangeでuserにログインしたユーザーの情報を与える

   login() {
      // [START auth_google_provider_scopes]
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // [END auth_google_provider_scopes]
      auth.languageCode = 'ja';

      // [START auth_google_provider_params]
      provider.setCustomParameters({
        "hd": "mnes.org",
      });
      // [END auth_google_provider_params]
      auth.signInWithRedirect(provider)
    }
    //signInWithRedirectでGoogleのログインページに接続して、Google プロバイダ オブジェクトのインスタンスを作成する。
    logout() {
      auth.signOut()
    };

  render(){
    return(
      <div>
      <div>
        <h1>dcm-image-study</h1>
      </div>
      <div className="Auth">
      {this.state.user ? (
         <h1 className="UserName">アカウント: {this.state.user && this.state.user.displayName}</h1>
         // displayNameでログインした人のGoogleアカウントに登録されている名前を表示する
      ) : (
         <h1 className="Name">ゲスト</h1>
　　　　　　//ログインしていない人用の表示
      )}
      {this.state.user ? (
        <button onClick={this.logout}>ログアウト</button>
　　　　　　//ユーザーがログインしている時はlogoutボタンを表示する
      ) : (
        <div>
            <button onClick={this.login}>googleでログイン</button>
            <div>※ログインにはGoogleアカウントが必要です。</div>
        </div>
　　　　　　//ユーザーがいない時はloginボタンを表示する
      )}
      </div>
      <div>
        <a href="/"><button>HOME</button></a>
        </div>
    </div>
    )
  }
}



