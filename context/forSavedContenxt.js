'use client'
import { createContext, useState } from "react";

export const SavedContext = createContext()

const SavedContextProvider = ({children}) => {
    const [savedCards , setSavedCards] = useState([])


    const values = {
        savedCards,
        setSavedCards
    }

    return (
        <SavedContext.Provider value={values}>
            {children}
        </SavedContext.Provider>
    )
}

export default SavedContextProvider