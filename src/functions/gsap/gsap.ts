import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export type Gsap = typeof gsap

export default gsap