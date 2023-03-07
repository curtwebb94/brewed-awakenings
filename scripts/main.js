import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const newEmployees = Employees()
const newOrders = Orders()
const newProducts = Products()



const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${newEmployees}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${newProducts}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${newOrders}
</article>
`

mainContainer.innerHTML = applicationHTML //The main container equals the container ID in the "Index". The inner HTML will equal the applicationHTML

