import React from 'react';
import Particles from 'react-particles-js';

const Background = () => {
    return (
        <Particles style={{ minHeight: '100vh', minWidth: '100vw'}}
            params={{
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 2,
                            color: "#000000"
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.6,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 5,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 120,
                            line_linked: {
                            opacity: 0.6
                            }
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        },
                    }
                }
            }}
        />
    )
};

export default Background