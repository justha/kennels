import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalSearch } from "./animal/AnimalSearch";


export const ApplicationViews = (props) => {
    return (
        <>

            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>

                        <Route exact path="/">      {/* Render the location list when http://localhost:3000/ */}
                            <LocationList />
                        </Route>

                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                        
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>


            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>

                        <Route exact path="/animals" render={
                            props => <>
                                <AnimalSearch />
                                <AnimalList {...props} />
                            </>
                        } />

                        <Route exact path="/animals/create" render={(props) => {
                            return <AnimalForm {...props} />
                        }} />

                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetail {...props} />
                        } />

                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />

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
                <LocationProvider>
                    <AnimalProvider>

                        <Route path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                        
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>


        </>
    )
}