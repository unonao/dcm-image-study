import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import './Viewer.css'

export class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeViewportIndex: 0,
            viewports: [0, 1, 2, 3],
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
            // FORM
            activeTool: this.props.activeTool,
            imageIdIndex: 0,
            bigviwer: false,
        };
    };

    componentDidMount() {
        this.setState({ imageIds: this.props.img_list })
    }

    render() {
        return (
            <div className='viewsize'>
                {this.state.bigviwer === false ?
                    <div className='viewers' >
                        {this.state.viewports.map((index) => (
                            index <= (this.state.imageIds.length - 1) ?
                                <div className='viewer'
                                    key={index}
                                    onDoubleClick={() => {
                                        this.setState({
                                            bigviwer: !this.state.bigviwer,
                                        });
                                    }}>
                                    <CornerstoneViewport
                                        key={index}
                                        tools={this.state.tools}
                                        imageIds={this.state.imageIds[index]}
                                        imageIdIndex={this.state.imageIdIndex}
                                        activeTool={this.state.activeTool}
                                        setViewportActive={() => {
                                            this.setState({
                                                activeViewportIndex: index,
                                            });
                                        }}
                                    />
                                </div>
                                : <div className='viewer'
                                    key={index}>
                                    viewer{String(index + 1)}
                                </div>
                        ))}
                    </div> :
                    <div className='viewerlarge'
                        onDoubleClick={() => {
                            this.setState({
                                bigviwer: !this.state.bigviwer,
                            });
                        }}>
                        <CornerstoneViewport
                            tools={this.state.tools}
                            imageIds={this.state.imageIds[this.state.activeViewportIndex]}
                            imageIdIndex={this.state.imageIdIndex}
                            activeTool={this.state.activeTool}
                        />
                    </div>
                }
            </div>
        )
    }
}
