import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

    // Since you are no longer ALWAYS going to be displaying all animals 
    const [ filteredAnimals, setFiltered ] = useState([])


    useEffect(() => {
        getAnimals()
    }, [])


    useEffect(() => {
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(subset)
     }, [searchTerms])
 
 
     useEffect(() => {
        setFiltered(animals)
     }, [animals])
    
    
    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}