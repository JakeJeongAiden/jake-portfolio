`use client`;
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export function Background() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -2,
      },
      style: {
        height: "180%",
        width: "100%",
        position: "absolute",
      },

      zLayers: 1,
      smooth: true,
      background: {
        size: "cover", //not for setting width and height
        position: "absolute",
        repeat: "no-repeat",
      },
      backgroundMask: {
        composite: "destination-out",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "connect",
          },
          onHover: {
            enable: true,
            mode: "connect",

            //disabled till I can figure out how to make it work with the parallax effect
            // parallax: {
            //   enable: true,
            //   force: 60,
            //   smooth: 10,
            // },
          },
        },
        //For onHover and onClick Tweak Option.
        modes: {
          push: {
            quantity: 30,
          },
          repulse: {
            distance: 100,
            duration: 2,
            speed: 100,
            factor: 1,
          },
          grab: {
            distance: 200,
          },
          connect: {
            distance: 100,
            links: {
              //just one property
              opacity: 0.3,
            },
            radius: 40,
          },
        },
        //==================================
      },
      particles: {
        collisions: {
          mode: "bounce",
          enable: true,
        },
        color: {
          value: ["#64748B", "#e0a4d2", "#93C5FD", "#e0a4d2"],
        },
        effect: {
          close: true,
          fill: true,
        },
        links: {
          color: "#333",
          distance: 300,
          enable: false,
          opacity: 0.3,
          width: 0.7,
        },
        move: {
          direction: "top",

          enable: true,
          outModes: "out",
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 100,
          },
          value: 275,
        },
        opacity: {
          value: 0.8,
          //
          animation: {
            enable: true,
            minimumValue: 0.3,
            speed: 0.1,
            sync: false,
          },
        },
        shape: {
          type: ["polygon", "circle", "square"],
          options: {
            polygon: {
              sides: 3,
            },
          },
        },

        size: {
          value: { min: 2, max: 3 },
          random: true,
          animation: {
            speed: 0.1,
            size_min: 0.3,
            size_max: 0.5,
          },
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
      />
    );
  }

  return <></>;
}
