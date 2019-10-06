import React from "react"
import Particles from "react-particles-js";

const particleOptions = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 2
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}

const ParticleEffect = () => {
    return (
        <Particles 
            params={particleOptions}
            style={{
                width: "100%",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    )
}

export default ParticleEffect