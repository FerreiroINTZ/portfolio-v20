import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Gsap from "@funcs/gsap/gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

import style from "./main.module.scss";

import { useLayoutEffect, useRef } from "react";

function hero_and_about() {
  const tmln_hero_ref = useRef<null | gsap.core.Timeline>(null);
  const tmln_about_ref = useRef<null | gsap.core.Timeline>(null)

  useLayoutEffect(() => {
    let tmln_hero: null | gsap.core.Timeline = null;
    let tmln_about: null | gsap.core.Timeline = null
    const cntx = Gsap.context(() => {

      const section_height = (document.getElementsByClassName("about_section_gsap")[0] as HTMLElement).offsetHeight
      const animation_height = window.screen.height + 500

      console.log(section_height)

      tmln_hero = Gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap_hero",
          pin: true,
          scrub: true,
          start: "top top",
          end: `+=${section_height}`,
        },
      });

      tmln_about = Gsap.timeline({
        scrollTrigger: {
          trigger: ".about_section_gsap",
          pin: true,
          scrub: true,
          start: "top top",
          end: `+=${animation_height + 400}`,
          // onLeave: () => {
          //   console.log("nada");
          //   gsap.to(".gsap_hero", { opacity: 1 });
          // },
          // snap: {
          //   snapTo: [0, 0]
          // }
        },
      });

      ScrollTrigger.create({
        trigger: ".gsap_hero",
        end: `=${animation_height}`,
        markers: true,
        snap:{
          snapTo: [0,0]
        },
        onLeave: () => {
            console.log("nada");
            Gsap.to(".gsap_hero", { 
              opacity: 0 , 
              onComplete: () => {
                // console.log("Completo")
                (document.getElementsByClassName("gsap_hero")[0] as HTMLElement).style.display = "none"
              }
            });
          },
        onEnterBack: () =>{
          Gsap.to(".gsap_hero", { 
            opacity: 1,
            onStart: () => (document.getElementsByClassName("gsap_hero")[0] as HTMLElement).style.display = "block" 
          });
        }
      })

    });
    // console.log("time:", tmln)
    tmln_hero_ref.current = tmln_hero;
    tmln_about_ref.current = tmln_about
    // console.log("TIme line:", tmln_ref.current)
    return () => {
      cntx.revert();
      tmln_hero_ref.current = null;
      tmln_about_ref.current = null;
    };
  });

  return (
    <div id={style.hero_about_container}>
      <Hero tmln_ref={tmln_hero_ref} />
      <About gsap_ref={tmln_about_ref}/>
    </div>
  );
}

export default hero_and_about;
