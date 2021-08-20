//import { render } from '@testing-library/react';
import React  from 'react';
import cornerstoneTools from 'cornerstone-tools';
//import { act } from 'react-dom/cjs/react-dom-test-utils.development';

//css
import "../styles/ExamplePageQuiz.css"


//MCQ用
export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                choice_num:0,
                showResults: false,
                showExplain: false,
                    };
      }
    render() {
        const mk_answer = function(answer_list){
            var option_list = [<option value="0">       </option>];
            for(let i=0;i<=answer_list.length-1;i++){
                option_list.push(<option value={String(i+1)}>{answer_list[i]}</option>);
            }
            return option_list
        };

        function Answer_check_mcq({answer_num,choice_num}) {
            var a = 0
            if (answer_num===choice_num){
                a+=1
            }else if(choice_num===0){
                a+=2
            }else{
                a+=0
            };

            if(a===1){
                return(
                    <div>
                        <h3><span className='true'>〇</span>正解です。</h3>
                    </div>
                )
            }else if(a===0){
                return(
                    <div>
                        <h3><span className='false'>✖</span>不正解です。</h3>
                    </div>
                )
            }else{
                return(
                    <div>
                        <h3>選択肢が選ばれていません。</h3>
                    </div>
                )
            };
          }
      return (
        <div>
            <div className='Quiz_contents'>
                <div className="quiz_text">
                    <p>{this.props.text}</p>
                </div>

                <div className = 'choice_box'>
                <label className ="answer_box">解答:</label>
                <select
                    className ="answer_box"
                    onChange={evt =>
                    this.setState({ choice_num: parseInt(evt.target.value) })
                    }
                    id="active-tool"
                >
                    {mk_answer(this.props.answer_list)}
                </select>
                </div>
                <button
                    className="quiz_btn answer_box"
                    type="button"
                    onClick={() => {
                        this.setState({
                            showResults: !this.state.showResults,
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
                        {Answer_check_mcq(
                        {answer_num:this.props.answer_num,
                        choice_num:this.state.choice_num,
                        })}
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
                               <p>これが正解だよ。</p>
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
}

//CircleRoi,RectangleRoi用
export class ViewerQuiz extends React.Component {
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
            }else{
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
export class ViewerQuizFreehand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      showResults: false,
                      showExplain: false,
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
                    if(Math.min(ans_st_x,ans_end_x)<x &&
                        x<Math.max(ans_st_x,ans_end_x) &&
                        Math.min(ans_st_y,ans_end_y)<y &&
                        y<Math.max(ans_st_y,ans_end_y)){
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
                            {Answer_check_freehand(
                            {num:this.props.num,
                            dcmdataset:this.props.data,
                            toolState:this.state.toolState,
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

//ArrowAnnotate用
export class ViewerQuizArrowAnnotate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      showResults: false,
                      showExplain: false,
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
