import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
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
                        const employeeLocation = locations.find(loc => loc.id === employee.locationId) || {}
                        return <section key={employee.id} className="employee">
                            <div><h3>{employee.name}</h3></div>
                            <div>{employeeLocation.name}</div>
                        </section>
                    })
                }
            </article>
        </>
    )

    // return (
    //     <>
    //         <div className="employees">
    //             <h1>Employees</h1>
    //             <button onClick={() => props.history.push("/employees/create")}>
    //                 Add Employee
    //             </button>
    //             <article className="employeeList">
    //                 {
    //                     employees.map(employee => {
    //                         const employeeLocation = locations.find(loc => loc.id === employee.locationId)
    //                         return <section key={employee.id} className="employee" >
    //                             <div><h3>Name: {employee.name}</h3></div>
    //                             <div><h3>Location: {employeeLocation.name}</h3></div>
    //                         </section>
    //                     })
    //                 }
    //             </article>
    //         </div>
    //     </>
    // )
    
}


// return (
//     <div className="employees">
//         <h1>Employees</h1>
//         <button onClick={() => props.history.push("/employees/create")}>
//             Add Employee
//         </button>
//         <article className="employeeList">
//             {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
//         </article>
//     </div>
// )

// return (
    //     <div className="employees">
    //     {employees.map(emp => <Employee key={emp.id} employee={emp} />)}
    //     </div>
    // )
    
    
    // Not needed; for instruction purposes only
    // useEffect(() => {
    //     console.log("EmployeeList: Employee state changed")
    //     console.log(employees)
    // }, [employees])