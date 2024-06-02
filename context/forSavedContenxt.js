'use client'
import { createContext, useState } from "react";

export const SavedContext = createContext()

const SavedContextProvider = ({children}) => {
    const [savedCards , setSavedCards] = useState([])
    const [isOpen, setIsOpen] = useState(false)


    const values = {
        savedCards,
        setSavedCards,
        isOpen,
        setIsOpen,
    }

    return (
        <SavedContext.Provider value={values}>
            {children}
        </SavedContext.Provider>
    )
}

export default SavedContextProvider