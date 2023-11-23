import React from 'react'

import { useUpdateEffect } from 'usehooks-ts'
import './animationRegistr.scss'
import asteroid from '../../../../assets/image/auth/asteroid.png'
import astronaut from '../../../../assets/image/astronaut/astronaut.png'
import earth from '../../../../assets/image/auth/earth.png'
import moon from '../../../../assets/image/auth/moon.png'


function AnimationRegistr(props){
    
    let currentAnim = props.counterAnimation
    let astronautMove = document.querySelector('.animationRegistr__wrapper-logIn-animation-astronaut')

    useUpdateEffect(() => {

        if(currentAnim === 0){
            astronautMove.classList.remove('moveAstronautOne')
        }
        if(currentAnim === 1){
            astronautMove.classList.add('moveAstronautOne')
            astronautMove.classList.remove('moveAstronautTwo')
        }
        if(currentAnim === 2){
            astronautMove.classList.remove('moveAstronautOne')
            astronautMove.classList.add('moveAstronautTwo')
            astronautMove.classList.remove('moveAstronautThree')
        }
        if(currentAnim === 3){
            astronautMove.classList.remove('moveAstronautTwo')
            astronautMove.classList.add('moveAstronautThree')
        }

      }, [props.counterAnimation]);


    return(
        <div className='animationRegistr'>
            <div className='animationRegistr__wrapper-logIn-animation-moon'>
                <img src={moon} alt='moon'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-earth'>
                <img src={earth} alt='earth'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-astronaut'>
                <img src={astronaut} alt='astronaut'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-asteroid'>
                <img src={asteroid} alt='asteroid'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-hover'>
                <h3>Log Ind </h3>
            </div>
        </div>
    )
}
export default AnimationRegistr;