import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import Hero from "@comps/hero/hero"

function App() {
  return (
    <>
      <SmoothScroll />
      <Loading />
      <Hero />
      {/* <div>App</div> */}
    </>
  )
}

export default App