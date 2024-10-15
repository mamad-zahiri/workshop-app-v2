import { Link } from "react-router-dom"
import { latinToPersianDigit } from "../../common/helpers"
import { Product } from "../../types"

const ProductListTableElm = ({ products = [] }: { products: Product[] }) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-2/3 sm:w-70'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>محصول</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-1/3 sm:w-50'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>قیمت فروش</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-80'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>عکس</h5>
        </div>
      </div>

      {products.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === products.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}>
          <Link
            to='/products/edit'
            state={{ product: item }}
            className='p-2 text-start py-4 w-2/3 sm:w-70 block'>
            <p className='text-black text-center'>
              <img
                src={item.picture}
                className='inline-block object-cover rounded me-3 h-10 w-10 align-middle'
              />
              {item.name}
            </p>
          </Link>

          <div className='p-2 text-start py-4 w-1/3 sm:w-50'>
            <p className='text-black text-center'>
              {latinToPersianDigit(item.price.toLocaleString())} تومان
            </p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-full sm:w-80'>
            <p className='text-black text-center'>
              <img src={item.picture} alt='' />
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductListTableElm
