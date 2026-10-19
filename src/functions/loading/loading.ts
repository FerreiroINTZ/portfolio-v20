import {useRef} from "react"

let qtd = 0
let loaded_qtd = 0;

function inc_load(){
  loaded_qtd++
}

export function print_load(){
  // console.log("Qtd:", qtd)
  // console.log("Loaded:", loaded_qtd)
}

function hook() {
  qtd++
  return inc_load
}

export default hook