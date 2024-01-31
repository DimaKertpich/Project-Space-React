import React, {useState, useEffect} from 'react'
import AnimationLogIn from './animationAuth/animationLogIn'
import AnimationRegistr from './animationAuth/animationRegistr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import './auth.scss'
import { useDispatch } from 'react-redux'
import { toggleAuthWin } from '../../store/authUserSlice'



function Authorization(){

    const dispatch = useDispatch();

    // Register form

    let [fieldEnterRegistr, setFieldEnterRegistr] = useState([
        {
            value: '',
            text: 'Name',
            pattern: /^[a-zA-Z]{2,30}$/,
            cheked: false,
            active: false,
            id: 0
        },
        {
            value: '',
            text: 'Email',
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            cheked: false,
            active: false,
            id: 1
        },
        {
            value: '',
            text: 'Password',
            pattern: /\S{3}/,
            cheked: false,
            active: false,
            id: 2
        }
    ])

    let showFieldEnterRegistr = fieldEnterRegistr.map((item) =>(
        <div className='authorization__wrapper-registration-data-user' key={item.id}>
            <div className='authorization__wrapper-registration-data-user-text'>
                { item.text }
                { item.active === true &&

                    <span>
                        {item.cheked === false && <FontAwesomeIcon className='authorization__wrapper-registration-data-cross' icon={faXmark}></FontAwesomeIcon>}
                        {item.cheked === true && <FontAwesomeIcon className='authorization__wrapper-registration-data-check' icon={faCheck}></FontAwesomeIcon>}
                    </span> 
                }   
            </div>
            <div className='authorization__wrapper-registration-data-user-input'>
                <input onChange={(e) => validRegister(e.target.value, item.id)} value={item.value} type={item.text}></input>
            </div>
        </div>
    ))

    // Animation astronaut

    let [currentInput, setCurrentInput] = useState(0)
    let [currentAnimation, setCurrentAnimation] = useState(0) // Передаю в дочірній компонент

    useEffect(() =>{

        const count = fieldEnterRegistr.filter((item) => item.cheked).length
        setCurrentAnimation(count)
    }, [fieldEnterRegistr[currentInput].cheked])

    function activeLogIn(){
            document.querySelector('.authorization__wrapper-logIn-animation').classList.add('moveLogIn')
            document.querySelector('.authorization__wrapper-registration-animation').classList.add('hideRegistr')
            document.querySelector('.area').classList.add('rightArea')

            setFieldEnterRegistr(fieldEnterRegistr.map((item) =>{
                return {...item, value: '', active: false}
            }))
    }

    // Valid register form
        
    
    function validRegister(value, id){

        setCurrentInput(currentInput = id)

            setFieldEnterRegistr(fieldEnterRegistr.map((item) =>{
                if(item.pattern.test(value) && item.id === id){
                    return {...item, cheked: true, active: true, value}
                }
                else if(!item.pattern.test(value) && item.id === id){
                    return {...item, cheked: false, active: true, value}
                }
                else{
                    return item
                }
            }))
    }
        // Log in form

    let fieldEnterLogIn = [
            {
                value: 'Email',
                id: 0
            },
            {   
                value: 'Password',
                id: 1
            }
    ] 

    let showFieldEnterLogIn = fieldEnterLogIn.map((item) => (
            <div className='authorization__wrapper-logIn-data-user' key={item.id}>
                <div className='authorization__wrapper-logIn-data-user-text'>{ item.value }</div>
                <div className='authorization__wrapper-logIn-data-user-input'>
                    <input type={item.value}></input>
                </div>
            </div>
    ))

    function activeRegist(){
            document.querySelector('.authorization__wrapper-logIn-animation').classList.remove('moveLogIn')
            document.querySelector('.authorization__wrapper-registration-animation').classList.remove('hideRegistr')
            document.querySelector('.area').classList.remove('rightArea')
    }


    return(
        <div className='authorization'>
            <div className='authorization__wrapper'>

                {/* Registr */}

                <div className='authorization__wrapper-registration'>     
                    <div className='authorization__wrapper-registration-title'>
                        <h3>Create new account</h3>
                    </div>
                    <div className='authorization__wrapper-registration-data'>
                        { showFieldEnterRegistr }
                    </div>
                    <div className='authorization__wrapper-registration-btn'>
                        <button onClick={() => dispatch(toggleAuthWin())} id='authorization__wrapper-registration-btn-back' type='button'>Back</button>
                        <button type='button'>Create account</button>
                    </div>

                    <div onClick={activeRegist} className='authorization__wrapper-registration-animation'>
                        <AnimationLogIn></AnimationLogIn>
                    </div>
                </div>

                {/* Log In */}

                <div className='authorization__wrapper-logIn'>
                    <div className='authorization__wrapper-logIn-title'>
                        <h3>
                            Authorization
                        </h3>
                    </div>
                    <div className='authorization__wrapper-logIn-data'>
                        { showFieldEnterLogIn }
                    </div>
                    <div className='authorization__wrapper-logIn-btn'>
                        <button onClick={() => dispatch(toggleAuthWin())} id='authorization__wrapper-logIn-btn-back' type='button'>Back</button>
                        <button type='button'>Log In</button>
                    </div>

                    <div onClick={ activeLogIn } className='authorization__wrapper-logIn-animation'>
                        <AnimationRegistr counterAnimation={currentAnimation}></AnimationRegistr>
                    </div>
                    
                </div>
            

                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >

                

            </div>

        </div>
    )
}

export default Authorization;