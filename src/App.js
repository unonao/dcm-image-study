import "./App.css"

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Routes
import ExamplePageBasic from './components/ExamplePageBasic.js';
import ExamplePageGrid from './components/ExamplePageGrid.js';

//images
import image1 from './image1.jpg'
import headimg1 from './components/images/img_mri.png'
import lungimg1 from './components/images/lung_CT.jpg'
import abdimg1 from './components/images/abdomine_CT.jpg'

// cornerstone tools の初期化
import initCornerstone from './initCornerstone.js';
initCornerstone();

/**
 *
 *
 * @param {*} { href, text }
 * @returns
 */

function LinkOut({ href, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

/**
 *
 *
 * @param {*} { title, url, text, screenshotUrl }
 * @returns
 */
function ExampleEntry({ title, url, text, screenshotUrl }) {
  return (
    <div>
      <p><span className="btn_txt">{text}</span></p>
      <h5>
        <Link to={url}><button className="row body_btn">{title}</button></Link>
      </h5>
    </div>
  );
}

function Index() {
  const style = {
    minHeight: '512px',
  };

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
      <div className="row" >
        <h1 className="row_head">画像診断勉強ツール「dcm-image-study」へようこそ！</h1>
      </div>
      <div>
        <img className="row_head_img" src={image1}></img>
      </div>
      <div className="row">
        <h1 className="row_body">見る人から、診る人へ</h1>
        <div className="row_body">
          <h2 className="thema"><span className='under'>使いやすいツールを目指して</span></h2>
          <div className="row_body_sentense">
            <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
            <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
            <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
            <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
            <p>スキルアップをしてみませんか？</p>
          </div>
        </div>
        <div className="row_body">
          <h2 className="thema"><span className='under'>厳選された症例と洗練された解説</span></h2>
          <div className="row_body_sentense">
            <p>このツールで使用している症例は、医学生と医師が話し合いを重ね、学習効果の高</p>
            <p>いものばかりを扱っています。１つの症例から多くのことを吸収できるはずです。</p>
            <p>解説は、放射線診断医監修のもと医学生で作成しています。医学生目線で作成して</p>
            <p>いますので、本当に知りたかった部分がここで分かるかもしれません。</p>
          </div>
          {ExampleEntry(examples1)}
        </div>
        <div className="row_body">
          <h2 className="thema"><span className='under'>すぐに、実戦</span></h2>
          <div className="row_body_sentense">
            <p>画像診断は、ただ見ていればできるようになるという甘いものではありません。でき</p>
            <p>る人の話を聞きながら、自ら手を動かし、考えながら学習をすることで習得していく</p>
            <p>ものです。そこで、このツールでは、ビューワーを用いながら実際に診断の練習がで</p>
            <p>きるような形にしました。解説ページと合わせて実戦練習を積むことでより高い学習</p>
            <p>効果が期待できます。</p>
          </div>
          {ExampleEntry(examples2)}
        </div>
      </div>
    </div>
  );
}



function explaination(){
  return(
    <div className='explanation'>
      <div className="exp">
        <h2>頭部</h2>
        <div className="exp_row">
          <img className="exp_row_img" src={headimg1}></img>
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
          <img className="exp_row_img" src={lungimg1}></img>
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
          <img className="exp_row_img" src={abdimg1}></img>
          <h3>腹部の正常解剖と構造</h3>
          <p>この章では頭部の正常画像を</p>
          <p>もとに、腹部の解剖学的構造</p>
          <p>を理解しながら頭部診断時の</p>
          <p>ルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/abdomen',})}
        </div>
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
  const head = () => Example({ children: <ExamplePageBasic myprop='head'/> });
  const thorax = () => Example({ children: <ExamplePageBasic myprop='thorax'/> });
  const abdomen = () => Example({ children: <ExamplePageBasic myprop='abdomen'/> });
  const grid = () => Example({ children: <ExamplePageGrid /> });


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/basic/" render={explaination} />
        <Route exact path="/basic/head/" render={head} />
        <Route exact path="/basic/thorax/" render={thorax} />
        <Route exact path="/basic/abdomen/" render={abdomen} />
        <Route exact path="/grid/" render={grid} />
      </Switch>
    </Router>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
