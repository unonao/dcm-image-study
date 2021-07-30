import "./App.css"

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

// Routes
import { basicDiagnosis } from "./components/Diagnostic_imaging";
import ExamplePageBasic from './components/ExamplePageBasic.js';
import Viewer from './components/ExamplePageViewer.js';
import Head from './components/Head';
import Pelvis from "./components/Pelvis";

//images
import githubimg from './components/images/github.png'
import mnesimg from './components/images/logo_mnes.jpg'
import laimeimg from './components/images/logo_white.png'
import mnistimg from './components/images/MNiST.png'
import image1 from './components/images/28774EB8-7CDC-4656-9D36-406A7B4F1AEC.png'
import headimg from './components/images/Head.jpg'
import thoraximg from './components/images/Thorax.jpg'
import abdomenimg from './components/images/Abdomen.jpg'
import pelvisimg from './components/images/Pelvis.jpg'

// cornerstone tools
import initCornerstone from './initCornerstone.js';
import {auth} from './firebase';
import {Auth,SubAuth} from './components/userAuth';
import { useAuthContext,AuthProvider } from './AuthContext';

// storage
import {img_705601001,quiz_705601001,text_705601001,img_701401002,quiz_701401002,text_701401002,
  img_707712001,quiz_707712001,text_707712001,img_700800001,quiz_700800001,text_700800001,img_707711002,quiz_707711002,text_707711002,} from './components/Practice';
import {Quiz,ViewerQuiz,ViewerQuizArrowAnnotate,ViewerQuizFreehand} from './components/ExamplePageQuiz';



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
                pathname: "/log",
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
  return(<div><p><a href="/auth">{user.displayName}</a></p></div>)
} else {
  return(<p><a href="/log">ログイン</a></p>)
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
             <li><a href="/base/">基本事項</a></li>
             <li><a href="/basic/head/">頭部の正常構造と機能</a></li>
             <li><a href="/basic/thorax/">胸部の正常構造と機能</a></li>
             <li><a href="/basic/abdomen/">腹部の正常構造と機能</a></li>
             <li><a href="/basic/pelvis/">骨盤部の正常構造と機能</a></li>
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
         <button class = "btn"><a rel="noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLScjbavDL6OZIceMCKTC1tIolA6jvbM-em4QBX9kvKcbeLCfUg/viewform' target="_blank">
           CONTACT</a></button>
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
        <h2>頭部</h2>
        <div>
          <div className="exp_row">
          <img className="exp_row_img" src={headimg} alt='headimg'></img>
          <h3>頭部の正常解剖と構造</h3>
          <p>この章では頭部の正常画像をもとに、
              頭部の解剖学的構造を理解しながら頭部診断時のルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/head',})}
          </div>
        </div>
      </div>
      <div className="exp">
        <h2>胸部</h2>
        <div>
          <div className="exp_row">
          <img className="exp_row_img" src={thoraximg} alt='thoraximg'></img>
          <h3>胸部の正常解剖と構造</h3>
          <p>この章では胸部の正常画像をもとに、
            胸部の解剖学的構造を理解しながら胸部診断時のルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/thorax',})}
          </div>
        </div>
      </div>
      <div className="exp">
        <h2>腹部</h2>
        <div>
        <div className="exp_row">
          <img className="exp_row_img" src={abdomenimg} alt='abdoimg'></img>
          <h3>腹部の正常解剖と構造</h3>
          <p>この章では腹部の正常画像をもとに、
            腹部の解剖学的構造を理解しながら腹部診断時のルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/abdomen',})}
        </div>
        </div>
      </div>
      <div className="exp">
        <h2>骨盤部</h2>
        <div>
        <div className="exp_row">
          <img className="exp_row_img" src={pelvisimg} alt='pelvisimg'></img>
          <h3>骨盤部の正常解剖と構造</h3>
          <p>この章では骨盤部の正常画像をもとに、
            骨盤部の解剖学的構造を理解しながら骨盤部診断時のルーティンを確認します。</p>
          {ExampleEntry({title:'GO',url:'/basic/pelvis',})}
        </div>
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
    <table>
    <tr>
      <th>　　</th>
      <th>部位</th>
      <th>Level A</th>
      <th>Level B</th>
      <th>Level C</th>
      <th>Level D</th>
      <th>Level E</th>
    </tr>
    <tr>
      <th class="icon bird"><img className="exp_row_img" src={headimg} alt='頭'></img></th>
      <th>頭部</th>
      <td onClick ={()=>{window.open('/grid/705601001','_blank')}}>705601001</td>
      <td onClick ={()=>{window.open('/grid/701401002','_blank')}}>701401002</td>
      <td onClick ={()=>{window.open('/grid/707712001','_blank')}}>707712001</td>
      <td onClick ={()=>{window.open('/grid/700800001','_blank')}}>700800001</td>
      <td onClick ={()=>{window.open('/grid/707711002','_blank')}}>707711002</td>
    </tr>
    <tr>
      <th class="icon whale"><img className="exp_row_img" src={thoraximg} alt='胸'></img></th>
      <th>胸部</th>
      <td>0400601001</td>
      <td>0403911001</td>
      <td>0403501001</td>
      <td>0400112001</td>
      <td>0407801001</td>
    </tr>
    <tr>
      <th class="icon crab"><img className="exp_row_img" src={abdomenimg} alt='腹'></img></th>
      <th>腹部</th>
      <td>　　</td>
      <td>　　</td>
      <td>　　</td>
      <td>　　</td>
      <td>　　</td>
    </tr>
    <tr>
      <th class="icon whale"><img className="exp_row_img" src={pelvisimg} alt='胸'></img></th>
      <th>骨盤部</th>
      <td>0901012003</td>
      <td>0901101001</td>
      <td>0901702001</td>
      <td>0808201002</td>
      <td>0807912001</td>
    </tr>
    </table>
    </div>
    <div className='practice_sample'>
      <p><a href="/grid/viewer" target="_blank">サンプル</a></p>
      </div>
    <div>
      {Footer()}
      </div>
  </div>
  );
}

const stack1 = [
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.7.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.8.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.12.dcm',
];

const stack2 = [
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
  'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
];

const sample_list = [stack1,stack2]
const quiz1 = 'img=1層で大動脈弓を丸く囲ってください。'
const quiz2 = 'img=4層で左側の肺を四角く囲んでください。'
const quiz3 = '心原性脳塞栓症の原因として最も多いものはどれか'
const quiz4 = 'img=2層で胸骨の輪郭をなぞってください。'
const quiz5 = 'img=3層で病変部を指摘し、病変名を入れてください。'
const quiz_list = [<ViewerQuiz num={0} text={quiz1} data={stack1} tooltype="CircleRoi" ans_st_x={243} ans_st_y={352} ans_end_x={299} ans_end_y={286}></ViewerQuiz>,
  <ViewerQuiz num={3} text={quiz2} data={stack1} tooltype="RectangleRoi" ans_st_x={273} ans_st_y={272} ans_end_x={378} ans_end_y={362}></ViewerQuiz>,
  <Quiz answer_num={3} text={quiz3} answer_list={['心筋梗塞','心筋症','非弁膜症性心房細動','人工弁','洞不全症候群']}></Quiz>,
  <ViewerQuizFreehand num={1} text={quiz4} data={stack1} ans_st_x={222} ans_st_y={258} ans_end_x={290} ans_end_y={288}></ViewerQuizFreehand>,
  <ViewerQuizArrowAnnotate num={2} text={quiz5} data={stack1} ans_st_x={264} ans_st_y={351} ans_end_x={370} ans_end_y={451} ans_text='胸水'></ViewerQuizArrowAnnotate>]

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
  const head = () => Example({ children: <Head/> });
  const auth = () => Example({ children:
                              <div style={{ margin: '2em' }}>
                                      <Auth />
                               </div> });
  const subauth = () => Example({ children: <div style={{ margin: '2em' }}>
                                                    <SubAuth/>
                                             </div>});
  const thorax = () => Example({ children: <ExamplePageBasic myprop='thorax'/> });
  const abdomen = () => Example({ children: <ExamplePageBasic myprop='abdomen'/> });
  const pelvis = () => Example({ children: <Pelvis/> });
  const viewer = () => Example({ children: <Viewer myprop='stack' img_list={sample_list} text={<p>精査</p>} quiz_list={quiz_list} patientInfo={['999999999','63','男性']}/> });
  const head705601001 = () => Example({ children: <Viewer img_list={img_705601001} text={text_705601001} quiz_list={quiz_705601001} patientInfo={['705601001','80代','男性']}/> });
  const head701401002 = () => Example({ children: <Viewer img_list={img_701401002} text={text_701401002} quiz_list={quiz_701401002} patientInfo={['701401002','60代','男性']}/> });
  const head707712001 = () => Example({ children: <Viewer img_list={img_707712001} text={text_707712001} quiz_list={quiz_707712001} patientInfo={['707712001','60代','男性']}/> });
  const head700800001 = () => Example({ children: <Viewer img_list={img_700800001} text={text_700800001} quiz_list={quiz_700800001} patientInfo={['700800001','50代','男性']}/> });
  const head707711002 = () => Example({ children: <Viewer img_list={img_707711002} text={text_707711002} quiz_list={quiz_707711002} patientInfo={['701401002','30代','女性']}/> });


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Index} />
          <Route exact path="/log/" render={subauth} />
          <Route exact path="/auth/" render={auth} />
          <PrivateRoute exact path="/base/" render={basicDiagnosis} />
          <PrivateRoute exact path="/basic/" render={explaination} />
          <PrivateRoute exact path="/basic/ct/" render={ct} />
          <PrivateRoute exact path="/basic/head/" render={head} />
          <PrivateRoute exact path="/basic/thorax/" render={thorax} />
          <PrivateRoute exact path="/basic/abdomen/" render={abdomen} />
          <PrivateRoute exact path="/basic/pelvis/" render={pelvis} />
          <PrivateRoute exact path="/grid/" render={practice_menu} />
          <PrivateRoute exact path="/grid/viewer" render={viewer} />
          <PrivateRoute exact path="/grid/705601001" render={head705601001} />
          <PrivateRoute exact path="/grid/701401002" render={head701401002} />
          <PrivateRoute exact path="/grid/707712001" render={head707712001} />
          <PrivateRoute exact path="/grid/700800001" render={head700800001} />
          <PrivateRoute exact path="/grid/707711002" render={head707711002} />
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
