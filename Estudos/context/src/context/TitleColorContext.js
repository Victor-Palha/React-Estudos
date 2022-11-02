import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action)=>{
    switch(action.type){
        case "RED":
            return {...state, color:"crimson"}
        case "BLACK":
            return {...state, color:"black"}
        default:
            return state
    }
}

export const TitleColorContextProvider= ({children})=>{

    const [state, dispatch] = useReducer(titleColorReducer, {color: "grey"})

    console.log(state)

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}