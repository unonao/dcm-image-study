import mnesimg from './images/logo_mnes.jpg'
import laimeimg from './images/logo_white.png'
import mnistimg from './images/MNiST.png'
export function Footer() {
    return (
        <footer>
            <div className="foots">
                <div className="foot">関連団体</div>
                <div className="link_imgs">
                    <div className='link_img'>
                        <a rel="noreferrer" href="https://mnes.life/" target="_blank"><img className="img" border="0" width="250" height="125" src={mnesimg} alt="MNES"></img></a>
                    </div>
                    <div className='link_img'>
                        <a rel="noreferrer" href="https://laime-ml.github.io/?fbclid=IwAR2ETxkW4ZUq9oRqd7Mn04ffzviU7GYSrS3Ho3SzAsgkB5wmxdrhR8QzLi4" target="_blank"><img className="img" border="1" width="330" height="125" src={laimeimg} alt="LAIME"></img></a>
                    </div>
                    <div className='link_img'>
                        <a rel="noreferrer" href="https://sites.google.com/mnes.org/mnist-official/home" target="_blank"><img className="img" width="240" height="125" src={mnistimg} alt="MNiST"></img></a>
                    </div>
                </div>
                <div className="button">
                    <button className="btn">CONTACT</button>
                </div>
                <div className="bottom">©MNiST</div>
            </div>
        </footer>
    )
};
