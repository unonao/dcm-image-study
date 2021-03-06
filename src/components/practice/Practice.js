import React from 'react';
import PracticeViewer from './PracticeViewer';
import { practice } from './PracticeData';
import { Get_Dicom_Image } from '../../UseStorage';
import { Quiz, ViewerQuiz, ViewerQuizFreehand, ViewerQuizArrowAnnotate } from '../ExamplePageQuiz';


export default function Practice(props) {
    const productById = id => practice.find(product => product.practiceId === id);
    const practiceId = props.match.params.practiceId;

    const product = productById(practiceId)
    const patientInfo = product.patientInfo
    const sex = product.patientSex
    const age = product.patientAge
    const expUrl = product.expUrl

    const img_list = []
    const protocol_list = []
    const img_dict = {}
    const images = product.series_list
    images.forEach((series, index) => {
        const series_name = series.series_name
        const series_id = series.series_id
        const protocol = series.protocol
        const path_head = series.series_info.path
        const start_num = series.series_info.start_num
        const length = series.series_info.length
        const path = path_head + practiceId + '/' + series_name + '/'
        const image = Get_Dicom_Image(path, series_id, start_num, length)
        img_list[index] = image
        protocol_list[index] = protocol
        img_dict[series_name] = index
    })

    const quiz_list = []
    const quizes = product.quiz_list
    quizes.forEach((quiz, index) => {
        const kind = quiz.quiz_kind
        if (kind === 'Quiz') {
            const question = quiz.question
            const answer_list = quiz.answer_list
            const answer = quiz.answer
            quiz_list[index] =
                <Quiz answer_num={answer} text={question} answer_list={answer_list} expUrl={expUrl}></Quiz>
        }
        if (kind === 'ViewerQuiz') {
            const question = quiz.question
            const tooltype = quiz.tooltype
            const data_series = quiz.data_series
            const answer_data = img_dict[data_series]
            const answer_x = quiz.answer_x
            const answer_y = quiz.answer_y
            const answer_z = quiz.answer_z
            quiz_list[index] =
                <ViewerQuiz num={answer_z} text={question} data={img_list[answer_data]} tooltype={tooltype}
                    ans_st_x={answer_x[0]} ans_st_y={answer_y[0]} ans_end_x={answer_x[1]} ans_end_y={answer_y[1]}
                    expUrl={expUrl}></ViewerQuiz>
        }
        if (kind === 'ViewerQuizFreehand') {
            const question = quiz.question
            const data_series = quiz.data_series
            const answer_data = img_dict[data_series]
            const answer_x = quiz.answer_x
            const answer_y = quiz.answer_y
            const answer_z = quiz.answer_z
            quiz_list[index] =
                <ViewerQuizFreehand num={answer_z} text={question} data={img_list[answer_data]}
                    ans_st_x={answer_x[0]} ans_st_y={answer_y[0]} ans_end_x={answer_x[1]} ans_end_y={answer_y[1]}
                    expUrl={expUrl}></ViewerQuizFreehand>
        }
        if (kind === 'ViewerQuizArrowAnnotate') {
            const question = quiz.question
            const answer_text = quiz.answer_text
            const data_series = quiz.data_series
            const answer_data = img_dict[data_series]
            const answer_x = quiz.answer_x
            const answer_y = quiz.answer_y
            const answer_z = quiz.answer_z
            quiz_list[index] =
                <ViewerQuizArrowAnnotate num={answer_z} text={question} data={img_list[answer_data]}
                    ans_st_x={answer_x[0]} ans_st_y={answer_y[0]} ans_end_x={answer_x[1]} ans_end_y={answer_y[1]} ans_text={answer_text}
                    expUrl={expUrl}></ViewerQuizArrowAnnotate>
        }
    })

    const Practice = <PracticeViewer img_list={img_list} protocol_list={protocol_list} text={patientInfo} quiz_list={quiz_list} patientInfo={[practiceId, String(age) + '???', sex]} />


    return (
        <div className="container">
            {Practice}
        </div>
    );
}