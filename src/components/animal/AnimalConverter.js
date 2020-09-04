import React from "react"
import "./Animal.css"

/*
    {
        animal: {id: 1....}
        owner: {id: 1....},
        location: {id: 1....}
    }
*/

export const Animal = ({ animal, customer, location }) => (
    <section key={animal.id} className="animal">
        <div><h3 className="animal__name">{animal.name}</h3></div>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__location">Location: {location.name }</div>
        <div className="animal__owner">Customer: { customer.name }</div>
    </section>
)


// refactored above ^^
// export const Animal = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <div className="animal__breed">Breed: {animal.breed}</div>
//         <div className="animal__owner">Customer: {animal.customerId}</div>
//         <div className="animal__location">Location: {animal.locationId}</div>
//     </section>
// )