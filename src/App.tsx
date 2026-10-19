import {useEffect} from "react"
import SmoothScroll from "@funcs/lenis/lenis"
import Loading from "@comps/loading/loading"
import loading, {print_load} from "@funcs/loading/loading"

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
      <div>App</div>
    </>
  )
}

export default App