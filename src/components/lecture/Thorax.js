import React from 'react';
import VTR from '../Video';

export const thorax_dicom = [
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_1.dcm?alt=media&token=8e2e3794-7e93-db3c-2adaf3f9f904',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_2.dcm?alt=media&token=9385f093-7d2d-ffcc-96bc322e5ca8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_3.dcm?alt=media&token=829e820d-e897-239a-286c732770a8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_4.dcm?alt=media&token=b2843437-0f39-ba49-8061a870d023',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_5.dcm?alt=media&token=206611bb-f4d5-3e00-6fd24ebbeda3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_6.dcm?alt=media&token=683ca4cd-d75d-d9c1-4c9cf8c14e76',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_7.dcm?alt=media&token=74fdf2b0-8e2f-ed4c-a246239f2be8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_8.dcm?alt=media&token=c86f615a-6b01-c899-0b63131a2758',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_9.dcm?alt=media&token=f586702c-99e7-3f66-4dc83641dc7b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_10.dcm?alt=media&token=d913cfc2-cd30-a541-1e09b852bc8d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_11.dcm?alt=media&token=ddb030b7-e999-1b4e-b9b285844a73',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_12.dcm?alt=media&token=84b47f39-6691-898e-1c361e7ba299',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_13.dcm?alt=media&token=3c18544c-8549-9dba-29dbfa224d8e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_14.dcm?alt=media&token=e956c3e6-4362-6a53-6959d2452c22',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_15.dcm?alt=media&token=5e9b11e4-e888-a3d8-903880c14714',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_16.dcm?alt=media&token=3b5d926e-45a5-82e5-07d57c55d126',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_17.dcm?alt=media&token=0b904169-27bb-8a0f-b18e970578bd',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_18.dcm?alt=media&token=ecd04d3d-48d5-25b2-f0c7c0472c9e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_19.dcm?alt=media&token=22284d4f-be17-791c-04a0ba5a2e9e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_20.dcm?alt=media&token=1eb0f1d1-c67a-5a08-0cd22811df39',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_21.dcm?alt=media&token=5c79fba2-909f-95d1-c722587131c3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_22.dcm?alt=media&token=51da9814-4a8c-c38a-2c7d5c5c2a69',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_23.dcm?alt=media&token=b7206e20-c283-59a2-54315270317f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_24.dcm?alt=media&token=cf91daaa-c05b-b6d1-ac3032432868',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_25.dcm?alt=media&token=bf8a1f43-5d96-f23b-f4300b5c0923',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_26.dcm?alt=media&token=d2a6bf8b-02a7-7a48-68ab9ee6e361',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_27.dcm?alt=media&token=4028298b-88ad-85f1-56db7edc326c',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_28.dcm?alt=media&token=db6a4857-d679-e8d5-5a900483519a',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_29.dcm?alt=media&token=796bfe5d-2abd-69ad-56e95a81e407',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_30.dcm?alt=media&token=0a2d18bb-0d2f-02b6-04102181b435',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_31.dcm?alt=media&token=8a28ea0e-2576-8685-b66f10b1a8a3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_32.dcm?alt=media&token=64953e34-ae9a-0581-b524e5dc9551',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_33.dcm?alt=media&token=9c265a03-7f07-f6ce-f629fcad543b',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_34.dcm?alt=media&token=98250300-0882-5004-f31d88e2b150',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_35.dcm?alt=media&token=dd37ea68-1c8c-86bf-81eedc3a4ec8',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_36.dcm?alt=media&token=e5c44341-2d7d-25e2-108ba3a66ba0',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_37.dcm?alt=media&token=86b447ce-a466-69fb-b8c97882c882',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_38.dcm?alt=media&token=1c3d6220-329b-623f-8e1f5eb89fff',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_39.dcm?alt=media&token=79027abb-7a46-60dc-546b2ed41a91',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_40.dcm?alt=media&token=3cb58994-6a0b-fba8-bb7e2c07fd09',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_41.dcm?alt=media&token=63fa7bce-3245-5417-45245cd55a0d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_42.dcm?alt=media&token=0f7d7644-f0ac-ef00-f57ce619582e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_43.dcm?alt=media&token=38fc2d9b-8ca0-c45d-c3bbfc6c9d6e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_44.dcm?alt=media&token=72806751-22e1-19c1-61162f82c025',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_45.dcm?alt=media&token=04a872c4-a151-f02e-56fef6f9d3fc',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_46.dcm?alt=media&token=c483d98a-cbd3-8ed9-3806d5132064',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_47.dcm?alt=media&token=52d9b944-684f-29e7-dd83d5d2dbc3',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_48.dcm?alt=media&token=7bc06bd4-2d7b-3ef6-953d0b63fb40',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_49.dcm?alt=media&token=c0c33fad-4f6d-e49a-f31f31afda55',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_50.dcm?alt=media&token=1b4f652a-f00e-e987-cfc75c022c60',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_51.dcm?alt=media&token=70b7b456-c42f-6041-62f507ed2d7f',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_52.dcm?alt=media&token=e2d39e5b-abce-c89d-716a133ffa34',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_53.dcm?alt=media&token=d2d9f110-dc2b-0e76-2bd98ffc698e',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_54.dcm?alt=media&token=0e328a83-a669-2f37-034bda4a5b1d',
    'dicomweb:https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FAll%2FFemale_CT%2F80%2F80_55.dcm?alt=media&token=f157ed91-c50c-0fe1-95285e6a847d',
]

export function thorax_explain() {
    return (
        <div className="basic_sentenses">
            <h2>解説</h2>
            <h2>STEP1. 縦隔条件と肺野条件を見比べてみよう！</h2>
            <div className="basic_sentense">
                <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E8%82%BA%E9%87%8E%E6%9D%A1%E4%BB%B6%E3%81%A8%E7%B8%A6%E9%9A%94%E6%9D%A1%E4%BB%B6%E3%82%92%E8%A6%8B%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AE%E9%81%95%E3%81%84(%E4%B8%80%E9%83%A8%E3%83%8E%E3%82%A4%E3%82%BA%E3%81%82%E3%82%8A).mp4?alt=media&token=e73c7829-b387-4698-82bf-44180aeb9f0c'>
                </VTR>
            </div>
            <h2>STEP2. 縦隔の構造を理解しよう。</h2>
            <div className="basic_sentense">
                <p>画像は縦隔条件にしてください。
                    頭側から甲状腺、胸腺、気管、食道、大動脈弓、上行大動脈、
                    下行大動脈、肺動静脈の位置を確認してみましょう。</p>
                <h4>甲状腺と副甲状腺について</h4>
                <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E7%94%B2%E7%8A%B6%E8%85%BA%E3%81%A8%E5%89%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.mp4?alt=media&token=0d078c7b-dab0-4d5a-8e08-61a0ec9c463f'>
                </VTR>
                <div className="basic_sentense">
                    <h4>胸腺について</h4>
                    <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E8%83%B8%E8%85%BA%E3%81%AE%E8%A6%8B%E6%96%B9.mp4?alt=media&token=ee8276c0-77ac-40be-bd74-3f1ea3ba6e13'>
                    </VTR>
                </div>
                <div className="basic_sentense">
                    <h4>食道について</h4>
                    <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E9%A3%9F%E9%81%93%E3%81%AE%E8%A6%8B%E6%96%B9.mp4?alt=media&token=05c4e335-7cdb-4c91-ab9b-68f06d39834c'>
                    </VTR>
                </div>
                <div className="basic_sentense">
                    <h4>大動脈と奇静脈について</h4>
                    <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E5%A4%A7%E5%8B%95%E8%84%88%E3%81%A8%E5%A5%87%E9%9D%99%E8%84%88.mp4?alt=media&token=902908b3-c5e7-40ee-ad52-252dc5b37a6f'>
                    </VTR>
                </div>
                <div className="basic_sentense">
                    <h4>後縦隔について</h4>
                    <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E5%BE%8C%E7%B8%A6%E9%9A%94(%E8%84%8A%E9%AB%84)%E3%81%AE%E8%A6%8B%E6%96%B9.mp4?alt=media&token=6a9af8c3-6853-44a0-bac8-50586842e70c'>
                    </VTR>
                </div>
            </div>
            <h2>STEP3. 肺の構造を確認しよう。</h2>
            <div className="basic_sentense">
                <p>画像は肺野条件にしてください。
                    肺区域、動静脈、気管支を確認してみましょう。</p>
                <VTR src='https://firebasestorage.googleapis.com/v0/b/mnes-mnist-imagestudy.appspot.com/o/Explanation%2FThorax%2FVideos%2F%E8%82%BA%E5%8C%BA%E5%9F%9F%E3%80%81%E5%8B%95%E9%9D%99%E8%84%88%E3%80%81%E6%B0%97%E7%AE%A1%E3%81%AE%E8%A6%8B%E5%88%86%E3%81%91%E6%96%B9.mp4?alt=media&token=188f522a-6981-4d3e-ba0d-2438932466b5'>
                </VTR>
            </div>
            <div className="basic_sentense">
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
                <p>　　　　　　　　　　　　　　　　　　　　　</p>
            </div>
        </div>
    )
};
