import logo from '../../assets/image/logo1.png'
import instagram from '../../assets/image/social/instagramK 1.png'
import telegram from '../../assets/image/social/telegram 1.png'
import discord from '../../assets/image/social/discord 1.png'
import facebook from '../../assets/image/social/free-icon-facebook-145802 1.png'
import linkedIn from '../../assets/image/social/linkedin 1.png'
import './footerStyle.scss'

function Footer(){
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__wrapper-nav'>
                        <div className='footer__wrapper-nav-about'>
                            <ul>
                                <li>ABOUT</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Community</li>
                                <li>Litepaper</li>
                            </ul>
                        </div>
                        <div className='footer__wrapper-nav-features'>
                            <ul>
                                <li>FEATURES</li>
                                <li>Exchange</li>
                                <li>Liquidity</li>
                                <li>Farms</li>
                                <li>Launchpools</li>
                                <li>Fixed Staking</li>
                            </ul>
                        </div>
                        <div className='footer__wrapper-nav-service'>
                            <ul>
                                <li>SERVICE</li>
                                <li>Referral</li>
                                <li>Space token</li>
                                <li>Audits</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__wrapper-meta'>
                        <div className='footer__wrapper-meta-space'>
                            <div className='footer__wrapper-meta-space-desc'>
                                <div className='footer__wrapper-meta-space-desc-img'>
                                    <div>
                                        <img src={logo}></img>
                                    </div>
                                    <div>
                                        <p>
                                            <span>SPC</span>
                                            <br/>
                                            $0.87
                                        </p>
                                    </div>
                                </div>
                                <div className='footer__wrapper-meta-space-desc-btn'>
                                    <button type='button'>Buy SPC</button>
                                </div>
                            </div>
                            <div className='footer__wrapper-meta-space-info'>
                                <ul>
                                    <li>Max supply:</li>
                                    <li>Total supply:</li>
                                    <li>Circulating supply:</li>
                                    <li>Total Burned:</li>
                                    <li>Market Cap:</li>
                                </ul>
                                <ul id="info-calc">
                                    <li>310 000 000</li>
                                    <li>112 991 776</li>
                                    <li>137 151 791</li>
                                    <li>13 937 190</li>
                                    <li>$79 468 941</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer__wrapper-meta-social'>
                            <h3>You can find me here</h3>

                            <div className='footer__wrapper-meta-social-link'>
                                <div className='footer__wrapper-meta-social-instagram'><a href="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiRit-lrsGCAxXrSvEDHaYhBEsQPAgJ"><img src={instagram} alt="instagram"></img></a></div>
                                <div className='footer__wrapper-meta-social-instagram'><a href="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiRit-lrsGCAxXrSvEDHaYhBEsQPAgJ"><img src={telegram} alt="telegram"></img></a></div>
                                <div className='footer__wrapper-meta-social-instagram'><a href="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiRit-lrsGCAxXrSvEDHaYhBEsQPAgJ"><img src={discord} alt="discord"></img></a></div>
                                <div className='footer__wrapper-meta-social-instagram'><a href="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiRit-lrsGCAxXrSvEDHaYhBEsQPAgJ"><img src={facebook} alt="facebook"></img></a></div>
                                <div className='footer__wrapper-meta-social-instagram'><a href="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiRit-lrsGCAxXrSvEDHaYhBEsQPAgJ"><img src={linkedIn} alt="linkedIn"></img></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;