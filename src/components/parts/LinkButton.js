
import { Link } from 'react-router-dom';

/**
 *
 *
 * @param {*} { title, url, text, screenshotUrl }
 * @returns
 */
export function LinkButton({ title, url, text, target = undefined }) {
    return (
        <div>
            <p><span className="btn_txt">{text}</span></p>
            <h5>
                <Link to={url} target={target}><button className="row body_btn">{title}</button></Link>
            </h5>
        </div>
    );
}
