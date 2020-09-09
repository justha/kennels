import React, { useState, useEffect, useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"


export const EmployeeDetail = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)

    const [animal, setAnimal] = useState({})
    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        console.log("initialization of EmployeeDetail")
        getEmployees()
            .then(getAnimals)
            .then(getLocations)
    }, [])

    useEffect(() => {
        console.log("animal state changed")
        const animal = animals.find(a => a.id === employee.animalId) || {}
        setAnimal(animal)
    }, [animals])

    useEffect(() => {
        console.log("employee state changed")
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [employees])

    useEffect(() => {
        console.log("location state changed")
        const location = locations.find(l => l.id === employee.locationId) || {}
        setLocation(location)
    }, [locations])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <div>
                {
                (employee.animalId === null)
                    ? "Not assigned to an animal"
                    : `Currently taking care of ${animal.name}`
                }
            </div>
        </section>
    )
}