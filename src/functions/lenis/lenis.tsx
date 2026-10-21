import {useEffect} from "react"
import Lenis from "lenis"

export let lenis: Lenis | undefined;

function lenis_func() {

    useEffect(() =>{
        lenis = new Lenis({
            autoRaf: true,
            duration: 1
        })
        function tick_scroll(time: number){
            lenis!.raf(time);
            requestAnimationFrame(tick_scroll);
        }
        requestAnimationFrame(tick_scroll)
        return () => lenis!.destroy()
    })

  return <></>
}

export default lenis_func