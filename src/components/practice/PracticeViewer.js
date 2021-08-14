import React, { Component } from 'react';
import './PracticeViewer.css'
import { PracticeHeader } from './PracticeHeader';
import { PracticeTool } from './PracticeTool';
import { PracticeQuiz } from './PracticeQuiz';
import { Viewer } from './Viewer';
import { PracticeImageSelection } from './PracticeImageSelection';


class PracticeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTool: 'Wwwc',
            imageIdIndex: 0,
            quizIndex: 0,
            images: this.props.img_list,
            img_list: [],
        };
    };

    changeActiveTool(tool) {
        this.setState({ activeTool: tool })
    }

    changeImageList(newlist) {
        this.setState({ img_list: newlist })
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
                        <PracticeTool
                            changeActiveTool={(tool) => this.changeActiveTool(tool)}
                            activeTool={this.state.activeTool}></PracticeTool>
                    </div>
                    <div className="metadata image">
                        <PracticeImageSelection
                            images={this.state.images}
                            img_list={this.state.img_list}
                            protocol_list={this.props.protocol_list}
                            changeImageList={(newlist) => this.changeImageList(newlist)}>
                        </PracticeImageSelection>
                    </div>
                    <div className='metadata quiz'>
                        <label htmlFor="active-tool">Question</label>
                        <PracticeQuiz
                            quiz_list={this.props.quiz_list}></PracticeQuiz>
                    </div>
                    <div className='viewerposition'>
                        <Viewer img_list={this.state.img_list} activeTool={this.state.activeTool}></Viewer>
                    </div>
                </div>
            </div>
        )
    }
};

export default PracticeViewer;