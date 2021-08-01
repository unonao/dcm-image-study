export const practice = [{
    "practiceId": 705601001,
    "patientAge": 80,   // '80代'とか文字列にすると管理が大変だから数値型が良さそう
    "patientSex": "男性",  // 男性か女性かで 0,1 でも良さそうだけど、その他とか不明の場合もある？
    "patientInfo": "トイレで動けなくなり、近位病院に救急受診。本人には当時の記憶なし。",
    "site": ['頭部'],
    "disease": ['アルツハイマー型認知症'],
    "findings": ['側頭葉萎縮'],
    "quiz_list": [     // quiz も種類があるみたいだからそれぞれについてどんなデータが必要なのかまとめたい
        {
            'quiz_kind': 'Quiz', // Quiz, ViewerQuiz, ViewerQuizFreehand,
            'question': '病変部はどこですか？',
            'answer_list': ['橋', '中脳', '扁桃体', '海馬', '小脳'],
            'answer': 4,
            // 選択肢とか答えとか
        },
    ],
    "series_list": [   // モダリティとかの情報をどうやって保持するべきか考える
        {
            'series_id': 405,
            'series_name': '405',
            'modality': 'MR',
            'protocol': 'aT2W TRA SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 26,
            },
        },
        {
            'series_id': 601,
            'series_name': '601',
            'modality': 'MR',
            'protocol': 'aT1W SAG RT SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 160,
            },
        },
        {
            'series_id': 602,
            'series_name': '602',
            'modality': 'MR',
            'protocol': 'aT1W COR RT SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 22,
            },
        },
        {
            'series_id': 1101,
            'series_name': '1101',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 15,
            },
        },
    ],
}, {
    "practiceId": 701401002,
    "patientAge": 60,   // '80代'とか文字列にすると管理が大変だから数値型が良さそう
    "patientSex": "男性",  // 男性か女性かで 0,1 でも良さそうだけど、その他とか不明の場合もある？
    "patientInfo": '口腔癌術後のfollow目的に施行された造影CTで異常を指摘。無症候。',
    "site": ['頭部'],
    "disease": ['脳動脈瘤'],
    "findings": ['突出像'],
    "quiz_list": [     // quiz も種類があるみたいだからそれぞれについてどんなデータが必要なのかまとめたい
        {
            'quiz_kind': 'Quiz', // Quiz, ViewerQuiz, ViewerQuizFreehand, 
            'question': '脳動脈瘤がある部位はどこですか？',
            'answer_list': ['内頸動脈', '中大脳動脈', '前大脳動脈', '後大脳動脈', '椎骨動脈'],
            'answer': 1,
            // 選択肢とか答えとか
        },
    ],
    "series_list": [   // モダリティとかの情報をどうやって保持するべきか考える
        {
            'series_id': 702,
            'series_name': '702',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 3,
            },
        },
        {
            'series_id': 703,
            'series_name': '703',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 15,
            },
        },
        {
            'series_id': 2104,
            'series_name': '2104',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 15,
            },
        },
    ],

}, {
    "practiceId": 707712001,
    "patientAge": 60,   // '80代'とか文字列にすると管理が大変だから数値型が良さそう
    "patientSex": "男性",  // 男性か女性かで 0,1 でも良さそうだけど、その他とか不明の場合もある？
    "patientInfo": '特記事項なし',
    "site": ['頭部'],
    "disease": ['腫瘍'],
    "findings": ['濃染腫瘤', '髄膜肥厚'],
    "quiz_list": [     // quiz も種類があるみたいだからそれぞれについてどんなデータが必要なのかまとめたい
        {
            'quiz_kind': 'Quiz', // Quiz, ViewerQuiz, ViewerQuizFreehand,
            'question': '頭部腫瘍は何でしょう？',
            'answer_list': ['神経膠腫', '神経鞘腫', '下垂体腺腫', '髄膜腫', '髄芽腫'],
            'answer': 4,
            // 選択肢とか答えとか
        },
    ],
    "series_list": [   // モダリティとかの情報をどうやって保持するべきか考える
        {
            'series_id': 1601,
            'series_name': '1601a',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 14,
            },
        },
        {
            'series_id': 1601,
            'series_name': '1601b',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 100,
                'length': 114,
            },
        },
    ],

}, {
    "practiceId": 700800001,
    "patientAge": 50,   // '80代'とか文字列にすると管理が大変だから数値型が良さそう
    "patientSex": "男性",  // 男性か女性かで 0,1 でも良さそうだけど、その他とか不明の場合もある？
    "patientInfo": "主訴：頭痛　約2週間前から右後頭部に重い痛みがあり、耳後部を圧迫すると痛みが増強する。仕事はデスクワークでPCを一日中使用している。",
    "site": ['頭部'],
    "disease": ['動脈解離', '動脈炎'],
    "findings": ['血流腔拡張', '血流腔狭小化', '血管壁肥厚'],
    "quiz_list": [     // quiz も種類があるみたいだからそれぞれについてどんなデータが必要なのかまとめたい
        {
            'quiz_kind': 'ViewerQuiz', // Quiz, ViewerQuiz, ViewerQuizFreehand,
            'question': '主訴の原因と考えられる病変を丸で囲んでください。',
            'tooltype': 'CircleRoi',
            'data_series': '703',
            'answer_x': [150, 250],
            'answer_y': [150, 250],
            'answer_z': 12,

            // 選択肢とか答えとか
        },
    ],
    "series_list": [   // モダリティとかの情報をどうやって保持するべきか考える
        {
            'series_id': 610,
            'series_name': '610',
            'modality': 'MR',
            'protocol': 'aT2 TSE SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 25,
            },
        },
        {
            'series_id': 703,
            'series_name': '703',
            'modality': 'MR',
            'protocol': 'HEAD MRA',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 25,
            },
        },
        {
            'series_id': 903,
            'series_name': '903',
            'modality': 'MR',
            'protocol': '3D NECK MRA SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 15,
            },
        },
    ],
}, {
    "practiceId": 701401002,
    "patientAge": 30,   // '80代'とか文字列にすると管理が大変だから数値型が良さそう
    "patientSex": "女性",  // 男性か女性かで 0,1 でも良さそうだけど、その他とか不明の場合もある？
    "patientInfo": '主訴：頭痛、めまい。進行性の両目の視力低下口腔癌術後のfollow目的に施行された造影CTで異常を指摘。無症候。',
    "site": ['頭部'],
    "disease": ['腫瘍'],
    "findings": ['腫瘤影', 'flow void', '浮腫性変化', '視神経圧排'],
    "quiz_list": [     // quiz も種類があるみたいだからそれぞれについてどんなデータが必要なのかまとめたい
        {
            'quiz_kind': 'Quiz', // Quiz, ViewerQuiz, ViewerQuizFreehand, 
            'question': '主訴の原因と考えられる疾患は何ですか？',
            'answer_list': ['神経膠腫', '神経鞘腫', '下垂体腺腫', '髄膜腫', '髄芽腫'],
            'answer': 4,
            // 選択肢とか答えとか
        },
    ],
    "series_list": [   // モダリティとかの情報をどうやって保持するべきか考える
        {
            'series_id': 301,
            'series_name': '301',
            'modality': 'MR',
            'protocol': 'DWI EPI SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 76,
                'length': 25,
            },
        },
        {
            'series_id': 501,
            'series_name': '501',
            'modality': 'MR',
            'protocol': 'aT2 TSE SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 25,
            },
        },
        {
            'series_id': 510,
            'series_name': '510',
            'modality': 'MR',
            'protocol': 'T1W TRA BH SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 25,
            },
        },
        {
            'series_id': 602,
            'series_name': '602',
            'modality': 'MR',
            'protocol': 'T1W COR SENSE',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 83,
            },
        },
    ],

}]