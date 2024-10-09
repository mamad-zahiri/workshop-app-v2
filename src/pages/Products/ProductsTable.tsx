import { latinToPersianDigit } from "../../common/helpers"
import { Product } from "../../types"

const TableOne = ({ products = [] }: { products: Product[] }) => {
  return (
    <>
      <div className='grid grid-cols-3 rounded-sm bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white sm:grid-cols-5'>
        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>نام</h5>
        </div>
        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>کد محصول</h5>
        </div>
        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>قیمت فروش</h5>
        </div>
      </div>

      {products.map((brand, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            key === products.length - 1
              ? ""
              : "border-b border-stroke "
          }`}
          key={key}>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>{brand.name}</p>
          </div>

          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>
              {latinToPersianDigit(brand.code)}
            </p>
          </div>

          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>
              {latinToPersianDigit(brand.price.toLocaleString())} تومان
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TableOne
