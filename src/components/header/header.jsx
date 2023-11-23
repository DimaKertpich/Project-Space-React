import React, {useRef, useEffect} from 'react'
import Authorization from './auth/auth'
import ParticlesJs from './jsParticles'
import Parallax from 'parallax-js'
import logo from '../../assets/image/logo1.png'
import './headerStyle.scss'
import moon from '../../assets/image/moon.png'
import cometFirst from '../../assets/image/comet1.png'
import cometSecond from '../../assets/image/comet2.png'
import cometThird from '../../assets/image/comet3.png'

function Header(){

    const buttonRight ={
        marginRight: '10px'
    };

    const buttonLeft ={
        marginLeft: '10px'
    };

    const headerEl = useRef(null);

    useEffect(() => {
        var parallaxInstance = new Parallax(headerEl.current);
        return () => parallaxInstance.disable();
    })
    return(
        <header className='header'>

            <ParticlesJs></ParticlesJs>

            <div className='container'>
                <div className='header__wrapper'>
                    <div className='header__wrapper-nav'>
                        <div className='header__wrapper-nav-logo'>
                            <div className='header__wrapper-nav-logo-image'>
                                <img src={logo} alt='logo'></img>
                            </div>
                            <div className='header__wrapper-nav-logo-text'>
                                <p>

                                    Space
                                    <br />
                                    <span>Opportunity</span>
                                </p>
                                
                            </div>  
                        </div>
                        <ul className='header__wrapper-nav-manu'>
                            <li>Home</li>
                            <li>Swap</li>
                            <li>Our project</li>
                            <li>Sing in</li>
                        </ul>
                    </div>
                    <div className='header__wrapper-title'>
                        <h3>Reimagine your world</h3>
                        <h4>Powered by <a href='https://www.instagram.com/d78_voluychik/'>@d78_voluychik</a></h4>

                        <p>
                            Through simple, secure, and scalable technology, 
                            SPACE empowers millions to invent and explore new experiences. 
                            Business, creativity, and community are being reimagined for a more sustainable and inclusive future
                        </p>

                        <div className='header__wrapper-title-btn'>
                            <button style={buttonRight} type='button'>Buy cryptocurrency</button>
                            <button style={buttonLeft} type='button'>Learn more</button>
                        </div>
                    </div>
                </div>    
            </div>

            <div ref={headerEl} className='header__parallax'>
                <ul data-depth="0.1" id="scene" className='header__space-item'>
                    <li><img src={moon} alt="moon" /></li>
                    <li><img src={cometFirst} alt="comet" /></li>
                    <li><img src={cometThird} alt="comet" /></li>
                    <li><img src={cometThird} alt="comet" /></li>
                    <li><img src={cometThird} alt="comet" /></li>
                    <li><img src={cometSecond} alt="comet" /></li>
                    <li><img src={cometSecond} alt="comet" /></li>
                    <li><img src={cometSecond} alt="comet" /></li>
                    <li><img src={cometSecond} alt="comet" /></li>
                    <li><img src={cometSecond} alt="comet" /></li>
                </ul> 
            </div> 
            <div className='header__hide'></div>
            <Authorization></Authorization>
        </header>
    )
}

export default Header;