import React, { Component } from 'react';
import './PracticeViewer.css'
import CornerstoneViewport from 'react-cornerstone-viewport';
import Angleimg from "../images/Icon/Angle.png";
import ArrowAnnotateimg from "../images/Icon/ArrowAnnotate.png";
import Bidirectionalimg from "../images/Icon/Bidirectional.png";
import Circleimg from "../images/Icon/Circle.png";
import Dragimg from "../images/Icon/Drag.png";
import Eraserimg from "../images/Icon/Eraser.png";
import Freehandimg from "../images/Icon/Freehand.png";
import Lengthimg from "../images/Icon/Length.png";
import Rectangleimg from "../images/Icon/Rectangle.png";
import Resetimg from "../images/Icon/Reset.png";
import Rotateimg from "../images/Icon/Rotate.png";
import Wwwcimg from "../images/Icon/Wwwc.png";
import Zoomimg from "../images/Icon/Zoom.png";
import { PracticeHeader } from './PracticeHeader';


function mklist(name, num) {
    var new_list = []
    for (let i = 0; i <= num - 1; i++) {
        new_list.push(name)
    }
    return new_list
};


var stylelist = mklist('viewer', 5)
var toolstylelist = mklist('tool_box', 12)
const toolimglist = [Angleimg, ArrowAnnotateimg, Bidirectionalimg, Circleimg, Dragimg,
    Eraserimg, Freehandimg, Lengthimg, Rectangleimg, Rotateimg, Wwwcimg, Zoomimg];
const toolnamelist = ["Angle", 'ArrowAnnotate', "Bidirectional", "CircleRoi", "Pan",
    "Eraser", "FreehandRoi", "Length", "RectangleRoi", "Rotate", "Wwwc", "Zoom"];
const toollabel = ["角度測定", '矢印', "十字測定", "円描写", "ドラッグ",
    "消しゴム", "手書き", "長さ測定", "四角描写", "回転", "　　　", "ズーム"];



const reset_list = function (oldlist, name) {
    var new_list = []
    for (let i = 0; i <= oldlist.length - 1; i++) {
        new_list.push(name)
    }
    return new_list
};



class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeViewportIndex: 0,
            viewports: [0, 1, 2, 3],
            toolports: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            quizports: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
                { name: 'Length', mode: 'active' },
                { name: 'Angle', mode: 'active' },
                { name: 'Bidirectional', mode: 'active' },
                { name: 'FreehandRoi', mode: 'active' },
                { name: 'Eraser', mode: 'active' },
                { name: 'ArrowAnnotate', mode: 'active' },
                { name: 'CircleRoi', mode: 'active' },
                { name: 'RectangleRoi', mode: 'active' },
                // Scroll
                { name: 'StackScrollMouseWheel', mode: 'active' },
                // Touch
                { name: 'PanMultiTouch', mode: 'active' },
                { name: 'ZoomTouchPinch', mode: 'active' },
                { name: 'StackScrollMultiTouch', mode: 'active' },
                { name: 'Rotate', mode: 'active' },
            ],
            imageIds: this.props.img_list,
            quiz: this.props.quiz_list,
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
            quizstylelist: mklist('question_num', this.props.quiz_list.length)
        };
    };

    componentDidMount() {
        this.setState({ imageIds: this.props.img_list })
    }

    render() {
        return (
            <div className='practice_contents'>
                <div>{PracticeHeader(this.props.patientInfo)}</div>
                <div className='practice_body'>
                    <div className='metadata info'>
                        <label htmlFor="active-tool">Information</label>
                        <div className='metadata_box'>
                            {this.props.text}
                        </div>
                    </div>
                    <div className="metadata tool">
                        <label htmlFor="active-tool">Tool Contents</label>
                        <div className='tool_contents'>
                            {this.state.toolports.map((index) => (
                                <div className={this.state.toolstyle[index]}
                                    onClick={() => {
                                        toolstylelist = reset_list(toolstylelist, 'tool_box')
                                        toolstylelist[index] = 'tool_box_click';
                                        this.setState({
                                            activeTool: toolnamelist[index],
                                            toolstyle: toolstylelist,
                                            activeToolIndex: index,
                                        });
                                    }}>
                                    <img className="tool_icon" src={toolimglist[index]} title={toollabel[index]} alt={toollabel[index]}></img>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='metadata quiz'>
                        <label htmlFor="active-tool">Information</label>
                        <div className='metadata_box'>
                            {this.props.text}
                        </div>
                    </div>
                    <div className='viewer'>
                        viewer
                    </div>
                </div>
            </div>
        )
    }
};

export default Viewer;