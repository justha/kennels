import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)


    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])


    useEffect(() => {
        console.log("CustomerList: Customer state changed")
        console.log(customers)
    }, [customers])

    return (
        <div className="customers">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
    )
}