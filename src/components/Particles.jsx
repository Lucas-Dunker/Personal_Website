import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadLinksPreset } from "@tsparticles/preset-links";
import spinner from "../assets/loading-ring.svg";

export const ParticlesEngine = () => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      fullScreen: true,
      smooth: true,
      zLayers: 1,
      particles: {
        color: {
          value: "#857D72",
        },
        links: {
          color: "#857D72",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="animate-fade animate-delay-500"
      />
    );
  }

  return (
    <div className="absolute ml-[-2rem] left-[50%] top-[50%] animate-fade animate-delay-500">
      <img height="48px" width="48px" src={spinner.src} />
    </div>
  );
};
