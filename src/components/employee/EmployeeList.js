import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { Link } from "react-router-dom"
import "./Employee.css"
// import { Employee } from "./EmployeeConverter"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees().then(getLocations)
    }, [])


    return (
        <>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employees">
                {
                    employees.map(employee => {
                        return <Link key={employee.id} className="employee" to={`/employees/${employee.id}`}>
                            <div><h3>{employee.name}</h3></div>
                        </Link>
                    })
                }
            </article>
        </>
    )
}
