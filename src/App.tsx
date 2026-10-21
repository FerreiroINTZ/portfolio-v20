import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import Hero from "@comps/hero/hero"
import About from "@comps/about/about"

function App() {
  return (
    <>
      <SmoothScroll />
      {/* <Loading /> */}
      <div>
        {/* <Hero /> */}
        <About />
      </div>
      {/* <div>App</div> */}
    </>
  )
}

export default App