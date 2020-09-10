import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({ location: {}, customer: {}})

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <div className="animal__treatment">Treatment: {animal.treatment}</div>
            
            <button className="btn--release" onClick={() => {
                releaseAnimal(animal.id)
                .then(() => {props.history.push("/animals")})}}>Discharge
            </button>

            <button onClick={() => {
                props.history.push(`/animals/edit/${animal.id}`)}}>Edit
            </button>

        </section>
    )
}