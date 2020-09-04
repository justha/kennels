import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./EmployeeConverter"
import "./Employee.css"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)


    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    }, [])


    useEffect(() => {
        console.log("EmployeeList: Employee state changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
            </article>
        </div>
    )
}


    // return (
    //     <div className="employees">
    //     {employees.map(emp => <Employee key={emp.id} employee={emp} />)}
    //     </div>
    // )