import React, { Component } from 'react';

import dcmimage1700 from './Head_CT/vhf.1700.dcm';
import dcmimage1701 from './Head_CT/vhf.1701.dcm';
import dcmimage1702 from './Head_CT/vhf.1702.dcm';
import dcmimage1703 from './Head_CT/vhf.1703.dcm';
import dcmimage1704 from './Head_CT/vhf.1704.dcm';
import dcmimage1705 from './Head_CT/vhf.1705.dcm';
import dcmimage1706 from './Head_CT/vhf.1706.dcm';
import dcmimage1707 from './Head_CT/vhf.1707.dcm';
import dcmimage1708 from './Head_CT/vhf.1708.dcm';
import dcmimage1709 from './Head_CT/vhf.1709.dcm';
import dcmimage1710 from './Head_CT/vhf.1710.dcm';
import dcmimage1711 from './Head_CT/vhf.1711.dcm';
import dcmimage1712 from './Head_CT/vhf.1712.dcm';
import dcmimage1713 from './Head_CT/vhf.1713.dcm';
import dcmimage1714 from './Head_CT/vhf.1714.dcm';
import dcmimage1715 from './Head_CT/vhf.1715.dcm';
import dcmimage1716 from './Head_CT/vhf.1716.dcm';
import dcmimage1717 from './Head_CT/vhf.1717.dcm';
import dcmimage1718 from './Head_CT/vhf.1718.dcm';
import dcmimage1719 from './Head_CT/vhf.1719.dcm';
import dcmimage1720 from './Head_CT/vhf.1720.dcm';
import dcmimage1721 from './Head_CT/vhf.1721.dcm';
import dcmimage1722 from './Head_CT/vhf.1722.dcm';
import dcmimage1723 from './Head_CT/vhf.1723.dcm';
import dcmimage1724 from './Head_CT/vhf.1724.dcm';
import dcmimage1725 from './Head_CT/vhf.1725.dcm';
import dcmimage1726 from './Head_CT/vhf.1726.dcm';
import dcmimage1727 from './Head_CT/vhf.1727.dcm';
import dcmimage1728 from './Head_CT/vhf.1728.dcm';
import dcmimage1729 from './Head_CT/vhf.1729.dcm';
import dcmimage1730 from './Head_CT/vhf.1730.dcm';
import dcmimage1731 from './Head_CT/vhf.1731.dcm';
import dcmimage1732 from './Head_CT/vhf.1732.dcm';
import dcmimage1733 from './Head_CT/vhf.1733.dcm';
import dcmimage1734 from './Head_CT/vhf.1734.dcm';

import annoimg1 from './1サンプルv2/1_teacher_1.jpg';
import annoimg2 from './1サンプルv2/1_teacher_2.jpg';
import annoimg3 from './1サンプルv2/1_teacher_3.jpg';
import annoimg4 from './1サンプルv2/1_teacher_4.jpg';
import annoimg5 from './1サンプルv2/1_teacher_5.jpg';
import annoimg6 from './1サンプルv2/1_teacher_6.jpg';
import annoimg7 from './1サンプルv2/1_teacher_7.jpg';
import annoimg8 from './1サンプルv2/1_teacher_8.jpg';
import annoimg9 from './1サンプルv2/1_teacher_9.jpg';
import annoimg10 from './1サンプルv2/1_teacher_10.jpg';
import annoimg11 from './1サンプルv2/1_teacher_11.jpg';
import annoimg12 from './1サンプルv2/1_teacher_12.jpg';
import annoimg13 from './1サンプルv2/1_teacher_13.jpg';
import annoimg14 from './1サンプルv2/1_teacher_14.jpg';
import annoimg15 from './1サンプルv2/1_teacher_15.jpg';
import annoimg16 from './1サンプルv2/1_teacher_16.jpg';
import annoimg17 from './1サンプルv2/1_teacher_17.jpg';
import annoimg18 from './1サンプルv2/1_teacher_18.jpg';
import annoimg19 from './1サンプルv2/1_teacher_19.jpg';
import annoimg20 from './1サンプルv2/1_teacher_20.jpg';
import annoimg21 from './1サンプルv2/1_teacher_21.jpg';
import annoimg22 from './1サンプルv2/1_teacher_22.jpg';
import annoimg23 from './1サンプルv2/1_teacher_23.jpg';
import annoimg24 from './1サンプルv2/1_teacher_24.jpg';
import annoimg25 from './1サンプルv2/1_teacher_25.jpg';


export const head_CT_dicom = [
'dicomweb:' + dcmimage1700,
'dicomweb:' + dcmimage1701,
'dicomweb:' + dcmimage1702,
'dicomweb:' + dcmimage1703,
'dicomweb:' + dcmimage1704,
'dicomweb:' + dcmimage1705,
'dicomweb:' + dcmimage1706,
'dicomweb:' + dcmimage1707,
'dicomweb:' + dcmimage1708,
'dicomweb:' + dcmimage1709,
'dicomweb:' + dcmimage1710,
'dicomweb:' + dcmimage1711,
'dicomweb:' + dcmimage1712,
'dicomweb:' + dcmimage1713,
'dicomweb:' + dcmimage1714,
'dicomweb:' + dcmimage1715,
'dicomweb:' + dcmimage1716,
'dicomweb:' + dcmimage1717,
'dicomweb:' + dcmimage1718,
'dicomweb:' + dcmimage1719,
'dicomweb:' + dcmimage1720,
'dicomweb:' + dcmimage1721,
'dicomweb:' + dcmimage1722,
'dicomweb:' + dcmimage1723,
'dicomweb:' + dcmimage1724,
'dicomweb:' + dcmimage1725,
'dicomweb:' + dcmimage1726,
'dicomweb:' + dcmimage1727,
'dicomweb:' + dcmimage1728,
'dicomweb:' + dcmimage1729,
'dicomweb:' + dcmimage1730,
'dicomweb:' + dcmimage1731,
'dicomweb:' + dcmimage1732,
'dicomweb:' + dcmimage1733,
'dicomweb:' + dcmimage1734,
]



export const anno_head = [
    'http:' + annoimg1,
    'http:' + annoimg2,
    'http:' + annoimg3,
    'http:' + annoimg4,
    'http:' + annoimg5,
    'http:' + annoimg6,
    'http:' + annoimg7,
    'http:' + annoimg8,
    'http:' + annoimg9,
    'http:' + annoimg10,
    'http:' + annoimg11,
    'http:' + annoimg12,
    'http:' + annoimg13,
    'http:' + annoimg14,
    'http:' + annoimg15,
    'http:' + annoimg16,
    'http:' + annoimg17,
    'http:' + annoimg18,
    'http:' + annoimg19,
    'http:' + annoimg20,
    'http:' + annoimg21,
    'http:' + annoimg22,
    'http:' + annoimg23,
    'http:' + annoimg24,
    'http:' + annoimg25,
]


export function head_CT_explain(){
    return (
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
    )
};

