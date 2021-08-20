import { LinkButton } from "../parts/LinkButton";

import headimg from '../images/Head.jpg'
import thoraximg from '../images/Thorax.jpg'
import abdomenimg from '../images/Abdomen.jpg'
import pelvisimg from '../images/Pelvis.jpg'

//css
import "../../styles/LectureMenu.css"


export function LectureMenu() {
    return (
        <div>
            <div className='explanation'>
                <div className="exp">
                    <h2>画像診断</h2>
                    <div className="exp_row">
                        <h3>CT</h3>
                        <p>この章ではCTに関する基本的な事項についてまとめていきます。</p>
                        {LinkButton({ title: 'GO', url: '/lecture/ct', })}
                    </div>
                    <div className="exp_row">
                        <h3>MRI</h3>
                        <p>この章ではMRIに関する基本的な事項についてまとめていきます。</p>
                        {LinkButton({ title: 'GO', url: '/lecture/mri', })}
                    </div>
                    <div className="exp_row">
                        <h3>X線</h3>
                        <p>この章ではX線に関する基本的な事項についてまとめていきます。</p>
                        {LinkButton({ title: 'GO', url: '/lecture/x_ray', })}
                    </div>
                </div>
                <div className="exp">
                    <h2>頭部</h2>
                    <div>
                        <div className="exp_row">
                            <img className="exp_row_img" src={headimg} alt='headimg'></img>
                            <h3>頭部の正常解剖と構造</h3>
                            <p>この章では頭部の正常画像をもとに、
                                頭部の解剖学的構造を理解しながら頭部診断時のルーティンを確認します。</p>
                            {LinkButton({ title: 'GO', url: '/lecture/head', })}
                        </div>
                    </div>
                </div>
                <div className="exp">
                    <h2>胸部</h2>
                    <div>
                        <div className="exp_row">
                            <img className="exp_row_img" src={thoraximg} alt='thoraximg'></img>
                            <h3>胸部の正常解剖と構造</h3>
                            <p>この章では胸部の正常画像をもとに、
                                胸部の解剖学的構造を理解しながら胸部診断時のルーティンを確認します。</p>
                            {LinkButton({ title: 'GO', url: '/lecture/thorax', })}
                        </div>
                    </div>
                </div>
                <div className="exp">
                    <h2>腹部</h2>
                    <div>
                        <div className="exp_row">
                            <img className="exp_row_img" src={abdomenimg} alt='abdoimg'></img>
                            <h3>腹部の正常解剖と構造</h3>
                            <p>この章では腹部の正常画像をもとに、
                                腹部の解剖学的構造を理解しながら腹部診断時のルーティンを確認します。</p>
                            {LinkButton({ title: 'GO', url: '/lecture/abdomen', })}
                        </div>
                    </div>
                </div>
                <div className="exp">
                    <h2>骨盤部</h2>
                    <div>
                        <div className="exp_row">
                            <img className="exp_row_img" src={pelvisimg} alt='pelvisimg'></img>
                            <h3>骨盤部の正常解剖と構造</h3>
                            <p>この章では骨盤部の正常画像をもとに、
                                骨盤部の解剖学的構造を理解しながら骨盤部診断時のルーティンを確認します。</p>
                            {LinkButton({ title: 'GO', url: '/lecture/pelvis', })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
