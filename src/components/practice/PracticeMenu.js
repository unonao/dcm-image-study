
//images
import headimg from '../images/Head.jpg'
import thoraximg from '../images/Thorax.jpg'
import abdomenimg from '../images/Abdomen.jpg'
import pelvisimg from '../images/Pelvis.jpg'

export default function PracticeMenu() {
    return (
        <div>
            <div className='explanation'>
                <table>
                    <tr>
                        <th>　　</th>
                        <th>部位</th>
                        <th>Level A</th>
                        <th>Level B</th>
                        <th>Level C</th>
                        <th>Level D</th>
                        <th>Level E</th>
                    </tr>
                    <tr>
                        <th class="icon bird"><img className="exp_row_img" src={headimg} alt='頭'></img></th>
                        <th>頭部</th>
                        <td onClick={() => { window.open('/grid/705601001', '_blank') }}>705601001</td>
                        <td onClick={() => { window.open('/grid/701401002', '_blank') }}>701401002</td>
                        <td onClick={() => { window.open('/grid/707712001', '_blank') }}>707712001</td>
                        <td onClick={() => { window.open('/grid/700800001', '_blank') }}>700800001</td>
                        <td onClick={() => { window.open('/grid/707711002', '_blank') }}>707711002</td>
                    </tr>
                    <tr>
                        <th class="icon whale"><img className="exp_row_img" src={thoraximg} alt='胸'></img></th>
                        <th>胸部</th>
                        <td>0400601001</td>
                        <td>0403911001</td>
                        <td>0403501001</td>
                        <td>0400112001</td>
                        <td>0407801001</td>
                    </tr>
                    <tr>
                        <th class="icon crab"><img className="exp_row_img" src={abdomenimg} alt='腹'></img></th>
                        <th>腹部</th>
                        <td>　　</td>
                        <td>　　</td>
                        <td>　　</td>
                        <td>　　</td>
                        <td>　　</td>
                    </tr>
                    <tr>
                        <th class="icon whale"><img className="exp_row_img" src={pelvisimg} alt='胸'></img></th>
                        <th>骨盤部</th>
                        <td>0901012003</td>
                        <td>0901101001</td>
                        <td>0901702001</td>
                        <td>0808201002</td>
                        <td>0807912001</td>
                    </tr>
                </table>
            </div>
            <div className='practice_sample'>
                <p><a href="/grid/viewer" target="_blank">サンプル</a></p>
            </div>
        </div>
    );
}
