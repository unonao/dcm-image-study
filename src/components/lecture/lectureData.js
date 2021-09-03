import { Get_Image } from '../../UseStorage'

import MRIT2img1 from '../images/HeadMRIT2Mask/601_1.png'
import MRIT2img2 from '../images/HeadMRIT2Mask/601_2.png'
import MRIT2img3 from '../images/HeadMRIT2Mask/601_3.png'
import MRIT2img4 from '../images/HeadMRIT2Mask/601_4.png'
import MRIT2img5 from '../images/HeadMRIT2Mask/601_5.png'
import MRIT2img6 from '../images/HeadMRIT2Mask/601_6.png'
import MRIT2img7 from '../images/HeadMRIT2Mask/601_7.png'
import MRIT2img8 from '../images/HeadMRIT2Mask/601_8.png'
import MRIT2img9 from '../images/HeadMRIT2Mask/601_9.png'
import MRIT2img10 from '../images/HeadMRIT2Mask/601_10.png'
import MRIT2img11 from '../images/HeadMRIT2Mask/601_11.png'
import MRIT2img12 from '../images/HeadMRIT2Mask/601_12.png'
import MRIT2img13 from '../images/HeadMRIT2Mask/601_13.png'
import MRIT2img14 from '../images/HeadMRIT2Mask/601_14.png'
import MRIT2img15 from '../images/HeadMRIT2Mask/601_15.png'
import MRIT2img16 from '../images/HeadMRIT2Mask/601_16.png'
import MRIT2img17 from '../images/HeadMRIT2Mask/601_17.png'
import MRIT2img18 from '../images/HeadMRIT2Mask/601_18.png'
import MRIT2img19 from '../images/HeadMRIT2Mask/601_19.png'
import MRIT2img20 from '../images/HeadMRIT2Mask/601_20.png'
import MRIT2img21 from '../images/HeadMRIT2Mask/601_21.png'
import MRIT2img22 from '../images/HeadMRIT2Mask/601_22.png'
import MRIT2img23 from '../images/HeadMRIT2Mask/601_23.png'
import MRIT2img24 from '../images/HeadMRIT2Mask/601_24.png'
import MRIT2img25 from '../images/HeadMRIT2Mask/601_25.png'

export const MRIT2imges = [
    MRIT2img1, MRIT2img2, MRIT2img3, MRIT2img4, MRIT2img5, MRIT2img6, MRIT2img7, MRIT2img8, MRIT2img9, MRIT2img10,
    MRIT2img11, MRIT2img12, MRIT2img13, MRIT2img14, MRIT2img15, MRIT2img16, MRIT2img17, MRIT2img18, MRIT2img19, MRIT2img20,
    MRIT2img21, MRIT2img22, MRIT2img23, MRIT2img24, MRIT2img25
]

export const MRIT2annos = [
    '　　　', '上側頭回', '上前頭回', '上後頭回', '上頭頂小葉', '下側頭回', '下前頭回', '下後頭回',
    '中側頭回', '中前頭回', '中後頭回', '中心下回', '中心傍小葉', '中心前回', '中心後回',
    '島', '帯状回', '帯状回峡部', '楔前部', '楔部', '横側頭回', '海馬', '海馬傍回', '直回',
    '眼窩回', '紡錘状回', '縁上回', '脳梁', '舌状回', '角回', '鈎部'
]

export const MRIT2segment = Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2segmentation/', 'png', 25)

export const MRIT2partsegment = [
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer1/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer2/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer3/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer4/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer5/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer6/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer7/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer8/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer9/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer10/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer11/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer12/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer13/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer14/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer15/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer16/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer17/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer18/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer19/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer20/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer21/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer22/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer23/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer24/', 'png', 31),
    Get_Image('Explanation/Head/Head_MRI_T2W_JPEG/fT2Wannotation/layer25/', 'png', 31)
]