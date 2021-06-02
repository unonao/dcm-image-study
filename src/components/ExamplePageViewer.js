import React, { Component ,  useState } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import cornerstoneTools from 'cornerstone-tools'

import { head_CT_dicom ,anno_head } from "./Head";
import { thorax_dicom  } from "./Thorax";
import { abdomen_dicom } from "./Abdomen";

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

var stylelist = ['viewer','viewer','viewer','viewer','viewer']

const reset_stylelist = function(stylelist){
    var new_list = []
    for(let i=0;i<=stylelist.length-1;i++){
        new_list.push('viewer')
    }
    return new_list
};

// documentオブジェクト内のdicom-imageのエレメントを取得する
const image= document.getElementsByClassName('viewport');
// この例だと１個めが必要となるdicom-imageなので、配列の１番目をセットし、toolTypeは円（KRoi）を指定してgetする
//var regionAnnotation=cornerstoneTools.getToolState(image[0],'FreehandScissors');

//CircleRoi,RectangleRoiy用
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
                if(Math.min(ans_st_x,ans_end_x)<start_x<Math.max(ans_st_x,ans_end_x)){
                    a += 1
                }
                if(Math.min(ans_st_y,ans_end_y)<start_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1
                }
                if(Math.min(ans_st_x,ans_end_x)<end_x<Math.max(ans_st_x,ans_end_x)){
                    a += 1
                }
                if(Math.min(ans_st_y,ans_end_y)<end_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1
                }
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
            }else if(a===0){
                return(
                    <div>
                        <h3>異なる場所を指摘しています。もう一度確認しましょう。</h3>
                    </div>
                )
            }else if(1<=a<=3){
                return(
                    <div>
                        <h3>惜しいです。もう一度トライ!!</h3>
                    </div>
                )
            }else if(a===4){
                return(
                    <div>
                        <h3>正解です。大変よくできました。</h3>
                    </div>
                )
            };
        }
        return(
            <div>
                <div className="Quiz_contents">
                    <div>
                        <h3>大動脈弓を丸く囲ってください。</h3>
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
                    {this.state.showResults ? '閉じる' : '判定'}
                    </button>
                </div>
                <div>
                { this.state.showResults ===true ?
                <div className='quiz_explain'>
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
            }else if(0<a<=0.5){
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
                };
                if(Math.min(ans_st_y,ans_end_y)<start_y<Math.max(ans_st_y,ans_end_y)){
                    a += 1;
                };
                if(ans_text===text){
                    a += 1;
                }
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
            }else if(0<=a<=1){
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
    'stack':<Viewer_Quiz num={0} data={stack1} tooltype="CircleRoi" ans_st_x={99} ans_st_y={181} ans_end_x={379} ans_end_y={440}></Viewer_Quiz>,
}

class Viewer extends Component {
    state = {
        activeViewportIndex: 0,
        viewports: [0,1,2,3,4],
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
            // Scroll
            { name: 'StackScrollMouseWheel', mode: 'active' },
            // Touch
            { name: 'PanMultiTouch', mode: 'active' },
            { name: 'ZoomTouchPinch', mode: 'active' },
            { name: 'StackScrollMultiTouch', mode: 'active' },
            {name: 'CircleRoi',mode:'active'},
            {name:'RectangleRoi',mode:'active'}
        ],
        imageIds: dicomdata[this.props.myprop],
        quiz: quiz_dict[this.props.myprop],
        // FORM
        activeTool: 'Wwwc',
        imageIdIndex: 0,
        isPlaying: false,
        frameRate: 5,
        showProps: true,
        style: 'viewers',
        viewerstyle: stylelist,
    };

    componentDidMount() { }

    render() {
        //var element = document.getElementById(imageIds);
        //cornerstoneTools.length.enable(element);
        //var Toolstate = cornerstoneTools.getToolState({element:element, toolType:'CircleScissors'})
        var toolState = cornerstoneTools.globalImageIdSpecificToolStateManager.saveToolState();
        return (
        <div className='practice_contents'>
            <div >
                <p>{console.log(toolState)}</p>
                <p>{console.log(toolState.name)}</p>
                <p>{console.log(image)}</p>
                <div className='viewer_propaties'>
                        <form className="viewer_row">
                            {/* FIRST COLUMN */}
                            <div className = 'tool_contents'>
                                <div
                                className="tool_box"
                                type="button"
                                onClick={() => {
                                    this.setState({activeTool: 'CircleRoi'});
                                     }}>
                                    〇
                                </div>
                                <button
                                className="tool_btn"
                                type="button"
                                onClick={() => {
                                    this.setState({activeTool: 'Eraser'});
                                     }}>
                                    消しゴム
                                </button>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="active-tool">Active Tool:</label>
                                    <select
                                    value={this.state.activeTool}
                                    onChange={evt =>
                                        this.setState({ activeTool: evt.target.value })
                                    }
                                    className="form-control"
                                    id="active-tool"
                                    >
                                    <option value="Wwwc">Wwwc</option>
                                    <option value="Zoom">Zoom</option>
                                    <option value="Pan">Pan</option>
                                    <option value="Length">Length</option>
                                    <option value="Angle">Angle</option>
                                    <option value="Bidirectional">Bidirectional</option>
                                    <option value="FreehandRoi">Freehand</option>
                                    <option value='ArrowAnnotate'>ArrowAnnotate</option>
                                    <option value="Eraser">Eraser</option>
                                    <option value="CircleRoi">CircleScissors</option>
                                    <option value="RectangleRoi">RectangleRoi</option>
                                    </select>
                               </div>
                                <div className="form-group">
                                    <label htmlFor="image-id-index">Image ID Index:</label>
                                    <input
                                    type="range"
                                    min="0"
                                    max={this.state.imageIds.length - 1}
                                    value={this.state.imageIdIndex}
                                    onChange={evt =>
                                        this.setState({ imageIdIndex: parseInt(evt.target.value) })
                                    }
                                    className="form-control"
                                    id="image-id-index"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image-id-stack">Image ID Stack:</label>
                                    <select
                                    defaultValue={1}
                                    onChange={evt => {
                                        const selectedStack =
                                            parseInt(evt.target.value) === 1 ? stack1 : stack2;

                                        this.setState({
                                            imageIds: selectedStack,
                                            imageIdIndex: 0,
                                        });
                                    }}
                                    className="form-control"
                                    id="image-id-stack"
                                    >
                                    <option value="1">Stack 1</option>
                                    <option value="2">Stack 2</option>
                                    </select>
                                </div>
                            </div>
                            {/* SECOND COLUMN */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="active-viewport-index">
                                    Active Viewport Index:
                                    </label>
                                    <input
                                    type="text"
                                    readOnly={true}
                                    value={this.state.activeViewportIndex}
                                    className="form-control"
                                    id="active-viewport-index"
                                    ></input>
                                </div>
                            </div>
                        </form>
                </div>
                <div>
                    <button
                    className="body_btn"
                    type="button"
                    onClick={() => {
                        stylelist=reset_stylelist(stylelist)
                        this.setState({
                        style: 'viewers',
                        viewerstyle: stylelist
                        });
                        }}
                    >
                    通常表示
                    </button>
                </div>
                <div className={this.state.style}>
                    {this.state.viewports.map((index) => (
                    index<=(this.state.imageIds.length-1)?
                    <div className= {this.state.viewerstyle[index]}
                    onDoubleClick={() => {
                        stylelist=reset_stylelist(stylelist)
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
                <div className='quiz-group'>
                {this.state.quiz}
                </div>
            </div>
        </div>
    )}
};

export default Viewer;