import {useEffect} from "react"
import gsap from "@funcs/gsap/gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Lenis from "lenis"

export let lenis: Lenis | undefined;

function lenis_func() {

    useEffect(() =>{
        // lenis = new Lenis({
        //     autoRaf: true,
        //     duration: 1
        // })
        // function tick_scroll(time: number){
        //     lenis!.raf(time);
        //     requestAnimationFrame(tick_scroll);
        // }
        // requestAnimationFrame(tick_scroll)
        // return () => lenis!.destroy()

        lenis = new Lenis()

        lenis.on("scroll", ScrollTrigger.update)
        gsap.ticker.add((time) => lenis!.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        return () => lenis!.destroy()
    })

  return <></>
}

export default lenis_func