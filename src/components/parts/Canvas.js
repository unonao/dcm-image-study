import React, { useState, useEffect } from "react"

export const Canvas = (props) => {
    // contextを状態として持つ
    const [canvas, setCanvas] = useState(null)
    const [context, setContext] = useState(null)
    // 画像読み込み完了トリガー
    const [loaded, setLoaded] = useState(false)
    // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
    useEffect(() => {
        const canvas = document.getElementById(props.id)
        setCanvas(canvas)
        const canvasContext = canvas.getContext("2d")
        setContext(canvasContext)
        // eslint-disable-next-line
    }, [])
    // 状態にコンテキストが登録されたらそれに対して操作できる
    useEffect(() => {
        if (context !== null) {
            const img = new Image()
            img.src = props.src // 描画する画像など
            img.onload = () => {
                context.drawImage(img, 0, 0)
                // 更にこれに続いて何か処理をしたい場合
                setLoaded(true)
            }

        }
    })
    useEffect(() => {
        if (loaded) {
            // それに続く処理
        }
    }, [loaded])
    return (
        <canvas width={props.width} height={props.height} id={props.id}></canvas>
    )
}