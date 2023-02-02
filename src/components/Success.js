import React from 'react'
import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine@2.8.0/+esm";
    import { loadSlim } from "https://cdn.jsdelivr.net/npm/tsparticles-slim@2.8.0/+esm";
    import { loadExternalPauseInteraction } from "https://cdn.jsdelivr.net/npm/tsparticles-interaction-external-pause@2.8.0/+esm";
    import { loadEmittersPlugin } from "https://cdn.jsdelivr.net/npm/tsparticles-plugin-emitters@2.8.0/+esm";
    import { loadRollUpdater } from "https://cdn.jsdelivr.net/npm/tsparticles-updater-roll@2.8.0/+esm";
    import { loadTiltUpdater } from "https://cdn.jsdelivr.net/npm/tsparticles-updater-tilt@2.8.0/+esm";
    import { loadWobbleUpdater } from "https://cdn.jsdelivr.net/npm/tsparticles-updater-wobble@2.8.0/+esm";
    import { loadMotionPlugin } from "https://cdn.jsdelivr.net/npm/tsparticles-plugin-motion@2.8.0/+esm";
import SuccessCard from './SuccessCard';
function Success() {

    async function loadParticles(options) {
      await loadSlim(tsParticles);
      await loadExternalPauseInteraction(tsParticles);
      await loadEmittersPlugin(tsParticles);
      await loadMotionPlugin(tsParticles);
      await loadRollUpdater(tsParticles);
      await loadTiltUpdater(tsParticles);
      await loadWobbleUpdater(tsParticles);
    
      await tsParticles.load(options);
    }
    
    const configs = {
      background: {
        color: "transparent"
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "pause"
          }
        }
      },
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true
        }
      },
      emitters: [
        {
          rate: {
            quantity: 5,
            delay: 0.15
          },
          particles: {
            move: {
              direction: "top-right",
              outModes: {
                top: "none",
                left: "none",
                default: "destroy"
              }
            }
          },
          position: {
            x: 0,
            y: 30
          }
        },
        {
          rate: {
            quantity: 5,
            delay: 0.15
          },
          particles: {
            move: {
              direction: "top-left",
              outModes: {
                top: "none",
                right: "none",
                default: "destroy"
              }
            }
          },
          position: {
            x: 100,
            y: 30
          }
        }
      ],
      particles: {
        color: {
          value: ["#ffffff", "#c29d0a"]
        },
        move: {
          decay: 0.05,
          direction: "top",
          enable: true,
          gravity: {
            enable: true
          },
          outModes: {
            top: "none",
            default: "destroy"
          },
          speed: {
            min: 10,
            max: 50
          }
        },
        number: {
          value: 0
        },
        opacity: {
          value: 1
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: true,
          speed: {
            min: 5,
            max: 15
          }
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 30
          },
          direction: "random"
        },
        shape: {
          type: ["circle", "star"]
        },
        size: {
          value: {
            min: 0,
            max: 2
          },
          animation: {
            count: 1,
            enable: true,
            speed: 16,
            startValue: "min",
            sync: true
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 30
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7
          }
        }
      }
    };
    
    loadParticles(configs);
    
    



  return (
   <SuccessCard/>
  )
}

export default Success