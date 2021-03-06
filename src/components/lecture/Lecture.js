import ExamplePageBasic from './ExamplePageBasic.js';
import Head from './Head';
import Pelvis from './Pelvis.js';

export default function Lecture(props) {

    let lecture;
    switch (props.match.params.sitekind) {
        case 'ct':
            lecture = <ExamplePageBasic myprop='ct' />;
            break;
        case 'head':
            lecture = <Head />;
            break;
        case 'thorax':
            lecture = <ExamplePageBasic myprop='thorax' />;
            break;
        case 'abdomen':
            lecture = <ExamplePageBasic myprop='abdomen' />;
            break;
        case 'pelvis':
            lecture = <Pelvis />;
            break;
        default:
            lecture = <p>no</p>
    }
    return (
        <div className="container">
            {lecture}
        </div>
    );
}
