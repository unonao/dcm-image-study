import Angleimg from "../images/Icon/Angle.png";
import ArrowAnnotateimg from "../images/Icon/ArrowAnnotate.png";
import Bidirectionalimg from "../images/Icon/Bidirectional.png";
import Circleimg from "../images/Icon/Circle.png";
import Dragimg from "../images/Icon/Drag.png";
import Eraserimg from "../images/Icon/Eraser.png";
import Freehandimg from "../images/Icon/Freehand.png";
import Lengthimg from "../images/Icon/Length.png";
import Rectangleimg from "../images/Icon/Rectangle.png";
import Rotateimg from "../images/Icon/Rotate.png";
import Wwwcimg from "../images/Icon/Wwwc.png";
import Zoomimg from "../images/Icon/Zoom.png";
import { mklist } from "../parts/mklist";
import { reset_list } from "../parts/resetlist";
import React from "react";
import './PracticeTool.css'

const toolimglist = [Angleimg, ArrowAnnotateimg, Bidirectionalimg, Circleimg, Dragimg,
    Eraserimg, Freehandimg, Lengthimg, Rectangleimg, Rotateimg, Wwwcimg, Zoomimg];
const toolnamelist = ["Angle", 'ArrowAnnotate', "Bidirectional", "CircleRoi", "Pan",
    "Eraser", "FreehandRoi", "Length", "RectangleRoi", "Rotate", "Wwwc", "Zoom"];
const toollabel = ["角度測定", '矢印', "十字測定", "円描写", "ドラッグ",
    "消しゴム", "手書き", "長さ測定", "四角描写", "回転", "　　　", "ズーム"];
var toolstylelist = mklist('tool_box', 12)

export class PracticeTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toolports: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            toolstyle: toolstylelist,
            activeToolIndex: 10,
            activeTool: this.props.activeTool
        }
    }

    render() {
        return (
            <div className='tool_contents'>
                {this.state.toolports.map((index) => (
                    <div className={this.state.toolstyle[index]}
                        key={index}
                        onClick={() => {
                            toolstylelist = reset_list(toolstylelist, 'tool_box')
                            toolstylelist[index] = 'tool_box_click';
                            this.props.changeActiveTool(toolnamelist[index]);
                            this.setState({
                                toolstyle: toolstylelist,
                                activeToolIndex: index,
                            });
                        }}>
                        <img className="tool_icon" rel="noreferrer" src={toolimglist[index]} title={toollabel[index]} alt={toollabel[index]}></img>

                    </div>
                ))}
            </div>
        )
    }
}