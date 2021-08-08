import './PracticeViewer.css'

export function PracticeHeader(patientInfo) {
    return (
        <div className='viewer_header'>
            <div className='viewer_header_box'>
                <div className='label_menu'>
                    <div className='label'><h3>ID:</h3></div>
                    <div className='label_box id_num'>
                        <h3>{patientInfo[0]}</h3>
                    </div>
                </div>
            </div>
            <div className='viewer_header_box'>
                <div className='label_menu'>
                    <div className='label'><h3>年齢:</h3></div>
                    <div className='label_box'>
                        <h3>{patientInfo[1]}</h3>
                    </div>
                </div>
            </div>
            <div className='viewer_header_box'>
                <div className='label_menu'>
                    <div className='label'><h3>性別:</h3></div>
                    <div className='label_box'>
                        <h3>{patientInfo[2]}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}