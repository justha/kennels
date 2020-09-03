import React from "react"
import "./Customer.css"

export const Customer = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">Location: {customer.address}</address>
    </section>
)