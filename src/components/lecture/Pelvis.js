import React, { Component } from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport';

//css
import "../../styles/Pelvis.css"

const pelvis_ct = [
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_90.dcm?alt=media&token=5e7477b3-f216-bc5a-663a7503d9e1',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_91.dcm?alt=media&token=8675630c-8263-7999-1bd633e9a7fe',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_92.dcm?alt=media&token=863d3c7f-8595-462d-d3b346348122',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_93.dcm?alt=media&token=1c8feffb-21bb-c5ce-efa1633dd993',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_94.dcm?alt=media&token=76915e0a-0201-772a-9e4964f5e69a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_95.dcm?alt=media&token=cc67e950-e89a-60ca-a360d3c28067',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_96.dcm?alt=media&token=f49bd1e4-fd55-1b27-402fe319e014',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_97.dcm?alt=media&token=15ac466b-3ebc-f7a9-a3aebbfe9f11',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_98.dcm?alt=media&token=7582ad81-913f-fa8a-9f1d407c3283',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_99.dcm?alt=media&token=c1b719ff-dd88-7d7b-32b244523228',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_100.dcm?alt=media&token=50777629-dfd3-a1c3-c82feea4b944',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_101.dcm?alt=media&token=fdbdf6aa-a7ba-0178-43c5cf8f5e25',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_102.dcm?alt=media&token=d9452d07-40ee-3863-4f0d2b8e8c64',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_103.dcm?alt=media&token=33bc965d-6df1-703f-f5059b835761',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_104.dcm?alt=media&token=2f4970c1-ba91-bb2d-30da4ba36b02',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_105.dcm?alt=media&token=1cfdc441-84ad-761c-504107b233dc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_106.dcm?alt=media&token=d78c596a-1982-c217-50ad0d255c73',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_107.dcm?alt=media&token=b9350e9e-9953-f9ca-6a990459a92d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_108.dcm?alt=media&token=7591a8b6-5b60-1241-18b6d525f47b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_109.dcm?alt=media&token=cff3e180-f125-06cf-353bc934fe56',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_110.dcm?alt=media&token=d4002b4c-8b93-cef2-febddc45b741',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_111.dcm?alt=media&token=f3414e3b-622b-a959-a423a64fa53e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_112.dcm?alt=media&token=7cb5fa98-b60d-cd8a-c1bc714485bd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_113.dcm?alt=media&token=ad90824f-0b72-1a6a-382c436de454',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_114.dcm?alt=media&token=f9dd65a5-72d9-99ef-1ec4e9a2c6da',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_115.dcm?alt=media&token=c293e7b0-0d22-8ae1-0f5cb42b4e0f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_116.dcm?alt=media&token=aaecb7d4-69d3-9ac5-3438bd3b49b4',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_117.dcm?alt=media&token=3744c5ac-d6b9-9e1b-0e2a91f96147',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_118.dcm?alt=media&token=826d3a68-458e-77d3-31ebf9f9e557',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_119.dcm?alt=media&token=53b4c4da-0fb4-8611-789499143122',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_120.dcm?alt=media&token=6409066d-4a9b-efec-ee14db485664',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_121.dcm?alt=media&token=c0551f76-0a9b-f213-e9eb38a0f115',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_122.dcm?alt=media&token=b182b25b-7a9e-bbf0-23266da271d7',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_123.dcm?alt=media&token=fc655246-572d-ecbd-1fff779ae28a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_124.dcm?alt=media&token=2fdcc3ab-955e-bf07-21b6597a5d16',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_125.dcm?alt=media&token=02733576-55f2-9fea-dc0d5b7a7319',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_126.dcm?alt=media&token=5cafaca6-4daa-8ec0-4ad1926dfc17'
]
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

const pelvis_mt2tra = ['dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FPelvis%2Fpelvis_MRI_male%2F501%2F501_1.dcm?alt=media&token=09eb344d-d520-5cc2-5fb391ba81e7',
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



const get_img = function (img_list, img_list_name) {
    var option_list = [];
    for (let i = 0; i <= img_list.length - 1; i++) {
        option_list.push(<option value={String(i)}>{img_list_name[i]}</option>);
    }
    return option_list
}

const img_list = [pelvis_ct]
const img_list_name = ['女性骨盤CT']
const img_list1 = [pelvis_ct, pelvis_mt2sag]
const img_list2 = [pelvis_ct, pelvis_mt2tra]
const img_list_name1 = ['女性骨盤CT', 'MRI T2W sag']
const img_list_name2 = ['女性骨盤CT', 'MRI T2W tra']
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
        third_imageIds: img_list1,
        third_imageNames: img_list_name1,
        thirdIndex: 0,
        third_imageIndex: 0,

        //fourth
        fourth_imageIds: img_list,
        fourth_imageNames: img_list_name,
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
                            <p>T2強調水平断（臓器にアノテーションしたい）</p>
                        </div>
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