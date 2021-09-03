import React, { useState, useEffect } from "react";
import { Canvas } from "./Canvas";
import './CanvasforHead.css';

function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


export const CanvasforHead = (props) => {
    // contextを状態として持つ
    const [canvas, setCanvas] = useState(null)
    const [context, setContext] = useState(null)
    // 画像読み込み完了トリガー
    const [loaded, setLoaded] = useState(false)
    const [layer, setLayer] = useState(1)
    const [alpha, setAlpha] = useState(0)
    const [num, setNum] = useState(0)
    // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
    useEffect(() => {
        const canvas = document.getElementById("maskcanvas")
        setCanvas(canvas)
        const canvasContext = canvas.getContext("2d")
        setContext(canvasContext)
        // eslint-disable-next-line
    }, [])
    // 状態にコンテキストが登録されたらそれに対して操作できる
    useEffect(() => {
        if (context !== null) {
            const img = new Image()
            img.src = props.src[layer - 1] // 描画する画像など
            img.onload = () => {
                context.drawImage(img, 0, 0)
                // 更にこれに続いて何か処理をしたい場合
                setLoaded(true)
            }
            function pick(event) {
                var mousePos = getMousePosition(canvas, event);
                var x = mousePos.x;
                var y = mousePos.y;
                var pixel = context.getImageData(x, y, 1, 1);
                var data = pixel.data;
                setNum(data[0] / 8)
                var rgba = 'rgba(' + data[0] + ',' + data[1] +
                    ',' + data[2] + ',' + (data[3] / 255) + ')';
                canvas.style.background = rgba;
                canvas.textContent = rgba;
            }
            canvas.addEventListener('mousemove', pick);
        }
        // eslint-disable-next-line
    })
    useEffect(() => {
        if (loaded) {
            // それに続く処理
        }
    }, [loaded])
    return (
        <div className='canvasforhead'>
            <div className='canvasarea'>
                <div className='overlay'>
                    {num > 0 ? <img src={props.parts[layer - 1][num - 1]} id="segmentation" alt='segmentation'></img> : null}
                    <img style={{ opacity: String(alpha / 20) }} src={props.segment[layer - 1]} id="segmentation" alt='segmentation'></img>
                    <canvas opacity="0" width="512" height="512" id="maskcanvas"></canvas>
                </div>
                <Canvas src={props.mri[layer - 1]} id='MRI' alt='MRI' width='512' height='512'></Canvas>
            </div>
            <div className='formarea'>
                <h2>STEP2. T2で脳MRIを見てみよう</h2>
                <div>
                    <p>MRIT2強調像水平断面で大脳皮質の解剖を確認してみましょう。</p>
                </div>
                <div>
                    <p>只今選択中の領域は</p>
                    <h2>{props.anno[num]}</h2>
                    <p>です。</p>
                </div>
                <div>
                <label htmlFor="image-id-index">Image ID Index:</label>
                <input
                    type="range"
                    min="1"
                    max={props.mri.length}
                    value={layer}
                    onChange={evt =>
                        setLayer(parseInt(evt.target.value))
                    }
                    className="form-control"
                    id="image-id-index"
                ></input>
                <input
                    type="number"
                    min="1"
                    max={props.mri.length}
                    value={layer}
                    onChange={evt => {
                        const maxid = props.mri.length
                        const imageIdInput = parseInt(evt.target.value);
                        const imageIdIndex = Math.max(Math.min(imageIdInput, maxid), 1);

                        setLayer(imageIdIndex);
                    }}
                    className="form-control"
                    id="image-id-index"
                ></input>
                </div>
                <div>
                <label htmlFor="image-id-index">permeability:</label>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={alpha}
                    onChange={evt =>
                        setAlpha(parseInt(evt.target.value))
                    }
                    className="form-control"
                    id="image-id-index"
                ></input>
                </div>
                <div>
                    <p>※カラーマップは場所を確約するものではございません。
                        参考程度にご参照ください。
                    </p>
                </div>
            </div>
        </div>
    )
}