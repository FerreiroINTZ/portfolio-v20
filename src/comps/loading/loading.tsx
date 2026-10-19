import {useEffect} from 'react'
import {lenis} from "@funcs/lenis/lenis"

function loading() {
    useEffect(() =>{
        lenis?.stop()
    }, [])

  return (
    <div>loading</div>
  )
}

export default loading