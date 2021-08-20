//import "./App.css" 

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Viewer from './components/ExamplePageViewer.js';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { FilterablePracticeMenuTable } from "./components/practice/PracticeMenu"
import Lecture from "./components/lecture/Lecture";
import { LectureMenu } from "./components/lecture/LectureMenu";

// cornerstone tools
import initCornerstone from './initCornerstone.js';
import { AuthProvider } from './auth/AuthContext';
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";

// storage
import {
  img_705601001, quiz_705601001, text_705601001, img_701401002, quiz_701401002, text_701401002,
  img_707712001, quiz_707712001, text_707712001, img_700800001, quiz_700800001, text_700800001, img_707711002, quiz_707711002, text_707711002,
} from './components/Practice';

import { Quiz, ViewerQuiz, ViewerQuizArrowAnnotate, ViewerQuizFreehand } from './components/ExamplePageQuiz';


// cornerstone tools の初期化
initCornerstone();

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

const sample_list = [stack1, stack2]
const quiz1 = 'img=1層で大動脈弓を丸く囲ってください。'
const quiz2 = 'img=4層で左側の肺を四角く囲んでください。'
const quiz3 = '心原性脳塞栓症の原因として最も多いものはどれか'
const quiz4 = 'img=2層で胸骨の輪郭をなぞってください。'
const quiz5 = 'img=3層で病変部を指摘し、病変名を入れてください。'
const quiz_list = [<ViewerQuiz num={0} text={quiz1} data={stack1} tooltype="CircleRoi" ans_st_x={243} ans_st_y={352} ans_end_x={299} ans_end_y={286}></ViewerQuiz>,
<ViewerQuiz num={3} text={quiz2} data={stack1} tooltype="RectangleRoi" ans_st_x={273} ans_st_y={272} ans_end_x={378} ans_end_y={362}></ViewerQuiz>,
<Quiz answer_num={3} text={quiz3} answer_list={['心筋梗塞', '心筋症', '非弁膜症性心房細動', '人工弁', '洞不全症候群']}></Quiz>,
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

  const viewer = () => Example({ children: <Viewer myprop='stack' img_list={sample_list} text={<p>精査</p>} quiz_list={quiz_list} patientInfo={['999999999', '63', '男性']} /> });


  const head705601001 = () => Example({ children: <Viewer img_list={img_705601001} text={text_705601001} quiz_list={quiz_705601001} patientInfo={['705601001', '80代', '男性']} /> });
  const head701401002 = () => Example({ children: <Viewer img_list={img_701401002} text={text_701401002} quiz_list={quiz_701401002} patientInfo={['701401002', '60代', '男性']} /> });
  const head707712001 = () => Example({ children: <Viewer img_list={img_707712001} text={text_707712001} quiz_list={quiz_707712001} patientInfo={['707712001', '60代', '男性']} /> });
  const head700800001 = () => Example({ children: <Viewer img_list={img_700800001} text={text_700800001} quiz_list={quiz_700800001} patientInfo={['700800001', '50代', '男性']} /> });
  const head707711002 = () => Example({ children: <Viewer img_list={img_707711002} text={text_707711002} quiz_list={quiz_707711002} patientInfo={['701401002', '30代', '女性']} /> });


  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/grid/" component={''} />
          <Route component={Header} />
        </Switch>

        <Switch>
          <AuthProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/login/" component={Login} />
            <PrivateRoute exact path="/lecture" render={LectureMenu} />
            <PrivateRoute exact path="/lecture/:sitekind" render={Lecture} />
            <PrivateRoute exact path="/practice_menu/" component={FilterablePracticeMenuTable} />
            <PrivateRoute exact path="/grid/viewer" render={viewer} />
            <PrivateRoute exact path="/grid/705601001" render={head705601001} />
            <PrivateRoute exact path="/grid/701401002" render={head701401002} />
            <PrivateRoute exact path="/grid/707712001" render={head707712001} />
            <PrivateRoute exact path="/grid/700800001" render={head700800001} />
            <PrivateRoute exact path="/grid/707711002" render={head707711002} />
          </AuthProvider>
        </Switch>

        <Switch>
          <Route path="/grid/" component={''} />
          <Route component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
