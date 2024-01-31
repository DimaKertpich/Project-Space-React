import React, {useCallback} from 'react'
import './animationRegistr.scss'
import asteroid from '../../../../assets/image/auth/asteroid.png'
import astronaut from '../../../../assets/image/astronaut/astronaut.png'
import earth from '../../../../assets/image/auth/earth.png'
import moon from '../../../../assets/image/auth/moon.png'


function AnimationRegistr(props){
    
    let currentAnim = props.counterAnimation

    const astronautIsMoving = useCallback(() => {
        
            switch(currentAnim){
                case 0:
                    return;
                case 1:
                    return 'moveAstronautOne';
                case 2:
                    return 'moveAstronautTwo';
                case 3:
                    return 'moveAstronautThree';
                default:
                    return;
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
            <div className={`animationRegistr__wrapper-logIn-animation-astronaut ${astronautIsMoving()}`}>
                <img src={astronaut} alt='astronaut'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-asteroid'>
                <img src={asteroid} alt='asteroid'></img>
            </div>
            <div className='animationRegistr__wrapper-logIn-animation-hover'>
                <h3>Log in </h3>
            </div>
        </div>
    )
}
export default AnimationRegistr;