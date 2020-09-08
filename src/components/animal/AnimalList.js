import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./AnimalConverter"
import "./Animal.css"


export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)


    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
        getCustomers()
        getLocations()
        // .then() not necessary in this case, but can opt to use following syntax for readability: getAnimals().then(getCustomers).then(getLocations)    
    }, [])

    return (
        <>
            <button onClick={() => props.history.push("/animals/create")}>
                    Add Animal
            </button>
            <article className="animals">
                {animals.map(animal => {
                    const owner = customers.find(c => c.id === animal.customerId) || {}
                    const clinic = locations.find(l => l.id === animal.locationId) || {}

                    return <Animal 
                                key={animal.id}
                                location={clinic}
                                customer={owner}
                                animal={animal} />
                })}
            </article>
        </>
    )
}


            // Note: here is what is actually sent to the Animal component...
            /*
                {
                    animal: {id: 1....}
                    owner: {id: 1....},
                    location: {id: 1....}
                }
            */

            /*
            {
                location: { id: 2, name: "Nashville North", etc... },
                customer: { id: 2, name: "Madi Peper", etc... },
                animal: { id: 1, name: "Snickers", etc...},
                key: 1
            }
            */


    /*
    Original statements...

    useEffect(() => {
        console.log("AnimalList: Animal state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
        {
            animals.map(an => <Animal key={an.id} animal={an} />)
        }
        </div>
    )
    */