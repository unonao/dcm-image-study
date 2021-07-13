import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import {Quiz,Viewer_Quiz,Viewer_Quiz_ArrowAnnotate,Viewer_Quiz_Freehand} from './ExamplePageQuiz'
import { anno_head } from "./Head";
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
    'thorax': [thorax_dicom],
    'abdomen':[abdomen_dicom],
}

const quiz1 = 'img=1層で大動脈弓を丸く囲ってください。'
const quiz2 = 'img=4層で左側の肺を四角く囲んでください。'
const quiz3 = '心原性脳塞栓症の原因として最も多いものはどれか'
const quiz4 = 'img=2層で胸骨の輪郭をなぞってください。'
const quiz5 = 'img=3層で病変部を指摘し、病変名を入れてください。'


const img_list = {
    'head':[anno_head],
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

var quiz_dict = {
    'stack':[<Viewer_Quiz num={0} text={quiz1} data={stack1} tooltype="CircleRoi" ans_st_x={99} ans_st_y={181} ans_end_x={379} ans_end_y={440}></Viewer_Quiz>,
    <Viewer_Quiz num={3} text={quiz2} data={stack1} tooltype="RectangleRoi" ans_st_x={273} ans_st_y={272} ans_end_x={378} ans_end_y={362}></Viewer_Quiz>,
    <Quiz answer_num={3} text={quiz3} answer_list={['心筋梗塞','心筋症','非弁膜症性心房細動','人工弁','洞不全症候群']}></Quiz>,
    <Viewer_Quiz_Freehand num={1} text={quiz4} data={stack1} ans_st_x={222} ans_st_y={258} ans_end_x={290} ans_end_y={288}></Viewer_Quiz_Freehand>,
    <Viewer_Quiz_ArrowAnnotate num={2} text={quiz5} data={stack1} ans_st_x={264} ans_st_y={351} ans_end_x={370} ans_end_y={451} ans_text='胸水'></Viewer_Quiz_ArrowAnnotate>]
}

class Viewer extends Component {
    state = {
        activeViewportIndex: 0,
        viewports: [0,1,2,3,4,5],
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
                <div className='viewer_propaties'>
                    <div className='viewer_header'>
                        <div className='viewer_header_box'>
                            <div className='label_menu'>
                                <div className='label'><h3>ID:</h3></div>
                                <div className='label_box id_num'>
                                    <h3>9999999999</h3>
                                </div>
                            </div>
                        </div>
                        <div className='viewer_header_box'>
                            <div className='label_menu'>
                                <div className='label'><h3>年齢:</h3></div>
                                <div className='label_box'>
                                    <h3>63歳</h3>
                                </div>
                            </div>
                        </div>
                        <div className='viewer_header_box'>
                            <div className='label_menu'>
                                <div className='label'><h3>性別:</h3></div>
                                <div className='label_box'>
                                    <h3>男性</h3>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <img className="tool_icon" src={toolimglist[index]} title={toollabel[index]} alt={toollabel[index]}></img>
                            </div>
                            ))}
                        </div>
                        <div className='tool_info'>
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
                    </div>
                    <div className="propaty">
                    <label htmlFor="active-tool">Information</label>
                            <div className='complain'>
                                <p>精査希望</p>
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
                <div className='viewsize'>
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