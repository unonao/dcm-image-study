import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import { Header, Footer } from '../App';


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


export const anno_head = [
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_1.jpg?alt=media&token=cc226e5f-41e6-441b-afbf-422f3e9f47c7',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_2.jpg?alt=media&token=e4c006f0-63af-46c8-9526-916b01b96d95',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_3.jpg?alt=media&token=64221f3b-b4c8-4908-bfe3-093f3a7b82a8',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_4.jpg?alt=media&token=3810012f-0033-4dee-9532-654ca4cc8e26',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_5.jpg?alt=media&token=ea848751-b152-4242-89fe-8ea761376454',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_6.jpg?alt=media&token=db95f159-3614-4305-af23-c1d419f3d2ea',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_7.jpg?alt=media&token=c6e674bd-413e-4ca8-b25d-49015a0a52db',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_8.jpg?alt=media&token=b8693579-4fb6-4766-aafc-aa837481a5e6',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_9.jpg?alt=media&token=6f017d9f-a924-4433-9ef2-eab3efe18f1e',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_10.jpg?alt=media&token=a46180c8-655a-4a10-a0e9-5e3f41daea75',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_11.jpg?alt=media&token=02fd2d9a-ab00-4a33-b0a7-e177ed3e2e24',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_12.jpg?alt=media&token=c1e8a381-7597-4d0c-91fa-e7d16f818de5',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_13.jpg?alt=media&token=9c2cea8e-6d6c-413c-aa2f-5f9396fb3af2',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_14.jpg?alt=media&token=ec4d331f-86fd-4fda-9ecc-65ae0a7fc512',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_15.jpg?alt=media&token=0efaf7d1-cafd-40e1-87a2-61f1f39ea6d3',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_16.jpg?alt=media&token=34575977-0f4c-4660-905e-9299c477af97',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_17.jpg?alt=media&token=6d4fdb98-61a4-4b9d-bdaa-3fc02463d003',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_18.jpg?alt=media&token=eecb8952-2c76-4ce5-958e-ad5e5bed375b',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_19.jpg?alt=media&token=04447cc5-f119-4531-b0c3-82a38aac6427',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_20.jpg?alt=media&token=330feab7-d9c3-4f82-ae14-0cbcd31d1ab2',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_21.jpg?alt=media&token=10ab9114-a25a-42d9-972f-f5040da36610',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_22.jpg?alt=media&token=6f466c65-72ea-4867-bce3-fabf137d4144',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_23.jpg?alt=media&token=68a32781-02a7-4027-bc37-ff7ad187ce79',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_24.jpg?alt=media&token=72c4749c-e193-4098-9f40-f390cb7e4f1a',
    'https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fanno-head%2F1_teacher_25.jpg?alt=media&token=fbbb3aa2-e567-4d5c-82d1-d4b165c5ac66']

export const head_mri = [
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_1.dcm?alt=media&token=24cc405a-e2e4-46db-80ef-0410f0b35161',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_2.dcm?alt=media&token=5d297446-e9ec-40ed-b358-029c823cf9dc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_3.dcm?alt=media&token=34c52176-c407-485f-92fc-8f7c7b698977',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_4.dcm?alt=media&token=e9658c20-a675-4fdb-8119-53d2477aece2',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_5.dcm?alt=media&token=bfeca0ef-0f37-4daf-8337-d8353b12287e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_6.dcm?alt=media&token=e9791766-fe05-4a13-bf32-a2e8872a690e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_7.dcm?alt=media&token=ffb915ef-c582-44e8-b8cd-00f05882d11d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_8.dcm?alt=media&token=1fa1a964-b7b6-46b0-9156-35aed87967a7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_9.dcm?alt=media&token=31db56c3-38bb-4116-8ef8-01c7494bf97c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_10.dcm?alt=media&token=d800ec72-9eae-4c1b-be94-51164f645bd9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_11.dcm?alt=media&token=e9ce9681-d30e-45c0-9dc7-483ae912ac73',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_12.dcm?alt=media&token=54bcce5f-7786-40af-9bf0-2996ddd6b27a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_13.dcm?alt=media&token=fa00b2c0-5954-4d02-ba68-886fc0334e62',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_14.dcm?alt=media&token=e4947d3d-a7bc-42cd-9fe9-29903105b1f8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_15.dcm?alt=media&token=09cf649e-09e6-45a9-85f5-f7d4259f80ca',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_16.dcm?alt=media&token=f5213eca-61ff-4df6-a001-77dd0493379d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_17.dcm?alt=media&token=ba7a2b05-46ef-4f70-a437-2cc9b01536be',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_18.dcm?alt=media&token=647e601d-9dcf-45ce-9e39-7e0bd75ad27b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_19.dcm?alt=media&token=f9b08896-e759-48f0-963c-99ace2581793',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_20.dcm?alt=media&token=002c28cd-e2e9-4fe3-bd83-f282f33a53b6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_21.dcm?alt=media&token=c119d467-521f-4ae4-9bcb-d280b0df3b26',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_22.dcm?alt=media&token=96adb38c-2013-4c7e-a94c-582675fa770e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_23.dcm?alt=media&token=d4a7ec82-3ded-45af-b2f4-3ac89b352b8b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_24.dcm?alt=media&token=c4c97b16-fe5f-4b5a-ad1d-a1ee4897b716',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_T2W%2F601_25.dcm?alt=media&token=d4c32c05-9aa3-4db3-86ab-977a19b07b96'];



const img_list = [Head_CT, anno_head, head_mri];

const img_list_name = ['頭部CT', '頭部動脈アノテーション', '頭部MRI']


const get_img = function (img_list, img_list_name) {
    var option_list = [];
    for (let i = 0; i <= img_list.length - 1; i++) {
        option_list.push(<option value={String(i)}>{img_list_name[i]}</option>);
    }
    return option_list
}

class Head extends Component {
    state = {
        activeViewportIndex: 0,
        viewports: [0, 1, 2, 3],
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
        ],
        upper_imageIds: img_list,
        upper_imageNames: img_list_name,
        defaultIndex: 0,
        middle_imageIds: anno_head,
        lower_imageIds: img_list,
        lower_imageNames: img_list_name,
        lowerIndex: 0,
        // FORM
        activeTool: 'Wwwc',
        activeToolIndex: 10,
        imageIdIndex: 0,
        quizIndex: 0,
        isPlaying: false,
        frameRate: 5,
        bigviwer: false,
        style: 'viewers',
    };
    //componentdidmount
    render() {
        return (
            <div className='Head'>
                <div className='Head_contents'>
                    <div>
                        <h2>Viewer</h2>
                        {this.state.bigviwer === false ?
                            <div className='Head_viewer'>
                                {this.state.viewports.map((index) => (
                                    index <= (this.state.upper_imageIds.length - 1) ?
                                        <div className='viewer'
                                            onDoubleClick={() => {
                                                this.setState({
                                                    defaultIndex: index,
                                                    bigviwer: true,
                                                })
                                            }}>
                                            <CornerstoneViewport
                                                key={index}
                                                tools={this.state.tools}
                                                imageIds={this.state.upper_imageIds[index]}
                                                imageIdIndex={this.state.imageIdIndex}
                                                isPlaying={this.state.isPlaying}
                                                frameRate={this.state.frameRate}
                                                activeTool={this.state.activeTool}
                                                setViewportActive={() => {
                                                    this.setState({
                                                        activeViewportIndex: index,
                                                    });
                                                }}
                                            />
                                        </div>
                                        : <div className='viewer'>
                                            viewer{String(index + 1)}
                                        </div>
                                )
                                )}
                            </div> :
                            <div>
                                <CornerstoneViewport
                                    tools={this.state.tools}
                                    style={{ minWidth: '50%', height: '512px', flex: '1' }}
                                    imageIds={this.state.upper_imageIds[this.state.defaultIndex]}
                                    imageIdIndex={this.state.imageIdIndex}
                                    isPlaying={this.state.isPlaying}
                                    frameRate={this.state.frameRate}
                                    activeTool={this.state.activeTool}
                                />
                            </div>}
                        <div>
                            <label htmlFor="image-id-stack">Image ID Stack:</label>
                            <select
                                defaultValue={0}
                                onChange={evt => {
                                    this.setState({
                                        defaultIndex: parseInt(evt.target.value),
                                    });
                                }}
                                className="form-control"
                                id="image-id-stack"
                            >
                                {get_img(this.state.upper_imageIds, this.state.upper_imageNames)}
                            </select>
                            <button
                                type="button"
                                onClick={() => {
                                    this.setState({
                                        bigviwer: !this.state.bigviwer,
                                    });
                                }}
                            >
                                {this.state.bigviwer ? '縮小' : '拡大'}
                            </button>
                        </div>
                        <div>
                            <label>Frame Rate</label>
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
                    <div>
                        <h2>STEP1. 色んなMRIで脳を見てみよう</h2>
                        <div className="basic_sentense">
                            <p>MRI：撮影時に人体内の水素原子核から放出された電波の強弱（信号強度）によって、
                                白黒のコントラストが表現される。黒く写るのは低信号、白く写るのは高信号</p>
                            <p>（T1強調画像とT2強調画像）</p>
                            <p>T1では水は低信号で黒く写る</p>
                            <p>T2では水は高信号で白く写る</p>
                            <h4>（拡散強調画像（DWI））</h4>
                            <p>水分子の拡散運動を画像化したもの
                                拡散が激しい部分は黒く写り（低信号）、
                                拡散が低下した部分は白く写る（高信号）
                                正常な脳では水分子に動きがあるので黒く写るが、
                                急性期の脳梗塞では、梗塞部の水の動きが低下しているので白く写る
                                →急性期脳梗塞の早期診断に有用</p>

                            <h4>（FLAIR画像）</h4>
                            <p>水の信号を抑えたT2強調画像
                                →T2では脳室が白く写るが、FLAIRでは黒く写るため、
                                脳室と接する病変が鮮明に見える
                                →隠れ脳梗塞や慢性期の脳梗塞は白く写り、
                                確認しやすくなる</p>
                        </div>
                    </div>
                    <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        <CornerstoneViewport
                            tools={this.state.tools}
                            style={{ minWidth: '50%', height: '512px', flex: '1' }}
                            imageIds={this.state.middle_imageIds}
                            imageIdIndex={this.state.imageIdIndex}
                            isPlaying={false}
                            frameRate={this.state.frameRate}
                            activeTool={this.state.activeTool}
                        />
                    </div>
                    <div>
                        <h2>STEP2. T2で脳MRIを見てみよう</h2>
                        <div className="basic_sentense">
                            <p>comimg soon</p>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                            <CornerstoneViewport
                                tools={this.state.tools}
                                style={{ minWidth: '50%', height: '512px', flex: '1' }}
                                imageIds={this.state.lower_imageIds[this.state.lowerIndex]}
                                imageIdIndex={this.state.imageIdIndex}
                                isPlaying={false}
                                frameRate={this.state.frameRate}
                                activeTool={this.state.activeTool}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image-id-stack">Image ID Stack:</label>
                            <select
                                defaultValue={0}
                                onChange={evt => {
                                    this.setState({
                                        lowerIndex: parseInt(evt.target.value),
                                        imageIdIndex: 0,
                                    });
                                }}
                                className="form-control"
                                id="image-id-stack"
                            >
                                {get_img(this.state.lower_imageIds, this.state.lower_imageNames)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>STEP3. 脳動脈の走行と灌流領域</h2>
                        <div className="basic_sentense">
                            <p>comimg soon</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Head;
