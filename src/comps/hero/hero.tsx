import React, { useEffect } from 'react'
import {Cntx, type ContextItems} from "@cntx"
import {useContext} from "react"

function hero() {

  const {addItem, loaded} = useContext(Cntx)

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      loaded!()
    }, 6000)
    addItem!()

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>hero</div>
  )
}

export default hero