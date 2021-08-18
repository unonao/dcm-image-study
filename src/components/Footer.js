import mnesimg from './images/logo_mnes.jpg'
import laimeimg from './images/logo_white.png'
import mnistimg from './images/MNiST.png'
export function Footer() {
    return (
        <footer>
            <div className="foots">
                <div className="foot">関連団体</div>
                <div className="link_imgs">
                    <a className='link_img' rel="noreferrer" href="https://mnes.life/" target="_blank"><img className="img img_mnes" src={mnesimg} alt="MNES"></img></a>

                    <a className='link_img' rel="noreferrer" href="https://laime-ml.github.io/?fbclid=IwAR2ETxkW4ZUq9oRqd7Mn04ffzviU7GYSrS3Ho3SzAsgkB5wmxdrhR8QzLi4" target="_blank"><img className="img img_laime" border="1" src={laimeimg} alt="LAIME"></img></a>

                    <a className='link_img' rel="noreferrer" href="https://sites.google.com/mnes.org/mnist-official/home" target="_blank"><img className="img img_mnist" src={mnistimg} alt="MNiST"></img></a>

                </div>
                <div className="button">
                    <button className="btn">CONTACT</button>
                </div>
                <div className="bottom">©MNiST</div>
            </div>
        </footer>
    )
};
