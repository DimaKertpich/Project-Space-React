import React, {useState, useEffect} from 'react'
import AnimationLogIn from './animationAuth/animationLogIn'
import AnimationRegistr from './animationAuth/animationRegistr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import './auth.scss'
import { useDispatch } from 'react-redux'
import { toggleAuthWin, authUser } from '../../store/authUserSlice'
import firebase from 'firebase/compat/app'
import checkGoodRegistr from '../../../assets/image/auth/checked.png'


function Authorization(){

    const dispatch = useDispatch();

    // Displaying the registration form

    let [displayRegistr, setDisplayRegistr] = useState(true)

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
                <input onChange={(e) => validRegister(e.target.value, item.id)} value={item.value} type={item.text} name={item.text} autoComplete="off"></input>
            </div>
        </div>
    ))

    // Animation astronaut

    let [currentInput, setCurrentInput] = useState(0)
    let [currentAnimation, setCurrentAnimation] = useState(0) // Передаю в дочірній компонент
    let [disabledRegister, setDisabledRegister] = useState(true)

    useEffect(() =>{

        const count = fieldEnterRegistr.filter((item) => item.cheked).length
        setCurrentAnimation(count)
        if(count === 3){
            setDisabledRegister(disabledRegister = !disabledRegister)
        }
    }, [fieldEnterRegistr[currentInput].cheked])

    function activeLogIn(){
            setDisplayRegistr(displayRegistr = true)
            setDisabledRegister(disabledRegister = true)
            document.querySelector('.authorization__wrapper-logIn-animation').classList.add('moveLogIn')
            document.querySelector('.authorization__wrapper-registration-animation').classList.add('hideRegistr')
            document.querySelector('.area').classList.add('rightArea')
            setMesErrorRegistr(mesErrorRegistr = null)


            setFieldEnterRegistr(fieldEnterRegistr.map((item) =>{
                return {...item, value: '', active: false}
            }))
    }

    // Valid register form
    let [nameUser, setNameUser] = useState(null)
    let [emailUser, setEmailUser] = useState(null)
    let [passwordUser, setPasswordUser] = useState(null)
    
    function validRegister(value, id){

        if(id === 0){
            setNameUser(value)
        }

        if(id === 1){
            setEmailUser(value)
        }

        if(id === 2){
            setPasswordUser(value)
        }

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
                    <input type={item.value} onChange={(e) => dataUserLog(e.target.value, item.id)}></input>
                </div>
            </div>
    ))

    function activeRegist(){
            document.querySelector('.authorization__wrapper-logIn-animation').classList.remove('moveLogIn')
            document.querySelector('.authorization__wrapper-registration-animation').classList.remove('hideRegistr')
            document.querySelector('.area').classList.remove('rightArea')
    }

    // Create User

    let [mesErrorRegistr, setMesErrorRegistr] = useState(null)
    let [loading, setLoading] = useState(false)

    async function createUser(){    
        setLoading(loading = true)

        try{
            const userUid = await firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser);
            await firebase.database().ref(`/users/${userUid.user.uid}/info`).set({
                nameUser
            })
            setLoading(loading = false)
            setDisplayRegistr(displayRegistr = false)
        }catch(error){
            setLoading(loading = false)
            setMesErrorRegistr(mesErrorRegistr = error.message)
        }
    }

    // Log in user

    let [logEmail, setLogEmail] = useState(null)
    let [logPass, setLogPass] = useState(null)
    let [errorLogIn, setErrorLogIn] = useState(null)
    let [loadingLog, setLoadingLog] = useState(false)
    let [activeBtnLogIn, setActiveBtnLogIn] = useState(true)

    function dataUserLog(value, id){
        if(id === 0){
            setLogEmail(logEmail = value)
        }

        if(id === 1){
            setLogPass(logPass = value)
        }

        if(logEmail !== null && logPass !== null){
            setActiveBtnLogIn(false)
        }else{
            setActiveBtnLogIn(true)
        }
    }

    async function logInUser(){
        setErrorLogIn('')
        setLoadingLog(true)

        try{
            const logUser = await firebase.auth().signInWithEmailAndPassword(logEmail, logPass)
            const infoUser = (await firebase.database().ref(`/users/${logUser.user.uid}/info`).once('value')).val();
            
            setLoadingLog(false)
            dispatch(authUser({uid: logUser.user.uid, email: logUser.user.email, name: infoUser.nameUser}) )
            dispatch(toggleAuthWin())
        }catch(error){
            setLoadingLog(false)
            setErrorLogIn(error.message)
        }
    }

    return(
        <div className='authorization'>
            <div className='authorization__wrapper'>

                {/* Registr */}
                
                    <div className='authorization__wrapper-registration'>

                        {displayRegistr === false && 
                        <div className='authorization__wrapper-goodRegistr'>
                            <div className='authorization__wrapper-goodRegistr-img'>
                                <img src={checkGoodRegistr} alt="check"></img>
                            </div>
                            <div className='authorization__wrapper-goodRegistr-text'>
                                Account created successfully
                            </div>
                            <div className='authorization__wrapper-goodRegistr-btn'>
                                <button type='button'>Log In</button>
                            </div>
                        </div>
                        }

                        {displayRegistr === true &&
                        
                        <div>
                            <div className='authorization__wrapper-registration-title'>
                            <h3>Create new account</h3>
                        </div>
                        <div className='authorization__wrapper-registration-data'>
                            { showFieldEnterRegistr }
                        </div>
                        <div className='authorization__wrapper-registration-btn'>
                            <button onClick={() => dispatch(toggleAuthWin())} id='authorization__wrapper-registration-btn-back' type='button'>Back</button>
                            <button onClick={() => createUser()} disabled={disabledRegister}  type='button'>Create account</button>
                        </div>

                        {loading === true && 
                            <div className='authorization__wrapper-registration-loading'>
                                Loading...
                            </div>}
                        <div className='authorization__wrapper-registration-error'>
                            { mesErrorRegistr }
                        </div>

                        </div> }                         

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
                        <button type='button' onClick={() => logInUser()} disabled={activeBtnLogIn}>Log In</button>
                    </div>

                    {loadingLog === true &&
                        <div className='authorization__wrapper-logIn-loading'>
                            Loading...
                        </div>
                    }

                    <div className='authorization__wrapper-logIn-error'>
                        {errorLogIn}
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