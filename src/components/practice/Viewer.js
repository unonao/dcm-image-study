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
            imageIds: [],
            // FORM
            imageIdIndex: 0,
            bigviwer: false,
        };
        this.ref = React.createRef();
    };

    componentDidMount() {
        this.setState({ imageIds: this.props.img_list, activeTool: this.props.activeTool })
    }

    render() {
        return (
            <div className='viewsize'>
                {this.state.bigviwer === false ?
                    <div className='viewers' >
                        {this.state.viewports.map((index) => (
                            index <= (this.state.imageIds.length - 1) ?
                                <div className='viewer'
                                    ref={this.ref}
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
                                        activeTool={this.props.activeTool}
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
                            activeTool={this.props.activeTool}
                        />
                    </div>
                }
                {console.log(this.state.imageIds)}
            </div>
        )
    }
}
