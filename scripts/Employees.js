import { getEmployees } from "./database.js"
import { Orders } from "./Orders.js"
import { getOrders } from "./database.js"


const employees = getEmployees()
const newOrders = Orders()


//The Amount of Product sold by the employee targeted/clicked //

const employeeOrders = (employee) => { //employee is gonna be the matching employee that is clicked. 
    const orders = getOrders() //invoke the function from the database.js
    let fulfilledOrders = 0 //"LET" variable is set to 0.  This variable will be incremented and returned. 
    for (const order of orders) {
        if (order.employeeId === employee.id) { //if the order object ID equals the original employee ID. 
            // Increment the number of fulfilled orders
            fulfilledOrders ++ //plus 1 everytime the "if statement" matches and then returns a number. 
            }
        }
        return fulfilledOrders
    // Return how many orders were fulfilled
}



//The Event Listener Start//
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("employee")) {

            const [, employeeId] = itemClicked.id.split("--")
        //This for loop grabs the employee
            let matchingEmployee = null
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    matchingEmployee = employee
                }
            }

            const orderCount = employeeOrders(matchingEmployee)

            window.alert(`${matchingEmployee.name} served ${orderCount} orders!`)
        }

    }


)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

