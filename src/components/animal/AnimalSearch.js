import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = () => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            <div>Animal search:</div>
            <input type="text"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Search for an animal... " />
        </>
    )
}
