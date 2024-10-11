import { latinToPersianDigit } from "../../common/helpers"
import { Product } from "../../types"

const TableOne = ({ products = [] }: { products: Product[] }) => {
  return (
    <>
      <div className='hidden sm:flex justify-start bg-transparent sm:bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='p-2 text-center xl:p-4 flex justify-center content-start w-70'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>نام</h5>
        </div>

        <div className='p-2 text-center xl:p-4 flex justify-center content-start w-50'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>قیمت فروش</h5>
        </div>

        <div className='p-2 text-center xl:p-4 flex justify-center content-start w-80'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>عکس</h5>
        </div>
      </div>

      {products.map((item, key) => (
        <div
          className={`flex-col sm:flex-row mb-10 sm:mb-0 hover:bg-slate-200 flex justify-start ${
            key === products.length - 1
              ? ""
              : "border-b border-slate-400 pb-4 sm:pb-0 sm:border-stroke "
          }  gap-0`}>
          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-70'>
            <p className='text-black '>{item.name}</p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-50'>
            <p className='text-black '>
              {latinToPersianDigit(item.price.toLocaleString())} تومان
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-80'>
            <p className='text-black '>
              <img src={item.picture} alt='' />
              {/* {item.picture} */}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TableOne
