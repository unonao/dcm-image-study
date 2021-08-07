import { storageRef } from './firebase';


export function Get_Image(path, dcm_num, extension, length) {
    var img_list = []
    var array = []
    for (let i = 0; i < length; i++) {
        let fileName = dcm_num + '_' + String(i + 1) + extension;
        img_list.push(path + fileName);
        array.push(i);
    }
    img_list.forEach((element, index) => {
        const spaceRef = storageRef.child(element);
        spaceRef.getDownloadURL().then((url) => {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (event) {
            };
            xhr.open('GET', url, true);
            xhr.send();
            array[index] = url
        });
    });
    return array;
};


export function Get_Dicom_Image(path, dcm_series, start, length) {
    //path: /Explanation/Head/...(データパス) dcm_num: 601(dicomの頭番号) start:1(dicomの開始番号) length: 25(全データ数)
    const pathname = path;
    var img_list = []
    var array = []
    for (let i = start - 1; i < length; i++) {
        let fileName = dcm_series + '_' + String(i + 1) + '.dcm';
        img_list.push(pathname + fileName);
    }
    img_list.forEach((element, index) => {
        const spaceRef = storageRef.child(element);
        spaceRef.getDownloadURL().then((url) => {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (event) {
            };
            xhr.open('GET', url, true);
            xhr.send();
            array[index] = 'dicomweb:' + url
        });
    });
    return array;
};