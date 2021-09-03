export const practice = [{
    "practiceId": '705601001',
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
            'series_id': 1103,
            'series_name': '1103',
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
    "practiceId": '701401002',
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
            'protocol': 'HEAD MRA(1)',
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
            'protocol': 'HEAD MRA(2)',
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
            'protocol': 'HEAD MRA(3)',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 1,
                'length': 15,
            },
        },
    ],

}, {
    "practiceId": '707712001',
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
            'protocol': 'HEAD MRA(1)',
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
            'protocol': 'HEAD MRA(2)',
            'series_info': {
                'path': "/Practice/Head/",
                'start_num': 100,
                'length': 114,
            },
        },
    ],

}, {
    "practiceId": '700800001',
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
    "practiceId": '707711002',
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

}, {
    "practiceId": '0400601001',
    "patientAge": 30,
    "patientSex": "男性",
    "patientInfo": "左胸部に疼痛あり。咳、痰、発熱はなし",
    "site": ['胸部'],
    "disease": ['膿瘍', '腫瘍', '炎症'],
    "findings": ['不正形充実性結節', '壁肥厚'],
    "quiz_list": [
        {
            'quiz_kind': 'ViewerQuizArrowAnnotate',
            'question': '異常部位を指摘して、何が疑われるかを答えてください？',
            'data_series': '2',
            'answer_x': [150, 250],
            'answer_y': [150, 250],
            'answer_z': 12,
            'answer_text': '肺膿瘍、肺癌、肺結核'
        },
    ],
    "series_list": [
        {
            'series_id': 2,
            'series_name': '2',
            'modality': 'CT',
            'protocol': '胸部CT',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 8,
                'length': 62,
            },
        },
    ],
}, {
    "practiceId": '0403911001',
    "patientAge": 80,
    "patientSex": "男性",
    "patientInfo": "喫煙歴30本×30年。",
    "site": ['胸部'],
    "disease": ['肉芽腫', '過誤腫'],
    "findings": ['円形結節', '石灰化'],
    "quiz_list": [
        {
            'quiz_kind': 'Quiz',
            'question': '結節影は良性か悪性か',
            'answer_list': ['良性', '悪性'],
            'answer': 1,
        },
    ],
    "series_list": [
        {
            'series_id': 3,
            'series_name': '3',
            'modality': 'CT',
            'protocol': '胸部CT',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 3,
                'length': 51,
            },
        },
    ],
}, {
    "practiceId": '0403501001',
    "patientAge": 70,
    "patientSex": "男性",
    "patientInfo": "喫煙歴5本×55年間。咳、白い痰があり。",
    "site": ['胸部'],
    "disease": ['腫瘍'],
    "findings": ['陰影'],
    "quiz_list": [
        {
            'quiz_kind': 'Quiz',
            'question': '結節影は良性か悪性か',
            'answer_list': ['良性', '悪性'],
            'answer': 2,
        },
    ],
    "series_list": [
        {
            'series_id': 2,
            'series_name': '0214',
            'modality': 'CT',
            'protocol': '胸部CT(0214)',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 4,
                'length': 60,
            },
        },
        {
            'series_id': 2,
            'series_name': '0618',
            'modality': 'CT',
            'protocol': '胸部CT(0618)',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 8,
                'length': 57,
            },
        },
    ],
}, {
    "practiceId": '0400112001',
    "patientAge": 80,
    "patientSex": "男性",
    "patientInfo": "一年前から喘息で加療中。咳や呼吸困難が続いている。",
    "site": ['胸部'],
    "disease": ['炎症'],
    "findings": ['小葉中心性', '粒状影', '結節影', '浸潤影'],
    "quiz_list": [
        {
            'quiz_kind': 'Quiz',
            'question': '疑われる疾患はなんでしょう？',
            'answer_list': ['間質性肺炎', '気胸', '気管支肺炎', '悪性腫瘍', '肺水腫'],
            'answer': 3,
        },
    ],
    "series_list": [
        {
            'series_id': 2,
            'series_name': '2',
            'modality': 'CT',
            'protocol': '胸部CT',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 4,
                'length': 61,
            },
        },
    ],
}, {
    "practiceId": '0407801001',
    "patientAge": 80,
    "patientSex": "男性",
    "patientInfo": "37度台の発熱。",
    "site": ['胸部'],
    "disease": ['炎症', '肺水腫'],
    "findings": ['びまん性', 'すりガラス影'],
    "quiz_list": [
        {
            'quiz_kind': 'Quiz',
            'question': 'この画像でみられる異常所見は何でしょうか？',
            'answer_list': ['すりガラス影', '網状影', 'バタフライシャドウ', 'カーリーB線', '結節影'],
            'answer': 1,
        },
    ],
    "series_list": [
        {
            'series_id': 3,
            'series_name': '3',
            'modality': 'CT',
            'protocol': '胸部CT',
            'series_info': {
                'path': "/Practice/Thorax/",
                'start_num': 4,
                'length': 58,
            },
        },
    ],
},]