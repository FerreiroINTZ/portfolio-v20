import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import Contact from "@comps/contact/contact"
import Hero_and_About_Sections from "@comps/hero_and_about/hero_and_about"

function App() {
  return (
    <>
      <SmoothScroll />
      {/* <Loading /> */}
      <Hero_and_About_Sections />
      {/* <Contact /> */}
      {/* <div>App</div> */}
    </>
  )
}

export default App