import React, { useContext, useRef, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { Animal } from "./AnimalConverter"

export const AnimalForm = (props) => {

    const {addAnimal} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    const name = useRef(null)
    const breed = useRef(null)
    const customer = useRef(null)
    const location = useRef(null)

    useEffect(() => {
        getCustomers()
        getLocations()
     }, [])


    const admitAnimal = () => {
        const newAnimal = {
            name: name.current.value,
            breed:breed.current.value,
            customerId: parseInt(customer.current.value),
            locationId: parseInt(location.current.value)
        }
        
        addAnimal(newAnimal).then(() => {
            props.history.push("/animals")
        })
    }

    


    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Add Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Brought in by: </label>
                    <select defaultValue="" name="customer" ref={customer} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    admitAnimal()
                }}
                className="btn btn-primary">
                Admit Animal
            </button>
        </form>
    )


}