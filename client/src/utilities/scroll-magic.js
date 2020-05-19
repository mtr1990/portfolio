import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

export const ScrollMagicFadeIn = (props) => {
  const { children } = props;

  return (
    <Controller>
      <Scene
        // triggerHook={0.64}
        // offset={80}
        // duration={560}
        reverse={true}
        {...props}
      >
        <Tween
          staggerFrom={{
            opacity: 0,
          }}
          staggerTo={{
            opacity: 1,
          }}
          stagger={0.32}
        >
          <div>{children}</div>
        </Tween>
      </Scene>
    </Controller>
  );
};

export const ScrollMagicFadeOut = (props) => {
  const { children } = props;

  return (
    <Controller>
      <Scene
        triggerHook={"onLeave"}
        offset={240}
        duration={560}
        reverse={true}
        // indicators={true}
      >
        <Tween
          staggerFrom={{
            opacity: 1,
          }}
          staggerTo={{
            opacity: 0,
          }}
        >
          <div>{children}</div>
        </Tween>
      </Scene>
    </Controller>
  );
};
