import React from 'react';
import { mklist } from '../parts/mklist';
import './PracticeQuiz.css'

export class PracticeQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizports: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            quiz: this.props.quiz_list,
            quizIndex: 0,
            quizstylelist: mklist('question_num', this.props.quiz_list.length)
        }
    }
    render() {
        return (
            <div className='metadata_box'>
                <div className='Numbers'>
                    <label htmlFor="active-tool">No.</label>
                    <div className='question_nums'>
                        {this.state.quizports.map((index) => (
                            index <= (this.state.quiz.length - 1) ?
                                <div className={this.state.quizstylelist[index]}
                                    key={index}
                                    onClick={() => {
                                        var quizstylelist = mklist('question_num', this.state.quiz.length)
                                        quizstylelist[index] = 'question_num_click';
                                        this.setState({
                                            quizIndex: index,
                                            quizstylelist: quizstylelist,
                                        });
                                    }}>
                                    {index + 1}
                                </div>
                                : null
                        ))}
                    </div>
                </div>
                {this.state.quiz[this.state.quizIndex]}
            </div>
        )
    }

}

