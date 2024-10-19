import { Link } from "react-router-dom"
import { latinToPersianDigit } from "../../common/helpers"
import { Order } from "../../types"

const OrdersListTableElm = ({ orders = [] }: { orders: Order[] }) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-2/3 sm:w-70'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>محصول</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-1/3 sm:w-50'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>تاریخ</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-1/3 sm:w-50'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>گروه</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-1/3 sm:w-50'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>تعداد</h5>
        </div>
      </div>

      {orders.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === orders.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}>
          <Link
            to='/orders/edit'
            state={{ order: item }}
            className='p-2 text-start py-4 w-2/3 sm:w-70 block'>
            <p className='text-black text-center'>{item.product}</p>
          </Link>

          <div className='p-2 text-start py-4 w-1/3 sm:w-50'>
            <p className='text-black text-center'>{latinToPersianDigit(item.date)}</p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-full sm:w-50'>
            <p className='text-black text-center'>{item.group}</p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-full sm:w-50'>
            <p className='text-black text-center'>{item.number}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default OrdersListTableElm
