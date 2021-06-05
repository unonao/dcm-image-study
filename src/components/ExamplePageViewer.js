import React, { Component ,  useState } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import cornerstoneTools from 'cornerstone-tools';
import { head_CT_dicom ,anno_head } from "./Head";
import { thorax_dicom  } from "./Thorax";
import { abdomen_dicom } from "./Abdomen";
import Angleimg from "./images/Icon/Angle.png";
import ArrowAnnotateimg from "./images/Icon/ArrowAnnotate.png";
import Bidirectionalimg from "./images/Icon/Bidirectional.png";
import Circleimg from "./images/Icon/Circle.png";
import Dragimg from "./images/Icon/Drag.png";
import Eraserimg from "./images/Icon/Eraser.png";
import Freehandimg from "./images/Icon/Freehand.png";
import Lengthimg from "./images/Icon/Length.png";
import Rectangleimg from "./images/Icon/Rectangle.png";
import Resetimg from "./images/Icon/Reset.png";
import Rotateimg from "./images/Icon/Rotate.png";
import Wwwcimg from "./images/Icon/Wwwc.png";
import Zoomimg from "./images/Icon/Zoom.png";

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

var dicomdata = {
    'stack':[stack1,stack2],
    'head':[head_CT_dicom],
    'thorax': [thorax_dicom],
    'abdomen':[abdomen_dicom],
}

const quiz1 = '大動脈弓を丸く囲ってください。'
const quiz2 = 'img=4層で左側の肺を囲んでください。'


const img_list = {
    'head':[head_CT_dicom,anno_head],
    'thorax':[thorax_dicom],
    'abdomen':[abdomen_dicom],
}

const img_list_name = {
    'head':['頭部CT','頭部動脈アノテーション'],
    'thorax':['胸部CT'],
    'abdomen':['腹部CT'],
}
function mklist(name,num) {
    var new_list = []
    for(let i=0;i<=num-1;i++){
        new_list.push(name)
    }
    return new_list
};


var stylelist = mklist('viewer',5)
var toolstylelist = mklist('tool_box',12)
const toolimglist = [Angleimg,ArrowAnnotateimg,Bidirectionalimg,Circleimg,Dragimg,
    Eraserimg,Freehandimg,Lengthimg,Rectangleimg,Rotateimg,Wwwcimg,Zoomimg];
const toolnamelist = ["Angle",'ArrowAnnotate',"Bidirectional","CircleRoi","Pan",
"Eraser","FreehandRoi","Length","RectangleRoi","Rotate","Wwwc","Zoom"];
const toollabel = ["角度測定",'矢印',"十字測定","円描写","ドラッグ",
"消しゴム","手書き","長さ測定","四角描写","回転","　　　","ズーム"];



const reset_list = function(oldlist,name){
    var new_list = []
    for(let i=0;i<=oldlist.length-1;i++){
        new_list.push(name)
    }
    return new_list
};

// documentオブジェクト内のdicom-imageのエレメントを取得する
const image= document.getElementsByClassName('viewport');
// この例だと１個めが必要となるdicom-imageなので、配列の１番目をセットし、toolTypeは円（KRoi）を指定してgetする
//var regionAnnotation=cornerstoneTools.getToolState(image[0],'FreehandScissors');

//CircleRoi,RectangleRoi用
export class Viewer_Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      showResults: false,
                      showExplain: false,
                      toolState: undefined,
                    };
      }
    render(){
        function Answer_check({num,dcmdataset,toolState,tooltype,ans_st_x,ans_st_y,ans_end_x,ans_end_y}){
            var a = 0;
            if (toolState[dcmdataset[num]]===undefined){
                a = -2
            }else if(toolState[dcmdataset[num]][tooltype]===undefined){
                a = -1
            }else {
                const start_x=toolState[dcmdataset[num]][tooltype]["data"][0]["handles"]["start"]["x"];
                const start_y=toolState[dcmdataset[num]][tooltype]["data"][0]["handles"]["start"]["y"];
                const end_x=toolState[dcmdataset[num]][tooltype]["data"][0]["handles"]["end"]["x"];
                const end_y=toolState[dcmdataset[num]][tooltype]["data"][0]["handles"]["end"]["y"];
                if(Math.min(ans_st_x,ans_end_x)<start_x &&
                   start_x<Math.max(ans_st_x,ans_end_x) &&
                   Math.min(ans_st_y,ans_end_y)<start_y &&
                   start_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1
                }else{ a+= 0 };

                if(Math.min(ans_st_x,ans_end_x)<end_x &&
                end_x<Math.max(ans_st_x,ans_end_x) &&
                Math.min(ans_st_y,ans_end_y)<end_y &&
                end_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1
                }else{ a+= 0 };
            };
            if(a===-2){
                return(
                    <div>
                        <h3>アノテーションする層が違います。</h3>
                    </div>
                )
            }else if(a===-1){
                return(
                    <div>
                        <h3>アノテーションツールが違います。</h3>
                    </div>
                )
            }else if(a===0){
                return(
                    <div>
                        <h3>異なる場所を指摘しています。もう一度確認しましょう。</h3>
                    </div>
                )
            }else if(a===2){
                return(
                    <div>
                        <h3>正解です。大変よくできました。</h3>
                    </div>
                )
            }else{
                return(
                    <div>
                        <h3>惜しいです。もう一度トライ!!</h3>
                    </div>
                )
            };
        }
        return(
            <div>
                <div  className="Quiz_contents">
                    <div className="quiz_text">
                        <p>{this.props.text}</p>
                    </div>
                    <button
                        className="body_btn answer_box"
                        type="button"
                        onClick={() => {
                            this.setState({
                                showResults: !this.state.showResults,
                                toolState: cornerstoneTools.globalImageIdSpecificToolStateManager.saveToolState(),
                            });
                                }}
                    >
                    判定
                    </button>
                </div>
                <div>
                { this.state.showResults ===true ?
                <div id='overlay'>
                    <div id='quiz_content' className='quiz_explain'>
                        <div>
                            <button
                            className = 'close_btn'
                            type="button"
                            onClick={() => {
                            this.setState({
                                showResults: !this.state.showResults,
                            });
                                }}
                            >X</button>
                        </div>
                        <div >
                        {Answer_check(
                        {num:this.props.num,
                        dcmdataset:this.props.data,
                        toolState:this.state.toolState,
                        tooltype:this.props.tooltype,
                        ans_st_x:this.props.ans_st_x,
                        ans_st_y:this.props.ans_st_y,
                        ans_end_x:this.props.ans_end_x,
                        ans_end_y:this.props.ans_end_y,})}
                        </div>
                        <button
                            className="body_btn explain_box"
                            type="button"
                            onClick={() => {
                            this.setState({
                                showExplain: !this.state.showExplain,
                            });
                                }}
                        >
                        {this.state.showExplain ? '閉じる' : '解説をみる'}
                        </button>
                        <div>
                           {this.state.showExplain ===true ?
                           <div>
                               <p>ここにあるよ💗</p>
                            </div>
                            : null }
                        </div>
                    </div>
                </div>
                : null }
                </div>
            </div>
        );
    }
};
//FreehandROi用
class Viewer_Quiz_Freehand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer: 0,
                      showResults: false,
                      toolState: undefined,
                    };
      }
    render(){
        function Answer_check_freehand({num,dcmdataset,toolState,ans_st_x,ans_st_y,ans_end_x,ans_end_y}){
            var a = 0;
            if (toolState[dcmdataset[num]]===undefined){
                a = -2
            }else if(toolState[dcmdataset[num]]["FreehandRoi"]===undefined){
                a = -1
            }else {
                const length=toolState[dcmdataset[num]]["FreehandRoi"]["data"][0]["handles"]["points"]["length"]-1;
                for(var i=0;length;i++){
                    const x=toolState[dcmdataset[num]]["FreehandRoi"]["data"][0]["handles"]["points"][0]["x"];
                    const y=toolState[dcmdataset[num]]["FreehandRoi"]["data"][0]["handles"]["points"][0]["y"];
                    if(Math.min(ans_st_x,ans_end_x)<x<Math.max(ans_st_x,ans_end_x)){
                        a += 0;
                    }else{
                        a += 1;
                    };
                    if(Math.min(ans_st_y,ans_end_y)<y<Math.max(ans_st_y,ans_end_y)){
                        a += 0;
                    }else{
                        a += 1;
                    };
                };
                a /= length
            }
            if(a===-2){
                return(
                    <div>
                        <h3>アノテーションする層が違います。</h3>
                    </div>
                )
            }else if(a===-1){
                return(
                    <div>
                        <h3>アノテーションツールが違います。</h3>
                    </div>
                )
            }else if(a>0.5){
                return(
                    <div>
                        <h3>異なる場所を指摘しています。もう一度確認しましょう。</h3>
                    </div>
                )
            }else if(0<a && a<=0.5){
                return(
                    <div>
                        <h3>惜しいです。もう一度トライ!!</h3>
                    </div>
                )
            }else if(a===0){
                return(
                    <div>
                        <h3>正解です。大変よくできました。</h3>
                    </div>
                )
            };
        }
        return(
            <div>
                <button
                    className="body_btn answer_box"
                    type="button"
                    onClick={() => {
                        this.setState({
                            showResults: !this.state.showResults,
                            toolState: cornerstoneTools.globalImageIdSpecificToolStateManager.saveToolState(),
                        });
                            }}
                >
                {this.state.showResults ? 'Close' : 'Submit'}
                </button>
                <div>
                { this.state.showResults ===true ?
                <div>
                {Answer_check_freehand(
                {num:this.props.num,
                dcmdataset:this.props.data,
                toolState:this.state.toolState,
                ans_st_x:this.props.ans_st_x,
                ans_st_y:this.props.ans_st_y,
                ans_end_x:this.props.ans_end_x,
                ans_end_y:this.props.ans_end_y,})}
                </div>
                : null }
                </div>
            </div>
        );
    }
};
//ArrowAnnotate用
class Viewer_Quiz_ArrowAnnotate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer: 0,
                      showResults: false,
                      toolState: undefined,
                    };
      }
    render(){
        function Answer_check_ArrowAnnotate({num,dcmdataset,toolState,ans_st_x,ans_st_y,ans_end_x,ans_end_y,ans_text}){
            var a = 0;
            if (toolState[dcmdataset[num]]===undefined){
                a = -2
            }else if(toolState[dcmdataset[num]]["ArrowAnnotate"]===undefined){
                a = -1
            }else {
                const start_x=toolState[dcmdataset[num]]["ArrowAnnotate"]["data"][0]["handles"]["start"]["x"];
                const start_y=toolState[dcmdataset[num]]["ArrowAnnotate"]["data"][0]["handles"]["start"]["y"];
                const text=toolState[dcmdataset[num]]["ArrowAnnotate"]["data"][0]["text"];
                if(Math.min(ans_st_x,ans_end_x)<start_x<Math.max(ans_st_x,ans_end_x)){
                    a += 1;
                }else{ a+= 0 };
                if(Math.min(ans_st_y,ans_end_y)<start_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1;
                }else{ a+= 0 };
                if(ans_text===text){
                    a += 1;
                }else{ a+= 0 };
            }
            if(a===-2){
                return(
                    <div>
                        <h3>アノテーションする層が違います。</h3>
                    </div>
                )
            }else if(a===-1){
                return(
                    <div>
                        <h3>アノテーションツールが違います。</h3>
                    </div>
                )
            }else if(0<=a && a<=1){
                return(
                    <div>
                        <h3>異なる場所を指摘しています。もう一度確認しましょう。</h3>
                    </div>
                )
            }else if(a===2){
                return(
                    <div>
                        <h3>場所は正解ですが、アノテーション名が違います。</h3>
                    </div>
                )
            }else if(a===3){
                return(
                    <div>
                        <h3>正解です。大変よくできました。</h3>
                    </div>
                )
            };
        }
        return(
            <div>
                <button
                    className="body_btn answer_box"
                    type="button"
                    onClick={() => {
                        this.setState({
                            showResults: !this.state.showResults,
                            toolState: cornerstoneTools.globalImageIdSpecificToolStateManager.saveToolState(),
                        });
                            }}
                >
                {this.state.showResults ? 'Close' : 'Submit'}
                </button>
                <div>
                { this.state.showResults ===true ?
                <div>
                {Answer_check_ArrowAnnotate(
                {num:this.props.num,
                dcmdataset:this.props.data,
                toolState:this.state.toolState,
                ans_st_x:this.props.ans_st_x,
                ans_st_y:this.props.ans_st_y,
                ans_end_x:this.props.ans_end_x,
                ans_end_y:this.props.ans_end_y,
                ans_text:this.props.ans_text,})}
                </div>
                : null }
                </div>
            </div>
        );
    }
};

var quiz_dict = {
    'stack':[<Viewer_Quiz num={0} text={quiz1} data={stack1} tooltype="CircleRoi" ans_st_x={99} ans_st_y={181} ans_end_x={379} ans_end_y={440}></Viewer_Quiz>,
    <Viewer_Quiz num={3} text={quiz2} data={stack1} tooltype="RectangleRoi" ans_st_x={273} ans_st_y={272} ans_end_x={378} ans_end_y={362}></Viewer_Quiz>,]
}

class Viewer extends Component {
    state = {
        activeViewportIndex: 0,
        viewports: [0,1,2,3,4],
        toolports: [0,1,2,3,4,5,6,7,8,9,10,11],
        quizports: [0,1,2,3,4,5,6,7,8,9,10],
        tools: [
            // Mouse
            {
                name: 'Wwwc',
                mode: 'active',
                modeOptions: { mouseButtonMask: 1 },
            },
            {
                name: 'Zoom',
                mode: 'active',
                modeOptions: { mouseButtonMask: 2 },
            },
            {
                name: 'Pan',
                mode: 'active',
                modeOptions: { mouseButtonMask: 4 },
            },
            //annotation
            {name:'Length',mode: 'active' },
            {name:'Angle',mode: 'active' },
            {name:'Bidirectional',mode: 'active' },
            {name:'FreehandRoi',mode: 'active' },
            {name:'Eraser', mode: 'active' },
            {name:'ArrowAnnotate',mode:'active'},
            {name: 'CircleRoi',mode:'active'},
            {name:'RectangleRoi',mode:'active'},
            // Scroll
            { name: 'StackScrollMouseWheel', mode: 'active' },
            // Touch
            { name: 'PanMultiTouch', mode: 'active' },
            { name: 'ZoomTouchPinch', mode: 'active' },
            { name: 'StackScrollMultiTouch', mode: 'active' },
            {name: 'Rotate',mode:'active'},
        ],
        imageIds: dicomdata[this.props.myprop],
        quiz: quiz_dict[this.props.myprop],
        // FORM
        activeTool: 'Wwwc',
        activeToolIndex: 10,
        imageIdIndex: 0,
        quizIndex: 0,
        isPlaying: false,
        frameRate: 5,
        showProps: true,
        style: 'viewers',
        viewerstyle: stylelist,
        toolstyle: toolstylelist,
        quizstylelist: mklist('question_num',quiz_dict[this.props.myprop].length)
    };

    componentDidMount() { }

    render() {
        return (
        <div className='practice_contents'>
            <div >
                <div className='viewer_propaties'>
                    <div className='propaty'>
                        <label htmlFor="active-tool">Tool Contents</label>
                        <div className = 'tool_contents'>
                            {this.state.toolports.map((index) => (
                            <div className={this.state.toolstyle[index]}
                                onClick={() => {
                                    toolstylelist=reset_list(toolstylelist,'tool_box')
                                    toolstylelist[index]='tool_box_click';
                                    this.setState({activeTool: toolnamelist[index],
                                        toolstyle: toolstylelist,
                                        activeToolIndex: index,
                                            });
                                    }}>
                                <img className="tool_icon" src={toolimglist[index]} title={toollabel[index]}></img>
                            </div>
                            ))}
                        </div>
                        <div className="tool_status">
                            <label htmlFor="active-tool">Active Tool:</label>
                            <input
                                    type = "text"
                                    value={toollabel[this.state.activeToolIndex]}
                                    readOnly={true}
                                    className="form_tool"
                                    id="active-tool"
                                    >
                            </input>
                        </div>
                    </div>
                    <div className='propaty'>
                    <label htmlFor="active-tool">Viwer Size</label>
                        <div  className='window'
                            onClick={() => {
                            stylelist=reset_list(stylelist,'viewer')
                            this.setState({
                            style: 'viewers',
                            viewerstyle: stylelist
                               });
                               }}>
                            <img className="tool_img" src={Resetimg} alt="画像配置をリセット" title="画像配置をリセット"></img>
                        </div>
                    </div>
                    <div className="propaty">
                    <label htmlFor="active-tool">Information</label>
                            <div className='complain'>
                                <div className='info_cont'>
                                    <div className='age_sex'>
                                        <h3>63歳　男性</h3>
                                    </div>
                                </div>
                                <div className='info_cont'>
                                    <div className='info'>
                                        <p>精査希望</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='propaty'>
                    <label htmlFor="active-tool">Question</label>
                        <div className='quiz-group'>
                            <div className='Numbers'>
                                <label htmlFor="active-tool">No.</label>
                                <div className = 'question_nums'>
                                    {this.state.quizports.map((index) => (
                                        index<=(this.state.quiz.length-1)?
                                        <div className = {this.state.quizstylelist[index]}
                                        onClick={() => {
                                            var quizstylelist=mklist('question_num',this.state.quiz.length)
                                            quizstylelist[index]='question_num_click';
                                            this.setState({
                                                quizIndex: index,
                                                quizstylelist:quizstylelist,
                                            });
                                        }}>
                                        {index+1}
                                        </div>
                                        : null
                                    ))}
                                </div>
                            </div>
                            {this.state.quiz[this.state.quizIndex]}
                        </div>
                    </div>
                </div>
                <div className={this.state.style}>
                    {this.state.viewports.map((index) => (
                    index<=(this.state.imageIds.length-1)?
                    <div className= {this.state.viewerstyle[index]}
                    onDoubleClick={() => {
                        stylelist=reset_list(stylelist,'viewer')
                        stylelist[index]='viewer_big_box';
                        this.setState({
                        style: 'viewers_click',
                        viewerstyle: stylelist,
                        });
                    }}>
                        <CornerstoneViewport
                            key={index}
                            tools={this.state.tools}
                            imageIds={this.state.imageIds[index]}
                            imageIdIndex={this.state.imageIdIndex}
                            isPlaying={this.state.isPlaying}
                            frameRate={this.state.frameRate}
                            activeTool={this.state.activeTool}
                            setViewportActive={() => {
                                this.setState({
                                    activeViewportIndex: index,
                                });
                            }}
                        />
                    </div>
                    :<div className= 'viewer'>
                        viewer{String(index+1)}
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )}
};

export default Viewer;