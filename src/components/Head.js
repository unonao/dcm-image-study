import React from 'react';
import { storageRef } from '../firebase';


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



function anno_head_image(){
    const path = 'Explanation/Head/anno-head/';
    var anno_head_list = []
    var array = []
    for(let i =0;i<25;i++){
    let fileName = '1_teacher_'+String(i+1)+'.jpg';
    anno_head_list.push(path+fileName);
    array.push(i);
    }
    anno_head_list.forEach((element,index)=>{
        const spaceRef = storageRef.child(element);
        spaceRef.getDownloadURL().then((url) => {
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.responseType = 'arraybuffer';
        xhr.onload = function(event) {
        var blob = xhr.response;
        };
        xhr.open('GET', url,true);
        xhr.send();
        array[index]=url;
       });
    })

    return array
};

export const anno_head = anno_head_image();


function head_MRI_T2W(){
    const path = 'Explanation/Head/head_MRI_T2W/';
    var anno_head_list = []
    var array = []
    for(let i =0;i<25;i++){
    let fileName = '601_'+String(i+1)+'.dcm';
    anno_head_list.push(path+fileName);
    array.push(i);
    }
    anno_head_list.forEach((element,index)=>{
        const spaceRef = storageRef.child(element);
        spaceRef.getDownloadURL().then((url) => {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.responseType = 'arraybuffer';
            xhr.onload = function(event) {
            var blob = xhr.response;
            };
            xhr.open('GET', url,true);
            xhr.send();
        array[index] = 'dicomweb:'+ url
    });
    });
    return array;
};

export const head_mri = head_MRI_T2W();

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

