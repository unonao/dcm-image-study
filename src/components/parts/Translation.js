const partslist = {
    Head: '頭部',
    Thorax: '胸部',
    Abdomen: '腹部',
    Pelvis: '骨盤部'
}

export function translation(word) {
    return partslist[word]
}