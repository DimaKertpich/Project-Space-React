import Particles from "react-particles";
import { loadFull } from 'tsparticles';

function jsParticles(){

    const particlesInit = async (engine) =>{
        await loadFull(engine)
    }

    const particlesLoaded = (container) => {
        console.log("Particles container loaded", container);
    }

    return(
        <div>
            <Particles className="header__tsparticles" id="tsparticles" 
                            init={particlesInit} 
                            loaded={particlesLoaded} 
                            options={{
                                background: {
                                color: {
                                    value: "#141416",
                                },
                                },
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                    onhover: {
                                        enable: true,
                                        mode: "bubble"
                                    },
                                    resize: true
                                    },
                                    modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                        opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 170,
                                        size: 5,
                                        duration: 6,
                                        opacity: -1,
                                        speed: 1
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4
                                    },
                                    push: {
                                        quantity: 4
                                    },
                                    remove: {
                                        particles_nb: 4
                                    }
                                    }
                                },
                                particles: {
                                    number: {
                                    value: 218,
                                    density: {
                                        enable: true,
                                        value_area: 789.1850086415761
                                    }
                                    },
                                    color: {
                                    value: "#ffffff"
                                    },
                                    shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    }
                                    },
                                    opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 1,
                                        opacity_min: 0,
                                        sync: false
                                    }
                                    },
                                    size: {
                                    value: 3,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 5,
                                        size_min: 0.3,
                                        sync: false
                                    }
                                    },
                                    line_linked: {
                                    enable: false,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                    },
                                    move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "none",
                                    random: true,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 600
                                    }
                                    }
                                },
                                detectRetina: true
                }}
            />
        </div>
    )

}

export default jsParticles;