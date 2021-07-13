import React from 'react';
import { storageRef } from '../firebase';

export const Head_CT = [
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_1.dcm?alt=media&token=356efa99-ba50-4143-a7e4-424a7c84f230',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_2.dcm?alt=media&token=cbd338e4-e99b-45b5-98ec-562450c5e6e1',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_3.dcm?alt=media&token=924ad333-a7dc-45bd-82a1-b5d8dd40de6c',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_4.dcm?alt=media&token=762341f9-ca03-4969-9916-4f8a043df484',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_5.dcm?alt=media&token=f508a0eb-ed4c-44f3-af87-feae47c4ba1a',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_6.dcm?alt=media&token=2869d695-1fda-46e6-a996-679e5b2b1e5b',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_7.dcm?alt=media&token=0b057511-11dd-4d58-88fb-239e2bcfaccd',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_8.dcm?alt=media&token=6ce017c2-13e4-4c2e-bcbe-0265ab3625b7',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_9.dcm?alt=media&token=703e9cb4-397f-47cb-a4f2-ece37bffdf98',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_10.dcm?alt=media&token=fb8fae26-3297-473c-9909-b341c542ed49',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_11.dcm?alt=media&token=be0f9110-425a-4e49-8e13-18632023d828',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_12.dcm?alt=media&token=99f43535-676e-4f94-ae3d-239484a579a9',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_13.dcm?alt=media&token=e5cd1255-78a1-4cfa-9dbb-bee46979826e',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_14.dcm?alt=media&token=614e006b-d7a7-41e7-a906-e901a6110273',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_15.dcm?alt=media&token=89d06bfc-d66b-4164-bb4b-5bce38abab30',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_16.dcm?alt=media&token=b31adfdb-b79f-412a-b7d7-707ec6830c36',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_17.dcm?alt=media&token=9cd2bf97-16ce-4716-8f69-f1bb491a34d8',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_18.dcm?alt=media&token=40607fe4-151b-4003-822d-affafeeaa4c8',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_19.dcm?alt=media&token=c50529e5-1127-4c66-aeae-8cbee3db1914',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_20.dcm?alt=media&token=88f531c5-7bd7-4b72-a298-4c2e7acb3b0f',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_21.dcm?alt=media&token=7ef20c1b-db68-4002-8ef4-b08cf217a6cf',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_22.dcm?alt=media&token=28741c23-d2f3-46b6-9e39-aabfe4361e82',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_23.dcm?alt=media&token=e8894bdc-8b3e-48c9-9419-8a6f33614a96',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_24.dcm?alt=media&token=2cfa77e6-17c8-465b-b8e9-bb410b7de234',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_25.dcm?alt=media&token=e2a2b120-f0b2-4efd-8e3b-599cd965c3ee',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_26.dcm?alt=media&token=dcf58b05-994e-4e64-beb3-dd4017764bd9',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_27.dcm?alt=media&token=2b78a9f9-5530-4de4-a07e-759e752bfe07',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_28.dcm?alt=media&token=642aaf20-70f0-4a07-8331-8ccab63cd494',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_29.dcm?alt=media&token=838b1165-3f9d-474e-ac2b-919169fbedb8',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_30.dcm?alt=media&token=7545c863-ccd5-4db5-bc58-f616bdf676af',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_31.dcm?alt=media&token=d6eb9e8e-5754-4b91-a1f1-0747c3d5c34d',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_32.dcm?alt=media&token=64d4beb1-3967-47fe-a3b5-f5cce09d936d',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_33.dcm?alt=media&token=e851908d-00ea-4f29-b842-e67581ebbed1',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_34.dcm?alt=media&token=b0aa43c4-a6ca-4c3f-8c4f-571179901352',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_35.dcm?alt=media&token=291de5a6-21bf-432c-a2df-e66725844afc',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_36.dcm?alt=media&token=343cfc26-9dfb-4769-abdb-b6975767241d',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_37.dcm?alt=media&token=20eb870f-3530-4ab2-bcad-12768de398e7',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_38.dcm?alt=media&token=b3185be3-e48c-46ef-88f8-6c85b0645dfc',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_39.dcm?alt=media&token=91410fbf-095e-4297-a006-d7b7b950debf',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_40.dcm?alt=media&token=21a70eaf-9c76-4dc9-85ff-d0bcd61c33ff',
'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2FHead_CT%2F2_41.dcm?alt=media&token=94ff2582-2ecf-4346-8e9b-c123b7d22b6a']

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

