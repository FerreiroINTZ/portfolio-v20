import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import loading, {print_load} from "@funcs/loading/loading"
import Hero from "@comps/hero/hero"

function App() {
  useEffect(() =>{
    const load = loading()
    print_load()
    load()
    print_load()
  }, [])
  return (
    <>
      <SmoothScroll />
      <Loading />
      <Hero />
      <div>App</div>
    </>
  )
}

export default App