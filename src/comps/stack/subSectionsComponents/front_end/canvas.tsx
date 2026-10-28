import {useEffect, useRef} from 'react'
import {lenis} from "@funcs/lenis/lenis"
import styles from "./styles/main.module.scss"

function canvas() {
  
    const canvas = useRef<null | HTMLCanvasElement>(null)
    const cntx = useRef<null | CanvasRenderingContext2D>(null)
    const images = useRef<HTMLImageElement[]>([])
    const canvasContainer = useRef<null | HTMLDivElement>(null)
    const framesQtd = 80

    function loadImage(){
        const img_array = images.current
        for(let frame in [...Array(framesQtd).keys()]){
            // console.log(Number(frame) + 1)
            const img = new Image()
            img.src = `/public/content/stack/front_end-frames/frame_${Number(frame) + 1}.png`
            img_array.push(img)
        }
    }

    function getCurrFrame(){
        const bound = canvasContainer.current?.getBoundingClientRect()
        const prop = canvasContainer.current?.offsetHeight! / framesQtd
        // console.log(bound)
        const frame = Math.round(Math.abs((bound!.y - window.innerHeight)/prop))
        return frame
    }

    function renderFrame(){
        const currFrame = getCurrFrame()
        // console.log(currFrame)
        cntx.current!.drawImage(images.current[currFrame], 0, 0, canvas.current!.width, canvas.current!.height)
    }

    useEffect(() =>{
        if(canvas.current){
            const canvas_tag = canvas.current
            cntx.current = canvas_tag.getContext("2d") as CanvasRenderingContext2D
            canvas_tag.width = window.innerWidth
            canvas_tag.height = window.innerHeight
            
            loadImage()

            images.current[0].onload = () => {
                // console.log("Carregou!")
                cntx.current!.drawImage(images.current[0], 0, 0, canvas_tag.width, canvas_tag.height)
                // console.log("Renderizada!")
            }
            
            lenis?.on("scroll", () =>{
                requestAnimationFrame(renderFrame)
            })

        }
    }, [canvas])

    return (
        <div id={styles.canvas_frontEnd_container} ref={canvasContainer}>
            <canvas id="front-end-canvas" ref={canvas}></canvas>
        </div>
  )
}

export default canvas