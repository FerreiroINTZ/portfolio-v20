import {createContext, useEffect, useState} from "react"

export interface ContextItems{
    addItem: () => void,
    loaded: () => void,
    isAllLoaded: boolean
}

export const Cntx = createContext<Partial<ContextItems>>({})

export default function Context({children}: {children: any}){

    const [loadingItems, setLoadingItems] = useState(0)
    const [loadedItems, setLoadedItems] = useState(0)
    const [isAllLoaded, setIsAllLoaded] = useState(false)

    function loaded(){
        setLoadedItems(() => loadedItems + 1)
    }

    function addItem(){
        setLoadingItems(() => loadedItems + 1)
    }

    useEffect(() =>{
        if(loadedItems >= loadingItems){
            setIsAllLoaded(() => true)
        }else{
            setIsAllLoaded(() => false)
        }
        // console.log("Completo?", isAllLoaded)
    }, [loadedItems, loadingItems])

    // useEffect(() =>{
    //     console.log("Carregando: ", loadingItems)
    // }, [loadingItems])

    // useEffect(() =>{
    //     console.log("pronto: ", loadedItems)
    // }, [loadedItems])

    return(
        <Cntx.Provider value={{addItem, loaded, isAllLoaded}}>
            {children}
        </Cntx.Provider>
    )
}