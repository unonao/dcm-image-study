import React from "react";
import './PracticeImageSelection.css'

export class PracticeImageSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelect: false,
            images: this.props.images,
            img_list: this.props.img_list,
            protocol_list: [],
        }
    }

    render() {
        return (
            <div>
                <button className='image_btn'
                    onClick={() => {
                        this.setState({ showSelect: !this.state.showSelect })
                    }}>画像選択</button>
                {this.state.showSelect === true ?
                    <div id='overlay'>
                        <div className='selection'>
                            <div className='selectionhead'>
                                <button
                                    className='close_btn'
                                    type="button"
                                    onClick={() => {
                                        this.setState({
                                            showSelect: !this.state.showSelect,
                                        });
                                    }}
                                >X</button>
                                <h2 className='sentense'>表示させたい画像の種類を選択してください。</h2>
                                <p className='sentense'>※1度に表示できるのは4種類までです。</p>
                            </div>
                            <div>
                                {this.props.protocol_list.map((protocol, index) => (
                                    <div key={index}>
                                        <label>
                                            <input
                                                name={protocol}
                                                key={index}
                                                type="checkbox"
                                                checked={(this.state.protocol_list.indexOf(protocol) !== -1)}
                                                onChange={(e) => {
                                                    var prolist = this.state.protocol_list
                                                    var imglist = this.state.img_list
                                                    if (prolist.indexOf(e.target.name) !== -1) {
                                                        const newArray = prolist.filter(n => n !== e.target.name);
                                                        imglist.splice(prolist.indexOf(e.target.name), 1)
                                                        this.setState({ protocol_list: newArray })
                                                        this.props.changeImageList(imglist);
                                                    } else {
                                                        if (prolist.length === 4) {
                                                            prolist.shift()
                                                            imglist.shift()
                                                        }
                                                        prolist.push(e.target.name)
                                                        imglist.push(this.state.images[e.target.key])
                                                        this.setState({
                                                            protocol_list: prolist,
                                                        });
                                                        this.props.changeImageList(imglist);
                                                    }
                                                }}
                                            />
                                            {protocol}
                                        </label>
                                    </div>
                                )
                                )}
                            </div>
                            {console.log(this.state.protocol_list)}
                            {console.log(this.state.img_list)}
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}
