import "./App.css"

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

// Routes
import ExamplePageBasic from './components/ExamplePageBasic.js';
import Viewer from './components/ExamplePageViewer.js';

//images
import githubimg from './components/images/github.png'
import mnesimg from './components/images/logo_mnes.jpg'
import laimeimg from './components/images/logo_white.png'
import mnistimg from './components/images/MNiST.png'
import image1 from './image1.jpg'
import headimg1 from './components/images/img_mri.png'
import lungimg1 from './components/images/lung_CT.jpg'
import abdimg1 from './components/images/abdomine_CT.jpg'

// cornerstone tools
import initCornerstone from './initCornerstone.js';
import {auth} from './firebase';
import {Auth} from './components/userAuth';
import { useAuthContext,AuthProvider } from './AuthContext';



// cornerstone tools の初期化
initCornerstone();

/**
 *
 *
 * @param {*} { href, text }
 * @returns
 */
const PrivateRoute = ({render, ...rest }) => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      render={
        user
        ? render
        : props => (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};


const Log= ()=> {
 const user = auth.currentUser;

if (user) {
  return(<div><p>{user.displayName}</p></div>)
} else {
  return(<p>ログイン</p>)
 }
}

/**
 *
 *
 * @param {*} { title, url, text, screenshotUrl }
 * @returns
 */
function ExampleEntry({ title, url, text, target=undefined }) {
  return (
    <div>
      <p><span className="btn_txt">{text}</span></p>
      <h5>
        <Link to={url} target={target}><button className="row body_btn">{title}</button></Link>
      </h5>
    </div>
  );
}


export function Header() {
  return(
    <header className="head">
      <div className='head_box'>
        <div>
          <a rel='noreferrer' href="https://github.com/unonao/dcm-image-study" target="_blank"><img class="img img_github"  src={githubimg} width="50" height="50" alt="github"></img></a>
        </div>
        <div className='login'>
          <a href="/auth">{Log()}</a>
        </div>
      </div>
      <div className="contents">
        <div className= "content">
          <a href="/">home</a>
        </div>
        <div className= "content">
          <a href="/basic/">lecture <span>▼</span></a>
          <div className='sub-menu'>
           <ul>
             <li><a href="/basic/head/">頭部の正常構造と機能</a></li>
             <li><a href="/basic/thorax/">胸部の正常構造と機能</a></li>
             <li><a href="/basic/abdomen/">腹部の正常構造と機能</a></li>
            </ul>
          </div>
        </div>
        <div className= "content">
          <a href="/grid/" >practice</a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
    return(
    <footer>
      <div className = "foots">
        <div className="foot">関連団体</div>
        <div className="link_imgs">
          <div className= 'link_img'>
            <a rel="noreferrer" href="https://mnes.life/" target="_blank"><img class="img" border="0" width="250" height="125" src={mnesimg} alt="MNES"></img></a>
          </div>
          <div className= 'link_img'>
            <a rel="noreferrer" href="https://laime-ml.github.io/?fbclid=IwAR2ETxkW4ZUq9oRqd7Mn04ffzviU7GYSrS3Ho3SzAsgkB5wmxdrhR8QzLi4" target="_blank"><img class="img" border="1" width="330" height="125" src={laimeimg} alt="LAIME"></img></a>
          </div>
          <div className= 'link_img'>
            <a rel="noreferrer" href="https://sites.google.com/mnes.org/mnist-official/home" target="_blank"><img class="img" width="240" height="125" src={mnistimg} alt="MNiST"></img></a>
          </div>
        </div>
        <div class="button">
         <button class = "btn">CONTACT</button>
        </div>
        <div class = "bottom">©MNiST</div>
      </div>
    </footer>
    )
};

function Index() {
  const examples1 = {
    title: '進む',
    url: '/basic',
    text: '解説ページへ',
  };
  const examples2 = {
    title: '進む',
    url: '/grid',
    text: '演習ページへ',
  };
  // MOST COMPLEX: (mini viewer)
  // - (mini viewer) Dynamic Grid + Global Tool Sync + Changing Tools
  // Misc. Other Props: (just list them all, prop-types, basic comments for docs)
  // - onElementEnabled (escape hatch)
  // - eventListeners
  // - isStackPrefetchEnabled
  // - react-resize-observer

  return (
    <div className="container">
      <div>
        {Header()}
      </div>
      <div className="row" >
        <h1 className="row_head">画像診断勉強ツール「dcm-image-study」へようこそ！</h1>
      </div>
      <div>
        <img className="row_head_img" src={image1} alt='background'></img>
      </div>
      <div className="row">
        <h1 className="row_body">見る人から、診る人へ</h1>
        <div className="row_body">
          <h2 className="thema"><span className='under'>使いやすいツールを目指して</span></h2>
          <div className="row_body_sentense">
            <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。
              医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。
              解説はプロの放射線診断科医が作成しています。
              このツールを通して、普段放射線診断医がどのように鑑別を行っているか垣間見ることができるでしょう。
              今こそ自分のスキルアップをしてみませんか？</p>
          </div>
        </div>
        <div className="row_body">
          <h2 className="thema"><span className='under'>厳選された症例と洗練された解説</span></h2>
          <div className="row_body_sentense">
            <p>このツールで使用している症例は、医学生と医師が話し合いを重ね、学習効果の高いものばかりを扱っています。
              １つの症例から多くのことを吸収できるはずです。
              解説は、放射線診断医監修のもと医学生で作成しています。
              医学生目線で作成していますので、本当に知りたかった部分がここで分かるかもしれません。</p>
          </div>
          {ExampleEntry(examples1)}
        </div>
        <div className="row_body">
          <h2 className="thema"><span className='under'>すぐに、実戦</span></h2>
          <div className="row_body_sentense">
            <p>画像診断は、ただ見ていればできるようになるという甘いものではありません。
              できる人の話を聞きながら、自ら手を動かし、考えながら学習をすることで習得していくものです。
              そこで、このツールでは、ビューワーを用いながら実際に診断の練習ができるような形にしました。
              解説ページと合わせて実戦練習を積むことでより高い学習効果が期待できます。</p>
          </div>
          {ExampleEntry(examples2)}
        </div>
      </div>
      <div>
        {Footer()}
      </div>
    </div>
  );
}

function explaination(){
  return(
  <div>
    <div>
      {Header()}
      </div>
    <div className='explanation'>
    <div className="exp">
        <h2>画像診断</h2>
        <div className="exp_row">
          <h3>CT</h3>
          <p>この章ではCTに関する基本的</p>
          <p>な事項についてまとめていき</p>
          <p>ます。</p>
          {ExampleEntry({title:'GO',url:'/basic/ct',})}
        </div>
        <div className="exp_row">
          <h3>MRI</h3>
          <p>この章ではMRIに関する基本的</p>
          <p>な事項についてまとめていき</p>
          <p>ます。</p>
          {ExampleEntry({title:'GO',url:'/basic/mri',})}
        </div>
        <div className="exp_row">
          <h3>X線</h3>
          <p>この章ではX線に関する基本的</p>
          <p>な事項についてまとめていき</p>
          <p>ます。</p>
          {ExampleEntry({title:'GO',url:'/basic/x_ray',})}
        </div>
      </div>
      <div className="exp">
        <h2>頭部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={headimg1} alt='headimg'></img>
          <h3>頭部の正常解剖と構造</h3>
          <p>この章では頭部の正常画像を</p>
          <p>もとに、頭部の解剖学的構造</p>
          <p>を理解しながら頭部診断時の</p>
          <p> ルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/head',})}
        </div>
      </div>
      <div className="exp">
        <h2>胸部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={lungimg1} alt='thoraximg'></img>
          <h3>胸部の正常解剖と構造</h3>
          <p>この章では胸部の正常画像を</p>
          <p>もとに、胸部の解剖学的構造</p>
          <p>を理解しながら胸部診断時の</p>
          <p>ルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/thorax',})}
        </div>
      </div>
      <div className="exp">
        <h2>腹部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={abdimg1} alt='abdoimg'></img>
          <h3>腹部の正常解剖と構造</h3>
          <p>この章では頭部の正常画像を</p>
          <p>もとに、腹部の解剖学的構造</p>
          <p>を理解しながら頭部診断時の</p>
          <p>ルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/abdomen',})}
        </div>
      </div>
    </div>
    <div>
      {Footer()}
      </div>
  </div>
  );
}

function practice_menu(){
  return(
  <div>
    <div>
      {Header()}
      </div>
    <div className='explanation'>
      <div className="exp">
        <h2>頭部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={headimg1}></img>
          <h3>頭部MRI1</h3>
          <p>頭部MRI part1</p>
          {ExampleEntry({title:'GO',url:'/grid/viewer',target:'_blank'})}
        </div>
      </div>
      <div className="exp">
        <h2>胸部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={lungimg1}></img>
          <h3>胸部CT1</h3>
          <p>胸部CT part1</p>
          {ExampleEntry({title:'GO',url:'/grid/viewer',target:'_blank'})}
        </div>
      </div>
      <div className="exp">
        <h2>腹部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={abdimg1}></img>
          <h3>腹部CT1</h3>
          <p>腹部CT part1</p>
          {ExampleEntry({title:'GO',url:'/grid/viewer',target:'_blank'})}
        </div>
      </div>
    </div>
    <div>
      {Footer()}
      </div>
  </div>
  );
}


/**
 *
 *
 * @param {*} props
 * @returns
 */
function Example(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}





function AppRouter() {
  const ct = () => Example({ children: <ExamplePageBasic myprop='ct'/> });
  const head = () => Example({ children: <ExamplePageBasic myprop='head'/> });
  const auth = () => Example({ children:  <AuthProvider>
                              <div style={{ margin: '2em' }}>
                                      <Auth />
                               </div>
                                          </AuthProvider> });
  const thorax = () => Example({ children: <ExamplePageBasic myprop='thorax'/> });
  const abdomen = () => Example({ children: <ExamplePageBasic myprop='abdomen'/> });
  const viewer = () => Example({ children: <Viewer myprop='stack'/> });


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Index} />
          <Route exact path="/auth/" render={auth} />
          <PrivateRoute exact path="/basic/" render={explaination} />
          <PrivateRoute exact path="/basic/ct/" render={ct} />
          <PrivateRoute exact path="/basic/head/" render={head} />
          <PrivateRoute exact path="/basic/thorax/" render={thorax} />
          <PrivateRoute exact path="/basic/abdomen/" render={abdomen} />
          <PrivateRoute exact path="/grid/" render={practice_menu} />
          <PrivateRoute exact path="/grid/viewer" render={viewer} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
