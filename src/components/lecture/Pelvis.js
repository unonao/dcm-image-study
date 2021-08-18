import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';
import { Get_Dicom_Image } from '../../UseStorage';


const pelvis_mt2sag = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_1.dcm?alt=media&token=77d471f2-70d5-144e-f77c3a5f42bf',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_2.dcm?alt=media&token=b5ba42d8-4170-74f2-2619c71fb544',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_3.dcm?alt=media&token=5838a4b0-d15a-33aa-d6407e9363e7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_4.dcm?alt=media&token=a189da77-7dcc-d51b-4aaffe03105c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_5.dcm?alt=media&token=662caf13-7421-0e7e-e4486ab741ef',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_6.dcm?alt=media&token=0c225b17-e585-df64-395ea3c07353',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_7.dcm?alt=media&token=3239c72c-ec8f-cd95-192f19f7edb0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_8.dcm?alt=media&token=174df485-b552-0c9a-e9f0f330c522',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_9.dcm?alt=media&token=4caa9b50-b4f2-a4f8-e815bd74cab9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_10.dcm?alt=media&token=ed684fbe-fb63-3500-fe74bb91b823',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_11.dcm?alt=media&token=6925eb88-d29c-ab5b-bb1bbebc3bdd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_12.dcm?alt=media&token=0c30d2f0-1354-fc44-d1eaec9a955a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_13.dcm?alt=media&token=a5920cf4-0218-a0aa-6a03b0247e4c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_14.dcm?alt=media&token=c89461d5-7930-ebe9-19ce29f2bbce',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_15.dcm?alt=media&token=a51dad26-2c01-594f-80f5193698ee',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_16.dcm?alt=media&token=2854209d-86a1-4a35-1158bf6ab96b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_17.dcm?alt=media&token=4f252f2b-e40e-a357-63e62ea9f713',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_18.dcm?alt=media&token=851cb4bd-4cd9-856d-8deb034b3c9b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_19.dcm?alt=media&token=25efdaea-7c72-c248-6dfe0ca5255d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_20.dcm?alt=media&token=6cb75e38-8336-c5b9-24b4ab8801c5',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_21.dcm?alt=media&token=702473b9-4bed-c7ae-a9bb88038a9d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_22.dcm?alt=media&token=e8b03b10-9f0b-cf6b-74ea08a49532',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_23.dcm?alt=media&token=85326144-5a72-26ba-f6d964efc402',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_24.dcm?alt=media&token=acc5008d-d065-d002-a1f4912662b3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_25.dcm?alt=media&token=413d9e3a-ae9b-1654-f7f99c67aaf1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_26.dcm?alt=media&token=b7e3fa48-15f5-e2d7-ce40c7fdb2e0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_27.dcm?alt=media&token=1b6ae52c-ac21-e6b6-bcf21b5e248e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_28.dcm?alt=media&token=ce167ebd-aa46-fd49-0169942d0ed3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_29.dcm?alt=media&token=e6eb06c4-b16a-4179-32fb34130462',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F701%2F701_30.dcm?alt=media&token=98073b96-880e-3dce-7e4e00113873']
const pelvis_mt2hor = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_1.dcm?alt=media&token=09eb344d-d520-5cc2-5fb391ba81e7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_2.dcm?alt=media&token=04cc90d2-9288-8adc-0b6b1616b832',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_3.dcm?alt=media&token=bac35199-5ca3-1cd0-eececd675878',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_4.dcm?alt=media&token=13efb77e-8879-a80b-663fb54f705e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_5.dcm?alt=media&token=f5c2f87e-5681-fe0d-273a8132f8f8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_6.dcm?alt=media&token=37140f36-4975-3d5d-7c8f45d19271',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_7.dcm?alt=media&token=e2939212-a280-53f8-122323f36a1a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_8.dcm?alt=media&token=affb67d4-7c87-9eec-d2f0c949d8f3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_9.dcm?alt=media&token=e9f1a83e-bb29-c48f-f291424002c6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_10.dcm?alt=media&token=ac118f32-c70f-5bf5-688187a8fb26',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_11.dcm?alt=media&token=751edd99-f9f7-51e4-1d178e6d0ae3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_12.dcm?alt=media&token=d83c0b90-0327-e90d-795c888285f8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_13.dcm?alt=media&token=7d399ab0-d2ca-8c90-67e630fc8609',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_14.dcm?alt=media&token=eea9a6cd-bb22-a28f-dfc1bccd7ce6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_15.dcm?alt=media&token=2f63b802-92ee-8e3d-692319115ee9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_16.dcm?alt=media&token=795c0a4a-00f4-d4a1-1dcc12c3c1d2',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_17.dcm?alt=media&token=27247892-a896-a8f6-79adb6682b19',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_18.dcm?alt=media&token=aab8d6d2-0c8f-8e1d-159d8dd2fb2d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_19.dcm?alt=media&token=671d37f8-3c5a-fb4f-ce4c0d3a2b5f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_20.dcm?alt=media&token=6e388cf9-bea6-a95f-1f6b953d2735',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_21.dcm?alt=media&token=4026e529-1c39-42c3-7243918c36c3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_22.dcm?alt=media&token=f38b912f-bf10-f9f2-fac40a15518d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_23.dcm?alt=media&token=76cdf6c1-0963-414f-38299ed41204',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_24.dcm?alt=media&token=a37d53e2-060e-2f5f-70498035199a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_25.dcm?alt=media&token=568c5407-7f81-9d61-c42751836183',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_26.dcm?alt=media&token=8333e74f-a1fd-8a15-39325d91c7f4',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_27.dcm?alt=media&token=7de3350c-2f26-d0df-ee7bd328acec',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_28.dcm?alt=media&token=08342867-d02b-a606-7d4e0a59002d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_29.dcm?alt=media&token=583037de-e7e9-02e1-b8a419a3d990',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_30.dcm?alt=media&token=1b14a729-181a-7082-bb79c382ab77',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_31.dcm?alt=media&token=16e3c878-8689-e85c-f9ab39b83594',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_32.dcm?alt=media&token=32bf9f4f-eee6-f19f-64c3d2888e65',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_33.dcm?alt=media&token=7383b821-bda7-2d7c-c92560cce8f9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_34.dcm?alt=media&token=c5325018-0c06-62f5-f585e5f0c900',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_35.dcm?alt=media&token=9f390d66-9afc-a95a-0bfe8ccb1e1c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_36.dcm?alt=media&token=121482c8-6b9e-78c8-901d8a5d8def',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_37.dcm?alt=media&token=e18a4fc5-6f70-c104-d203b8f9aac8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_38.dcm?alt=media&token=e878f779-f57b-08f7-a17b46d30e11',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_39.dcm?alt=media&token=71c78277-1d49-029d-6089ef12bf19',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_40.dcm?alt=media&token=cc3d8dee-82ee-ac86-04ff8eb8da91',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_41.dcm?alt=media&token=281638da-6ae9-63dd-36ba2f9b1acd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_42.dcm?alt=media&token=bd3a1f57-abbb-35d7-deddf9ca2406',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_43.dcm?alt=media&token=3ec8c429-336b-d398-7cfc0df9d220',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_44.dcm?alt=media&token=b1de2ddd-767c-4746-c254bd2322fa',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_45.dcm?alt=media&token=bdef25bc-659c-2c3c-4846c0175181',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_46.dcm?alt=media&token=14985400-3748-9b79-f3a086b86dff',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_47.dcm?alt=media&token=18b7b05d-77c2-e63d-cc2a95262f4b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_48.dcm?alt=media&token=945fe267-f56f-3e71-1affd8220672',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_49.dcm?alt=media&token=75b2c62d-d657-2b7a-14cca46c7514',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_50.dcm?alt=media&token=fa06d920-5833-f89f-39a8f5ca1de9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_51.dcm?alt=media&token=ceb9c1d2-46f0-8072-dfe99b53e7dc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_52.dcm?alt=media&token=22fb762f-79ca-8599-4606de91fed3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_53.dcm?alt=media&token=40ef088c-f60e-a359-5dbabb41e310',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_54.dcm?alt=media&token=d21ff142-d693-5d33-98cae4a14908',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_55.dcm?alt=media&token=6cc4b857-1dc2-9197-4a74393f94fd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_56.dcm?alt=media&token=e6ceb9de-bfd0-fbdc-45d58ec52a26',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_57.dcm?alt=media&token=58c55419-6829-53a6-6932e2ba08cc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_58.dcm?alt=media&token=53d39ee1-32ff-cead-47a5ca95118d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_59.dcm?alt=media&token=6738394a-d84f-c206-9fa99a08138e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_60.dcm?alt=media&token=27959188-1655-082b-11b7a0341ef5']
const pelvis_ft2sag = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_1.dcm?alt=media&token=9cde1a36-bcb1-7af0-243d19ab1031',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_2.dcm?alt=media&token=f1df72a7-548c-eea6-d5c8771b6346',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_3.dcm?alt=media&token=2aa191cc-1087-0fb6-458b8c2dd862',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_4.dcm?alt=media&token=a80a4a87-c7c5-f9a5-bca05bf03c4b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_5.dcm?alt=media&token=3fe2e1a5-866c-853a-b65dc2f93feb',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_6.dcm?alt=media&token=1f3e3ca2-8eb6-1b05-6751b444fb3c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_7.dcm?alt=media&token=736de67a-d398-6a34-9209da0d4242',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_8.dcm?alt=media&token=28ec9049-1dff-e1c9-4cd5065f63bc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_9.dcm?alt=media&token=97998ed6-26c1-fe95-19134ffb0bca',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_10.dcm?alt=media&token=2fa78677-f2ff-9f47-9c68e412eaa6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_11.dcm?alt=media&token=610c037f-0f79-0fa6-87a351f9b30d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_12.dcm?alt=media&token=3c72fc60-58aa-f925-28927d73d560',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_13.dcm?alt=media&token=32633a7d-b87a-053c-8b06ef9de335',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_14.dcm?alt=media&token=844a1424-578b-fc94-de1a24288ba4',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_15.dcm?alt=media&token=e065aaef-66e9-efe3-be0c1e4613ba',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_16.dcm?alt=media&token=4cb08331-75b8-dbbc-18c1091f17ef',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_17.dcm?alt=media&token=059d6843-76f1-02fe-1f5d370dc0df',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_18.dcm?alt=media&token=1aca798a-eed6-8922-f60fe9572fd9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_19.dcm?alt=media&token=8ec93d04-ae68-7764-ef71c2924873',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_20.dcm?alt=media&token=33b7eac1-27da-a753-b508769998d9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_21.dcm?alt=media&token=1269f3af-6b7b-ed9a-e0279b620344',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_22.dcm?alt=media&token=d9cb9208-64d8-d5bd-121d4b6683ba',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_23.dcm?alt=media&token=d6641b90-5788-4b18-873049206fcb',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_24.dcm?alt=media&token=b2d11a1e-834b-3ebb-88966930e927',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_25.dcm?alt=media&token=3b1471db-e9f4-d068-d095e7a7479b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F801%2F801_26.dcm?alt=media&token=0d0082d6-67dd-3302-12a058c9db15']
const pelvis_ft2hor = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_1.dcm?alt=media&token=23b50e67-4398-71c4-2e0ab91aecad',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_2.dcm?alt=media&token=52adbc48-9811-914a-bf39de87ca25',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_3.dcm?alt=media&token=3f634a63-981d-9bdc-a089c5c3c1b6',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_4.dcm?alt=media&token=648dc69c-13ed-c5ad-215c423d0263',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_5.dcm?alt=media&token=af09a8ea-da01-a050-0287edcc80d9',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_6.dcm?alt=media&token=ff76b8a4-bbaa-966c-a89b4a4e5d3c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_7.dcm?alt=media&token=313586e4-76d8-0c6d-4249b7061315',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_8.dcm?alt=media&token=46ec3a7d-b70f-b0d2-beeb7090ba9d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_9.dcm?alt=media&token=76140a7d-1b63-25cc-a6a8190d8268',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_10.dcm?alt=media&token=a9a80ce1-dbc7-11bf-7a026a35c237',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_11.dcm?alt=media&token=149813ff-d6f8-05ea-744222c5062f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_12.dcm?alt=media&token=6a06f80b-bdb4-ba50-845473c31853',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_13.dcm?alt=media&token=0058ff34-680e-443e-39cc90968310',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_14.dcm?alt=media&token=2e1f30de-b473-c134-92e7b5d9a2ce',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_15.dcm?alt=media&token=94304757-7c0a-fe24-d1bf09adeb3e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_16.dcm?alt=media&token=dabcdb44-00de-20bb-9f54f3c7fc90',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_17.dcm?alt=media&token=0ec737e0-d503-2a16-692f4dca03cf',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_18.dcm?alt=media&token=6879f0c7-4e02-efa5-6c2b4bbc5297',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_19.dcm?alt=media&token=f93206f1-a9fc-3cf0-c570a1a9e8ad',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_20.dcm?alt=media&token=06ce5f3e-33c4-3477-47507d5c2aff',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_21.dcm?alt=media&token=ae173d18-5def-07d2-220a2d556d9b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_22.dcm?alt=media&token=87804ead-5174-b739-1bab70dd7226',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_23.dcm?alt=media&token=1b6ffa35-9000-fc43-eb082d6ff5d4',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_24.dcm?alt=media&token=fd42f9de-7ca2-be22-33609d51ec79',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_female%2F901%2F901_25.dcm?alt=media&token=1f049491-a0b8-a77c-1182f508259c']


const get_img = function (img_list, img_list_name) {
    var option_list = [];
    for (let i = 0; i <= img_list.length - 1; i++) {
        option_list.push(<option value={String(i)}>{img_list_name[i]}</option>);
    }
    return option_list
}


const img_list1 = [pelvis_mt2sag, Get_Dicom_Image('Explanation/Pelvis/pelvis_MRI_male/801/', 801, 1, 25)]
const img_list2 = [pelvis_mt2hor, Get_Dicom_Image('Explanation/Pelvis/pelvis_MRI_male/601/', 601, 1, 60)]
const img_list3 = [pelvis_ft2sag, Get_Dicom_Image('Explanation/Pelvis/pelvis_MRI_female/1001/', 1001, 1, 18)]
const img_list4 = [pelvis_ft2hor]
const img_list_name1 = ['男性T2強調像矢状断', '男性T2強調像冠状断']
const img_list_name2 = ['男性T2強調像水平断', '男性T2強調像水平断']
const img_list_name3 = ['女性T2強調像水平断', '女性T2強調像冠状断']
const img_list_name4 = ['女性T2強調像矢状断']
class Pelvis extends Component {
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
        //first
        first_imageIds: img_list1,
        first_imageNames: img_list_name1,
        firstIndex: 0,
        first_imageIndex: 0,
        //second
        second_imageIds: img_list2,
        second_imageNames: img_list_name2,
        secondIndex: 0,
        second_imageIndex: 0,
        //third
        third_imageIds: img_list3,
        third_imageNames: img_list_name3,
        thirdIndex: 0,
        third_imageIndex: 0,

        //fourth
        fourth_imageIds: img_list4,
        fourth_imageNames: img_list_name4,
        fourthIndex: 0,
        fourth_imageIndex: 0,

        // FORM
        activeTool: 'Wwwc',
        activeToolIndex: 10,

        isPlaying: false,
        frameRate: 5,
        style: 'viewers',
    };
    //componentdidmount

    render() {
        return (
            <div className='Pelvis'>
                <div className='Pelvis_contents'>
                    <div>
                        <h2>Viewer</h2>
                        <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                            <CornerstoneViewport
                                tools={this.state.tools}
                                style={{ minWidth: '50%', height: '512px', flex: '1' }}
                                imageIds={this.state.first_imageIds[this.state.firstIndex]}
                                imageIdIndex={this.state.first_imageIndex}
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
                                        firstIndex: parseInt(evt.target.value),
                                    });
                                }}
                                className="form-control"
                                id="image-id-stack"
                            >
                                {get_img(this.state.first_imageIds, this.state.first_imageNames)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>解説</h2>
                        <h2>STEP1. 骨盤の構造を確認しよう</h2>
                        <div className="basic_sentense">
                            <p>骨盤部の腹側にある膀胱、背側にある直腸の位置を確認しましょう。
                                膀胱内腔はT2強調像で均一な高信号、T1強調像で均一な低信号です。
                            </p>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                            <CornerstoneViewport
                                tools={this.state.tools}
                                style={{ minWidth: '50%', height: '512px', flex: '1' }}
                                imageIds={this.state.second_imageIds[this.state.secondIndex]}
                                imageIdIndex={this.state.second_imageIndex}
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
                                        secondIndex: parseInt(evt.target.value),
                                    });
                                }}
                                className="form-control"
                                id="image-id-stack"
                            >
                                {get_img(this.state.second_imageIds, this.state.second_imageNames)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>STEP2. 骨盤の構造物(男性)を確認しよう</h2>
                        <div className="basic_sentense">
                            <p>前立腺の位置内部構造を確認しましょう。</p>
                            <p>辺縁領域：腺構造が豊富なためT2強調像で高信号で、放射状に広がる管状構造</p>
                            <p>中心領域：射精管が貫く腺組織と平滑筋からなる部位で、T2強調像で低信号</p>
                            <p>移行領域：腺構造は少ないためT2強調像で低信号</p>
                        </div>
                        <img className="row_head_img" src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2FImages%2F%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E7%94%BB%E5%83%8F%EF%BC%88%E7%94%B7%E6%80%A7%E9%AA%A8%E7%9B%A4%EF%BC%89.png?alt=media&token=bbafe80e-2efe-457a-b450-39839418ce99'
                            alt='background'></img>
                    </div>
                    <div>
                        <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                            <CornerstoneViewport
                                tools={this.state.tools}
                                style={{ minWidth: '50%', height: '512px', flex: '1' }}
                                imageIds={this.state.third_imageIds[this.state.thirdIndex]}
                                imageIdIndex={this.state.third_imageIndex}
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
                                        thirdIndex: parseInt(evt.target.value),
                                    });
                                }}
                                className="form-control"
                                id="image-id-stack"
                            >
                                {get_img(this.state.third_imageIds, this.state.third_imageNames)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2>STEP3. 骨盤の構造物（女性）を確認しよう！</h2>
                        <div className="basic_sentense">
                            <p>水平断と矢状断で子宮と卵巣の位置を確認しましょう。
                                生殖可能年齢の子宮と卵巣は性周期により画像での見え方に変動があります。</p>
                        </div>
                        <img className="row_head_img" src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2FImages%2F%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E7%94%BB%E5%83%8F%EF%BC%88%E5%A5%B3%E6%80%A7%E9%AA%A8%E7%9B%A4%E2%91%A0%EF%BC%89.png?alt=media&token=22610ad6-a20a-42a4-977f-a036d5936b1b'
                            alt='background'></img>
                    </div>
                    <div style={{ padding: '0px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        <CornerstoneViewport
                            tools={this.state.tools}
                            style={{ minWidth: '50%', height: '512px', flex: '1' }}
                            imageIds={this.state.fourth_imageIds[this.state.fourthIndex]}
                            imageIdIndex={this.state.fourth_imageIndex}
                            isPlaying={false}
                            frameRate={this.state.frameRate}
                            activeTool={this.state.activeTool}
                        />
                    </div>
                    <div>
                        <img className="row_head_img" src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2FImages%2F%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E7%94%BB%E5%83%8F%EF%BC%88%E5%A5%B3%E6%80%A7%E9%AA%A8%E7%9B%A4%E2%91%A1%EF%BC%89.png?alt=media&token=51db00e8-22c8-4535-9a96-4baebb24b27e'
                            alt='background'></img>
                        <div className="basic_sentense">
                            <p>子宮：体部は特徴的な3層構造をもち、T2強調像で以下のようにみえる</p>
                            <p>漿膜側ー筋層（中等度信号）ーjunctional zone（低信号）ー内膜（高信号）ー子宮内部</p>
                            <p>卵巣：T2強調像でやや低信号の間質中に、高信号の卵胞が多数みられる</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Pelvis;