import { Link } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { Order } from "../../types"
import OrdersListTableElm from "./OrdersTable"

const products: Array<Order> = [
  {
    product: "سوییچ سنسور Tiba",
    date: "1400-03-08",
    group: 1,
    number: 1500,
  },
]

const Orders = () => {
  return (
    <>
      <Breadcrumb pageName='سفارش ها' />

      <OrdersListTableElm orders={products} />

      <Link to='/orders/add'>
        <div className='fixed bottom-10 left-10 rounded-lg w-10 h-10 bg-cyan-600 flex justify-center p-1.5 hover:cursor-pointer'>
          <img src='/plus.png' alt='' />
        </div>
      </Link>
    </>
  )
}

export default Orders
