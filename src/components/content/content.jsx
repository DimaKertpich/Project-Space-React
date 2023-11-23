import React, {useEffect, useRef, useState} from 'react'
import './contentStyle.scss'
import bitcoinImage from '../../assets/image/info/one.png'
import walletImage from '../../assets/image/info/two.png'
import stakingImage from '../../assets/image/info/three.png'
import growthImage from '../../assets/image/info/four.png'
import contentImgOne from '../../assets/image/info/one-1.png'
import contentImgTwo from '../../assets/image/info/two-2.jpg'
import contentImgThree from '../../assets/image/info/three-3.png'
import contentImgFour from '../../assets/image/info/four-4.jpeg'

function Content(){


    let currentImg = useRef(0)
    let [electImg, setElectImg] = useState(null)
    let [electContent, setElectContent] = useState(null)

    let arrayItem = [
        {
            image: bitcoinImage,
            text: 'The fall of bitcoin',
            id: 0
        },
        {
            image: walletImage,
            text: 'Сrypto wallets',
            id: 1
        },
        {
            image: stakingImage,
            text: 'Staking 10% APY',
            id: 2
        },
        {
            image: growthImage,
            text: 'Bitcoin 100k?',
            id: 3
        }
    ]

    // switching pictures



    function funonload() {
        setElectContent(electContent = document.querySelectorAll('.content__wrapper-dec-features'))

       
        deleteMoveImg();
    } 

    useEffect(() =>{
        funonload(); 
    }, [])


    let arraySlider = arrayItem.map((item) =>(
        <div className='content__wrapper-slider-image' onClick={event => activeImg(event, item.id)} key={item.id}>
            <img src={item.image} alt="img"></img>         
        </div> 
    ))

    function activeImg(event, value){
        currentImg.current = value

        deleteMoveImg();

        if(currentImg.current === value){
            event.target.classList.add('moveSlider')
        }
    }

    function deleteMoveImg(){
        setElectImg(electImg = document.querySelectorAll('.content__wrapper-slider-image img'))

        for(let i = 0; i < electImg.length; i++){
            electImg[i].classList.remove('moveSlider')

            if(currentImg.current === 0){
                electImg[0].classList.add('moveSlider')
            }
        }

        for(let i = 0; i < electContent.length; i++){
            electContent[i].classList.remove('showContent')
            electContent[currentImg.current].classList.add('showContent')
        }

    }

    // show content

    let contentInfo = [
        {
            title: "Why Is Bitcoin Falling Today?",
            subTitle: "The price of Bitcoin (BTC) has been dropping sharply over recent months, thanks to major turbulence in cryptocurrency markets.",
            textUp: "As of this writing, BTC is hovering around $20,000, down 32% on the month. This is a major break lower from the $28,000 to $32,000 range the benchmark crypto had been seeing since early May.",
            textCenter: "On June 27, Three Arrows Capital (3AC) defaulted on a loan from Voyager Digital, worth about $350 million in crypto assets. The loan was made up of USD Coin (USDC) and roughly 15,250 BTC. 3AC was a major backer of TerraUSD/LUNA, the epicenter of last month’s stablecoin meltdown.",
            textDown: "To make matters worse, the Financial Times reported earlier this month that Genesis and BlockFi liquidated some of 3AC’s positions.",
            image: contentImgOne,
            id: 0
        },
        {
            title: "What is a crypto wallet?",
            subTitle: "Cryptocurrency wallets store users’ public and private keys while providing an easy-to-use interface to manage crypto balances.",
            textUp: "It is important to remember that cryptocurrency transactions do not represent a ‘sending’ of crypto tokens from your mobile phone to someone else’s mobile phone. When you are sending tokens, you are actually using your private key to sign the transaction and broadcast it to the blockchain network. The network will then include your transaction to reflect the updated balance in your address and the recipient’s.",
            textCenter: "So, the term ‘wallet’ is actually somewhat of a misnomer as crypto wallets don’t really store cryptocurrency in the same way physical wallets hold cash. Instead, they read the public ledger to show you the balances in your addresses and also hold the private keys that enable you to make transactions.",
            textDown: "A key is a long string of random, unpredictable characters. While a public key is like your bank account number and can be shared widely, your private key is like your bank account password or PIN and should be kept secret...",
            image: contentImgTwo,
            id: 1
        },
        {
            title: "What is staking?",
            subTitle: "Like a lot of things in crypto, staking can be a complicated idea or a simple one depending on how many levels of understanding you want to unlock.",
            textUp: "If a cryptocurrency you own allows staking — current options include Ethereum, Tezos, Cosmos, Solana, and Cardano — you can “stake” some of your holdings and earn a percentage-rate reward over time.",
            textCenter: "Staking has the added benefit of contributing to the security and efficiency of the blockchain projects you support. By staking some of your funds, you make the blockchain more resistant to attacks and strengthen its ability to process transactions.",
            textDown: "Staking is generally open to anyone who wants to participate. That said, becoming a full validator can require a minimum investment, technical knowledge, and a dedicated computer that can perform validations day or night without downtime...",
            image: contentImgThree,
            id: 2
        },
        {
            title: "Bitcoin will shoot over $100K?",
            subTitle: "With consensus calling for Q4 2022 to match the end of the 2018 Bitcoin bear market, few are in the mood to call for a trend change.",
            textUp: "Predictions about Bitcoin’s future performance have always been a popular exercise among both industry experts and ordinary investors. But as is often the case in such cases, the predictions have rarely turned out to be right, whether in terms of time frame or intensity Certainly, cryptocurrencies have shown enough volatility that being able to make predictions becomes an increasingly difficult task.",
            textCenter: "However, some of the predictions heard in the past few months that Bitcoin would reach $1 million in value within a few years, such as that of former Bitmex CEO Arthur Hayes, certainly seemed like true hype.",
            textDown: "The CEO of Morgan Creek, a company specializing in investments and asset management, is also accustomed to making predictions about Bitcoin, which have almost always turned out to be far-fetched...",
            image: contentImgFour,
            id: 3
        }
    ]

    let showContentInfo = contentInfo.map((obj) =>(
        <div className='content__wrapper-dec-features' key={obj.id}>
                <div className='content__wrapper-dec-features-caption'>
                    <div className='content__wrapper-dec-features-subtitle'>
                        <h3>{ obj.title } </h3>
                        <h4>{ obj.subTitle }</h4>
                    </div>
                    <div className='content__wrapper-dec-features-img'>
                        <img src={ obj.image } alt="img"></img>
                    </div>
                </div>
                <div className='content__wrapper-dec-features-text'>
                    <p>{ obj.textUp }</p>
                    <p>{ obj.textCenter } </p>
                    <p>{ obj.textDown }</p>
                </div>
                <div className='content__wrapper-dec-features-btn'>
                    <button type='button'>Learn more</button>
                </div>
        </div>
    ))

    return(
        <div className='content'>
            <div className='container'>
                <div className='content__wrapper'>
                    <div className='content__wrapper-title'>
                        <h3>News in the world of "SPACE" and cryptocurrencies</h3>
                    </div>

                    <div className='content__wrapper-slider'>
                        { arraySlider }
                    </div>

                    <div className='content__wrapper-desc'>
                        { showContentInfo }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;