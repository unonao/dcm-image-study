import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';

//const Head_CT =Get_Dicom_Image('/Explanation/Head/Head_CT/','2_',1,41)

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


const head_dwi = [
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_76.dcm?alt=media&token=a8855f8f-4c2e-1aa9-63b11fdc7c1b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_77.dcm?alt=media&token=03908b3a-8d03-4ed0-f33cdd92cc67',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_78.dcm?alt=media&token=a6ef1e9f-68c9-878e-bbdd03db74b0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_79.dcm?alt=media&token=c1ccc749-6f46-7fa2-5cc8543de2af',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_80.dcm?alt=media&token=6c2818c3-8ada-6d87-f69ce6a876a6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_81.dcm?alt=media&token=acad51f3-0fbf-9b12-88231ba48a41',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_82.dcm?alt=media&token=bb46c98d-2485-2618-9c3f00e76a24',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_83.dcm?alt=media&token=17baa855-4d9a-6a95-a6b02f7cbf17',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_84.dcm?alt=media&token=3040e7ce-d558-1d3f-9a913a837b22',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_85.dcm?alt=media&token=2d8f0e33-cff6-cae1-96da79067f05',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_86.dcm?alt=media&token=e43e2ee2-9f36-a3b3-8baa2576a925',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_87.dcm?alt=media&token=56ed675c-4d93-8650-58d7fbbd2c6c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_88.dcm?alt=media&token=5d10343b-9eb5-5935-73237364cc43',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_89.dcm?alt=media&token=c10cfe1a-b254-590d-5445bb545353',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_90.dcm?alt=media&token=842c37fb-8c0d-f8be-51652b4196de',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_91.dcm?alt=media&token=8e4bc750-ecc7-a8e9-531c959d58d6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_92.dcm?alt=media&token=f2e9719f-36b2-a4fe-56987252e702',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_93.dcm?alt=media&token=30d300ae-b8b8-2bd9-6b2ab77e45d7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_94.dcm?alt=media&token=ed2de3b7-a8b2-a454-3780a21c4d6b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_95.dcm?alt=media&token=609adbe5-d3ee-8625-b285b3ccfcfe',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_96.dcm?alt=media&token=6390335a-96e0-9561-1bf0c3e7f8f2',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_97.dcm?alt=media&token=e76921a7-f574-fafc-0ea202554182',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_98.dcm?alt=media&token=fdc21b4c-107d-5f5e-72e1dd18bcaa',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_99.dcm?alt=media&token=6315d4fb-ccb8-4a52-1ef66046275b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F501b%2F501_100.dcm?alt=media&token=3e2305bb-1cef-2910-e94f7c3c678a'
]
const head_t2w = [
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_1.dcm?alt=media&token=837217de-478a-d18f-67e42b2830fb',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_2.dcm?alt=media&token=be3e0b11-1f2a-253f-458e1ad73f92',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_3.dcm?alt=media&token=9ce12d0a-a0ce-44f5-9a8f407863c7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_4.dcm?alt=media&token=241dd3ee-b424-4bab-38aa9f88bcb4',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_5.dcm?alt=media&token=65e04809-a4f6-eaa4-78bf203a6286',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_6.dcm?alt=media&token=92f82077-c8dd-9401-e7382f593e53',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_7.dcm?alt=media&token=0492ac8d-4fe4-1880-229b0257f8db',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_8.dcm?alt=media&token=12dd8a61-6726-3cb1-2b2e59ea2f3e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_9.dcm?alt=media&token=3aef67d6-8616-c322-16323cd327a6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_10.dcm?alt=media&token=8991f78c-0851-70de-e548d27f0769',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_11.dcm?alt=media&token=dbb3470f-a6ec-2e75-9cbae7c94623',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_12.dcm?alt=media&token=f46b30c5-c407-4682-e3e70809499d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_13.dcm?alt=media&token=c00d1583-2772-2994-957f12ac820e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_14.dcm?alt=media&token=f14f6944-2ecf-1d83-3e8de1aa4db1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_15.dcm?alt=media&token=9e0aff30-cf4b-7935-7e60bc4974c8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_16.dcm?alt=media&token=152b4d46-93a8-5630-c187c5da7cd1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_17.dcm?alt=media&token=a0849e0f-4307-1a83-310ab21e8f88',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_18.dcm?alt=media&token=411d9585-d2bb-b3a7-2d8240477d20',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_19.dcm?alt=media&token=e3d3b9ce-bf5d-bd21-b7b4f90be69c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_20.dcm?alt=media&token=519b99af-57cc-5e27-bf11ebcccc48',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_21.dcm?alt=media&token=3960b8d2-141e-5314-d43e4d84ef0c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_22.dcm?alt=media&token=4c8abd07-271c-6953-1b4a4ef24979',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_23.dcm?alt=media&token=9970102a-90a6-659b-89f10beeeef1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_24.dcm?alt=media&token=ceee7eaa-434f-2d65-c8a696f96600',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F601%2F601_25.dcm?alt=media&token=06406b3f-df35-e9e2-188ac5055caf'
]
const head_flair = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_1.dcm?alt=media&token=4a4a7116-1e46-d518-2687033dabe9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_2.dcm?alt=media&token=8d343d6f-b25c-98cb-aaf2a8840c5d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_3.dcm?alt=media&token=2f2d9175-9118-2098-7c3f62762736',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_4.dcm?alt=media&token=7335c6bd-2c31-4825-359e267b6ea2',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_5.dcm?alt=media&token=d5e1f7c0-3af6-7d31-b14067c4c85a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_6.dcm?alt=media&token=e4d0bb1c-a9e4-569c-e37cd1e865f0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_7.dcm?alt=media&token=3ce29906-6064-a6bf-b524fd4e8340',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_8.dcm?alt=media&token=bd7955c3-58c4-1bd0-3cea3f58914b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_9.dcm?alt=media&token=35a1b5f6-32d2-f5d1-f1f53b3111b3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_10.dcm?alt=media&token=f7d99547-a212-5ee3-5cbbf981d68c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_11.dcm?alt=media&token=63d98b54-0934-5631-5fc9746bed01',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_12.dcm?alt=media&token=2cfaa491-d849-8bd0-ec73227dd332',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_13.dcm?alt=media&token=b1d502c1-f25d-918d-aee1f58c659d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_14.dcm?alt=media&token=0c371e13-ec88-679b-8738fc0014e1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_15.dcm?alt=media&token=dd79c769-7de8-25cb-ebdf5a08ca8c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_16.dcm?alt=media&token=f66000d2-7495-c99f-ad08127d5fe6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_17.dcm?alt=media&token=55dcb57f-8546-4c3d-3f6c225f6200',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_18.dcm?alt=media&token=487cf183-8948-8d15-a79502a90834',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_19.dcm?alt=media&token=925da44d-b0fe-243f-13d5e6f21093',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_20.dcm?alt=media&token=fde55cc1-7f71-71a9-150c4e4ee4a6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_21.dcm?alt=media&token=70702215-1422-b262-317cc9a872b8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_22.dcm?alt=media&token=e583680a-4fe9-3a76-2c4724a0ee0c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_23.dcm?alt=media&token=b31bf36c-8abb-af2b-2aa4a0e331bb',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_24.dcm?alt=media&token=f3513108-27fc-9632-a6356f4df142',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F610%2F610_25.dcm?alt=media&token=2b66e190-ad18-96b7-1ee79a7c26d5']
const head_t1w = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_1.dcm?alt=media&token=fc7d96c6-ac6b-9f0c-badd55ac3119',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_2.dcm?alt=media&token=c798c82d-a102-a938-88133239314b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_3.dcm?alt=media&token=759d9df9-f646-af61-07d7b1139ae7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_4.dcm?alt=media&token=7f99cb3f-d833-4b5d-645cc5e8948a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_5.dcm?alt=media&token=2b67d69a-849c-1033-5b89c8da32ae',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_6.dcm?alt=media&token=98b4a35e-ed94-3bce-a7d5febb654a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_7.dcm?alt=media&token=d426b9f0-a497-bd2b-bd826192d824',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_8.dcm?alt=media&token=bc834fd0-81cb-6cc1-935f2f8749b0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_9.dcm?alt=media&token=c3722a29-135a-e697-b978326a036d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_10.dcm?alt=media&token=0947c609-a516-852d-64968855711e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_11.dcm?alt=media&token=8f610678-6ea3-0617-ce5df18d4be9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_12.dcm?alt=media&token=7d7ad47b-d360-d366-04ac3e8748be',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_13.dcm?alt=media&token=2d4aac96-40ff-18c5-f6bf399624f6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_14.dcm?alt=media&token=60b83daf-6481-1151-82b253336dd6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_15.dcm?alt=media&token=a0de9a39-461d-66f1-61622b545cdd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_16.dcm?alt=media&token=863723d4-2a5a-6121-359222ca4236',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_17.dcm?alt=media&token=a8bb1fde-e81e-e144-9a818e669f8f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_18.dcm?alt=media&token=a73995a7-8c93-e8f6-1f2660d4e908',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_19.dcm?alt=media&token=921f24b2-6f20-032f-5ca39c237315',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_20.dcm?alt=media&token=bfdfd58c-4313-3bef-ee6811a2af20',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_21.dcm?alt=media&token=204f5c3f-67d9-412e-d7447027156a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_22.dcm?alt=media&token=16b319ba-030a-0388-4917df1c789d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_23.dcm?alt=media&token=2a6515c9-6144-5f7e-ae3e4f169e9b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_24.dcm?alt=media&token=16773249-a4bb-86a8-6317a148ec5c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F630%2F630_25.dcm?alt=media&token=a0b98a75-4a13-a40d-a498ad058ffa']
const head_mra1 = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_1.dcm?alt=media&token=7cc88c0d-6876-b2e2-ff6cff4a4403',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_2.dcm?alt=media&token=33128dba-3ac3-50ad-d1d76799fb69',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_3.dcm?alt=media&token=87402ce2-8d4e-ef58-bffd6230b403',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_4.dcm?alt=media&token=38178459-cf68-e8cd-de9cf5fd377c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_5.dcm?alt=media&token=5dd337b6-71ee-cf7a-444180051476',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_6.dcm?alt=media&token=c35abd07-8df5-7183-b86e198e36f8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_7.dcm?alt=media&token=a2529a3f-011e-c1f0-be94430b138f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_8.dcm?alt=media&token=ce8ba601-c777-cd2f-d5362e8c03c0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_9.dcm?alt=media&token=bd266571-7416-94d5-e8017dcca40f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_10.dcm?alt=media&token=42a61034-f46f-e5da-6c4a10f3f3da',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_11.dcm?alt=media&token=2710c05f-56c2-274a-3c36cde4f43f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_12.dcm?alt=media&token=25b6caa1-35f2-be69-a511aa1b2fc6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_13.dcm?alt=media&token=2e76545a-ae6e-0f7b-ed691d1f8e56',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_14.dcm?alt=media&token=67eafae1-8e30-7a6b-ab93be03df44',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F705%2F705_15.dcm?alt=media&token=9087a26b-3b4a-d25a-e8237e9e9f07']
const head_mra2 = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_1.dcm?alt=media&token=a876591f-38e7-b137-932687dd818f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_2.dcm?alt=media&token=41ec258e-5c89-ab32-dd7b5b0e6cb7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_3.dcm?alt=media&token=f91b1060-638d-617a-3c99f0b04c5f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_4.dcm?alt=media&token=9de35d2a-4c13-3e83-c5bcf31ecd75',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_5.dcm?alt=media&token=d47a04c1-b3b1-0912-fe8497133c7c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_6.dcm?alt=media&token=5330c77c-074e-414d-a520742af41a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_7.dcm?alt=media&token=856b6c5c-cea8-7d07-d849f51a5f65',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_8.dcm?alt=media&token=d73d1bf2-0ab6-190b-9b7a6c206c6c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_9.dcm?alt=media&token=7e68b251-9a57-2dd5-77eb0c443404',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_10.dcm?alt=media&token=cbe9a7a9-05ff-db54-6c894b549cbd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_11.dcm?alt=media&token=a9e686e9-3053-67cd-59d2532070e7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_12.dcm?alt=media&token=b10bef73-f1aa-5547-2c4d7d55a393',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_13.dcm?alt=media&token=f7bd15bc-5253-07d1-5975ac77f50b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_14.dcm?alt=media&token=c24c1a1c-238a-1d19-691c1051b501',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F706%2F706_15.dcm?alt=media&token=614601d2-a9eb-caae-6a84a72e0994']
const head_mra3 = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_1.dcm?alt=media&token=3b648d89-b30e-de52-681c96c9ee95',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_2.dcm?alt=media&token=c752ce8a-d32e-f0cb-85456c0ff138',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_3.dcm?alt=media&token=922489dd-d6e6-d15f-39abd148e25d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_4.dcm?alt=media&token=43192dce-75e5-c5a7-ae6897f3174e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_5.dcm?alt=media&token=256c794e-37d6-d778-37b6abcb8a4a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_6.dcm?alt=media&token=34d53afc-6b6e-6923-284141263422',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_7.dcm?alt=media&token=3d76c668-1930-72e1-7d8d9e40eefd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_8.dcm?alt=media&token=01670777-e793-f066-7519ff35d79b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_9.dcm?alt=media&token=5ae0399e-a362-58be-85bec37db2d9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_10.dcm?alt=media&token=11a79287-a0de-1e3a-00785b703c1c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_11.dcm?alt=media&token=ed7c94e2-8fd6-e58c-5dfae4dfa8ce',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_12.dcm?alt=media&token=396c240c-7662-26e7-bf38b38ae627',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_13.dcm?alt=media&token=58bf2e33-2bcc-98b4-1757af78e938',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_14.dcm?alt=media&token=cfc35cb9-6f52-4853-5062469c6712',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FHead%2Fhead_MRI_female%2F707%2F707_15.dcm?alt=media&token=21f9e1ba-d927-fc61-7d0d46690a7c']

const img_list1 = [head_t1w, head_t2w, head_flair, head_dwi]
export const img_list = [Head_CT, anno_head, head_mri];
const img_list2 = [head_mra1, head_mra2, head_mra3]

const img_list_name1 = ['sT1W SE CLEAR', 'aT2 TSE SENSE', 'HEAD FLAIR TSE SENSE', 'DWI EPI SENSE']
export const img_list_name = ['頭部CT', '頭部動脈アノテーション', '頭部MRI']
const img_list_name2 = ['3D HEAD MRA 1', '3D HEAD MRA 2', '3D HEAD MRA 3']


const get_img = function (img_list, img_list_name) {
    var option_list = [];
    for (let i = 0; i <= img_list.length - 1; i++) {
        option_list.push(<option value={String(i)}>{img_list_name[i]}</option>);
    }
    return option_list
}

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            upper_imageIds: img_list1,
            upper_imageNames: img_list_name1,
            imageIndex: 0,
            defaultIndex: 0,
            middle_imageIds: anno_head,
            lower_imageIds: img_list2,
            lower_imageNames: img_list_name2,
            lowerIndex: 0,
            // FORM
            activeTool: 'Wwwc',
            activeToolIndex: 10,
            upper_imageIdIndex: 0,
            imageIdIndex: 0,
            quizIndex: 0,
            isPlaying: false,
            frameRate: 5,
            bigviwer: false,
            style: 'viewers',
        };
    };
    //componentDidMount(){
    //this.setstate({middle_imageIds: Head_CT})
    //}
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
                                                    bigviwer: !this.state.bigviwer,
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
                        <div className="form-group">
                            <label htmlFor="image-id-index">Image ID Index:</label>
                            <input
                                type="range"
                                min="0"
                                max={this.state.upper_imageIds[0].length - 1}
                                value={this.state.upper_imageIdIndex}
                                onChange={evt =>
                                    this.setState({ upper_imageIdIndex: parseInt(evt.target.value) })
                                }
                                className="form-control"
                                id="image-id-index"
                            ></input>
                            <input
                                type="number"
                                min="0"
                                max={this.state.upper_imageIds[0].length - 1}
                                value={this.state.upper_imageIdIndex + 1}
                                onChange={evt => {
                                    const maxid = this.state.upper_imageIds[0].length - 1
                                    const imageIdInput = parseInt(evt.target.value);
                                    const imageIdIndex = Math.max(Math.min(imageIdInput, maxid), 0);

                                    this.setState({ upper_imageIdIndex: imageIdIndex });
                                }}
                                className="form-control"
                                id="image-id-index"
                            ></input>
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
