import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import { thorax_dicom, thorax_explain } from "./Thorax";
import { abdomen_dicom, abdomen_explain } from "./Abdomen";
import { CT_explain } from "./Diagnostic_imaging";

var explaindata = {
    'ct': CT_explain(),
    'thorax': thorax_explain(),
    'abdomen': abdomen_explain(),
};

const img_list = {
    'ct': [thorax_dicom],
    'thorax': [thorax_dicom],
    'abdomen': [abdomen_dicom],
}

const img_list_name = {
    'ct': ['胸部CT'],
    'thorax': ['胸部CT'],
    'abdomen': ['腹部CT'],
}

const get_img = function (myprop) {
    var option_list = [];
    for (let i = 0; i <= img_list[myprop].length - 1; i++) {
        option_list.push(<option value={String(i)}>{img_list_name[myprop][i]}</option>);
    }
    return option_list
}

class ExamplePageBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeViewportIndex: 0,
            viewports: [0],
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
                // Scroll
                { name: 'StackScrollMouseWheel', mode: 'active' },
                // Touch
                { name: 'PanMultiTouch', mode: 'active' },
                { name: 'ZoomTouchPinch', mode: 'active' },
                { name: 'StackScrollMultiTouch', mode: 'active' },
            ],
            activeTool: 'Wwwc',
            imageIdIndex: 0,
            isPlaying: false,
            frameRate: 5,
            imageIds: img_list[this.props.myprop][0]
        };
    };
    //compomet
    render() {
        return (
            <div className="basic_contents">
                <div className="basic_content">
                    <h2>Viewer</h2>
                    <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        <CornerstoneViewport
                            tools={this.state.tools}
                            style={{ minWidth: '50%', height: '512px', flex: '1' }}
                            imageIds={this.state.imageIds}
                            imageIdIndex={this.state.imageIdIndex}
                            isPlaying={this.state.isPlaying}
                            frameRate={this.state.frameRate}
                            activeTool={this.state.activeTool}
                        />
                    </div>
                    <div style={{ marginTop: '35px' }}>
                        <form className="row_basic">
                            {/* FIRST COLUMN */}
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
                                        <option value="Eraser">Eraser</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image-id-stack">Image ID Stack:</label>
                                    <select
                                        defaultValue={0}
                                        onChange={evt => {
                                            const selectedStack =
                                                img_list[this.props.myprop][parseInt(evt.target.value)];

                                            this.setState({
                                                imageIds: selectedStack,
                                                imageIdIndex: 0,
                                            });
                                        }}
                                        className="form-control"
                                        id="image-id-stack"
                                    >
                                        {get_img(this.props.myprop)}
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
                            </div>
                            {/* SECOND COLUMN */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="image-id-index">
                                        Image ID Index:
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max={this.state.imageIds.length - 1}
                                        value={this.state.imageIdIndex}
                                        onChange={evt => {
                                            const maxid = this.state.imageIds.length - 1
                                            const imageIdInput = parseInt(evt.target.value);
                                            const imageIdIndex = Math.max(Math.min(imageIdInput, maxid), 0);

                                            this.setState({ imageIdIndex });
                                        }}
                                        className="form-control"
                                        id="image-id-index"
                                    ></input>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.frameRate}
                                        onChange={evt => {
                                            const frameRateInput = parseInt(evt.target.value);
                                            const frameRate = Math.max(Math.min(frameRateInput, 90), 1);

                                            this.setState({ frameRate });
                                        }}
                                    />
                                    <p><span className="input-group-btn">
                                        <button
                                            className="body_btn"
                                            type="button"
                                            onClick={() => {
                                                this.setState({
                                                    isPlaying: !this.state.isPlaying,
                                                });
                                            }}
                                        >
                                            {this.state.isPlaying ? 'Stop' : 'Start'}
                                        </button>
                                    </span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {explaindata[this.props.myprop]}
            </div>
        );
    }
}

export default ExamplePageBasic;
