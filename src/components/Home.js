import image1 from './images/28774EB8-7CDC-4656-9D36-406A7B4F1AEC.png'
import { LinkButton } from './parts/LinkButton';

export function Home() {
    const examples1 = {
        title: '進む',
        url: '/lecture',
        text: '解説ページへ',
    };
    const examples2 = {
        title: '進む',
        url: '/practice_menu',
        text: '演習ページへ',
    };

    return (
        <div className="container">
            <div className="row" >
                <h1 className="row_head">画像診断勉強ツール「dcm-image-study」へようこそ！</h1>
            </div>
            <div>
                <img className="row_head_img" src={image1} alt='background'></img>
            </div>
            <div className="row">
                <div className="row_body">
                    <h2 className="thema"><span className='under'>使いやすいツールを目指して</span></h2>
                    <div className="row_body_sentense">
                        <p>このツールは,放射線診断科医、医学生、情報科の学生によって作られたものです。
                            医学生が欲しいものを形にしたので、効率よく勉強できる形になっています。
                            解説はプロの放射線診断科医が作成しています。
                            このツールを通して、普段放射線診断医がどのように鑑別を行っているか垣間見ることができるでしょう。
                            今こそ自分のスキルアップをしてみませんか？</p>
                    </div>
                </div>
                <div className="row_body">
                    <h2 className="thema"><span className='under'>厳選された症例と洗練された解説</span></h2>
                    <div className="row_body_sentense">
                        <p>このツールで使用している症例は、医学生と医師が話し合いを重ね、学習効果の高いものばかりを扱っています。
                            １つの症例から多くのことを吸収できるはずです。
                            解説は、放射線診断医監修のもと医学生で作成しています。
                            医学生目線で作成していますので、本当に知りたかった部分がここで分かるかもしれません。</p>
                    </div>
                    {LinkButton(examples1)}
                </div>
                <div className="row_body">
                    <h2 className="thema"><span className='under'>すぐに、実戦</span></h2>
                    <div className="row_body_sentense">
                        <p>画像診断は、ただ見ていればできるようになるという甘いものではありません。
                            できる人の話を聞きながら、自ら手を動かし、考えながら学習をすることで習得していくものです。
                            そこで、このツールでは、ビューワーを用いながら実際に診断の練習ができるような形にしました。
                            解説ページと合わせて実戦練習を積むことでより高い学習効果が期待できます。</p>
                    </div>
                    {LinkButton(examples2)}
                </div>
            </div>
        </div>
    );
}
