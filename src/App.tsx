import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import Hero from "@comps/hero/hero"
import About from "@comps/about/about"
import Contact from "@comps/contact/contact"

function App() {
  return (
    <>
      <SmoothScroll />
      {/* <Loading /> */}
      {/* <div> */}
        {/* <Hero /> */}
        {/* <About /> */}
      {/* </div> */}
      <Contact />
      {/* <div>App</div> */}
    </>
  )
}

export default App