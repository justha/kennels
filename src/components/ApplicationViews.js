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
import { AnimalForm } from "./animal/AnimalForm";


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
                        <Route exact path="/animals" render={(props) => {
                            return <AnimalList history={props.history} />
                        }} />

                        <Route exact path="/animals/create" render={(props) => {
                            return <AnimalForm {...props} />
                        }} />
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>


            <CustomerProvider>
                <Route path="/customers"> 
                    <CustomerList />
                </Route>
            </CustomerProvider>


            <EmployeeProvider>
                    <LocationProvider>
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList history={props.history} />
                    }} />
                    </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route path="/employees/create" render={(props) => {
                            return <EmployeeForm {...props} />
                        }} />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>


        </>
    )
}