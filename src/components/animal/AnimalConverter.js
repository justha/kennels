import React from "react"
import "./Animal.css"

export const Animal = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {animal.customerId}</div>
        <div className="animal__location">Location: {animal.locationId}</div>
    </section>
)