import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import Hero_and_About_Sections from "@comps/hero_and_about/hero_and_about"
import Stack from "@comps/stack/stack"
import Projects from "@comps/projects/projects"
import Contact from "@comps/contact/contact"

function App() {
  return (
    <>
      <SmoothScroll />
      {/* <Loading /> */}
      {/* <Hero_and_About_Sections /> */}
      {/* <Stack /> */}
      <Projects />
      {/* <Contact /> */}
      {/* <div>App</div> */}
    </>
  )
}

export default App