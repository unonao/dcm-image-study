//import { render } from '@testing-library/react';
import React, { Component ,  useState } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
//import { act } from 'react-dom/cjs/react-dom-test-utils.development';


const title0 = function(){
    return(
    <p>心原性脳塞栓症の原因として最も多いものはどれか</p>
)};
const answer_list0 = ['心筋梗塞','心筋症','非弁膜症性心房細動','人工弁','洞不全症候群']
const explain0 = function(){
    return(
    <p>心原性脳塞栓症の原因は非弁膜症性心房細動が最多で、次いで心筋梗塞が多くなっています。</p>
)};

const title1 = function(){
    return(
        <p>脳腫瘍で最も多いのはどれか</p>
)};
const answer_list1 = ['神経膠腫','悪性リンパ腫','髄膜腫','神経鞘腫','下垂体腺腫','頭蓋咽頭腫']
const explain1 = function(){
    return(<p>脳腫瘍で最も多いのは髄膜腫で、全体の1/3程度を占めています。</p>)
};

const title2 = function(){
    return(
        <p> 45歳　男性
            現病歴：午前8時40分に自転車に乗って普段通り出勤。午前9時過ぎ頃に職場で気分不良を訴え発汗・嘔吐あり、救急車で緊急入院。
            既往歴：高血圧症（10年前から検診で指摘されるも無治療）
            家族歴：両親と弟に高血圧
            生活歴：喫煙20本/day、機会飲酒、運動はほとんどしない
            現症：JCSⅡ-10、175cm、86kg、BMI 28.1　体温34.8℃ 血圧235/110 mmHg、脈拍80/min瞳孔左右差なし、対光反射+/+、
            視野障害なしEOM：full and saccadic、右注視性水平性眼振+、明らかな顔面筋麻痺なし、構音障害軽度、舌偏倚なし
            上肢Barre：下垂なし、下肢Mingazzini：下垂なし指鼻指試験：正常、膝踵試験：正常

            疑われるのはどれか
            (画像をクリニックすると画像所見が表示されます。)
        </p>
)};
const answer_list2 = ["異常なし","急性期脳梗塞","くも膜下出血","視床出血","小脳出血","大脳皮質下出血","被殻出血"]
const explain2 = function(){
    return(<p>CT像で右小脳に高信号域が認められ、小脳出血が疑われます。これにより眼振が出現したものと思われます。</p>)
};




const answer = function(answer_list){
    var option_list = [<option value="0">       </option>];
    for(let i=0;i<=answer_list.length-1;i++){
        option_list.push(<option value={String(i+1)}>{answer_list[i]}</option>);
    }
    return option_list
}





export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer: 0,
                      showResults: false,
                    };
      }
    render() {
        function LinkOut({ href, text }) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" className='quiz_link'>
                {text}
                </a>
            );
          }
      return (
        <div className='Quiz_contents'>
            <div>
                {this.props.title}
                {LinkOut({href:this.props.url,
                    text:this.props.text})}
            </div>
            <div className = 'answer_boxies'>
                <label className ="answer_box">解答:</label>
                <select
                    className ="answer_box"
                    onChange={evt =>
                    this.setState({ answer: parseInt(evt.target.value) })
                    }
                    className="form-control"
                    id="active-tool"
                >
                    {answer(this.props.answer_list)}
                </select>
                <button
                    className="body_btn answer_box"
                    type="button"
                    onClick={() => {
                        this.setState({
                            showResults: !this.state.showResults,
                        });
                            }}
                >
                {this.state.showResults ? 'Close' : 'Submit'}
                </button>
            </div>
            <div className='quiz_boolen'>
                { this.state.showResults ===true ?
                (this.state.answer === this.props.answer_num ?
                    <p><span className='true'>〇</span>正解です。</p>
                    :<p><span className='false'>✖</span>不正解です。</p> )
                : null
                }
            </div>
            <div>
                {this.state.showResults ===true ?
                    <div className='quiz_explain'>
                        {this.props.explain}
                    </div>
                : null
                }
            </div>
        </div>
      );
    }
}


class ExamplePageQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {answer: 0,
                      showResults: false,
                    };
    };
    render() {
        return (
        <div className='practice_contents'>
            <div>
                {/* CODE SNIPPET */}
                <h2>Source / Usage</h2>
                <div className="quiz-group">
                    <h3>問題１</h3>
                    <Quiz
                    title = {title0()}
                    answer_list = {answer_list0}
                    answer_num = {3}
                    explain = {explain0()}
                     />
                </div>
                <div className="quiz-group">
                    <h3>問題2</h3>
                    <Quiz
                    title = {title1()}
                    answer_list = {answer_list1}
                    answer_num = {3}
                    explain = {explain1()}
                    />
                </div>
                <div className="quiz-group">
                    <h3>問題3</h3>
                    <Quiz
                    title = {title2()}
                    answer_list = {answer_list2}
                    answer_num = {5}
                    explain = {explain2()}
                    text = '画像'
                    url = {this.props.url[0]}
                    />
                </div>
            </div>
        </div>

    )};
};



export default ExamplePageQuiz;
