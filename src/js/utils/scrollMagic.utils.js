import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const ScrollMagic = props => (
  <Controller>
    <Scene
      triggerHook={"onEnter"}
      offset={80}
      duration={480}
      reverse={false}
      // indicators={true}
    >
      <Tween
        staggerFrom={{
          opacity: 0
        }}
        staggerTo={{
          opacity: 1
        }}
        stagger={0.24}
      >
        <div>{props.children}</div>
      </Tween>
    </Scene>
  </Controller>
);

export default ScrollMagic;
