import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';


const stack2 = [
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.8.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.7.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm',
    'dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm',
]


class ExamplePageBasic extends Component {
    state = {
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
        imageIds: stack2,
        activeTool: 'Wwwc',
        imageIdIndex: 0,
        isPlaying: false,
        frameRate: 5,
    };

    render() {
        return (
            <div className = "basic_contents">
                <div className = "basic_content">
                    <h2>Viewer</h2>
                    <div style={{padding:'0px',width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        <CornerstoneViewport
                            tools={this.state.tools}
                            style={{minWidth: '50%', height: '512px', flex: '1'}}
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
                <div className = "basic_sentenses">
                    <h2>解説</h2>
                    <h2>STEP1. 中心溝を見つけよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                    <h2>STEP2. 皮質の構造を理解しよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                    <h2>STEP3. 大脳基底核の構造を理解しよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                    <h2>STEP4. 脳室の場所を把握しよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                    <h2>STEP5. 脳幹の構造を理解しよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                    <h2>STEP6. 鼻腔にも目をむけよう</h2>
                    <div className = "basic_sentense">
                      <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。</p>
                      <p>医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。解説</p>
                      <p>はプロの放射線診断科医が作成しています。このツールを通して、普段放射線診断</p>
                      <p>医がどのように鑑別を行っているか垣間見ることができるでしょう。今こそ自分の</p>
                      <p>スキルアップをしてみませんか？</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExamplePageBasic;
