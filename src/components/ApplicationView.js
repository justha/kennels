import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeForm } from "./employee/EmployeeForm";


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">      {/* Render the location list when http://localhost:3000/ */}

                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route path="/animals">     {/* Render the animal list when http://localhost:3000/animals */}

                            <AnimalList />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">       {/* Render the animal list when http://localhost:3000/customers */}

                    <CustomerList />
                </Route>
            </CustomerProvider>


            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={props => <EmployeeList {...props} />} />
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

        </>
    )
}