import { useLocation } from "react-router-dom"
import { Product } from "../../types"
import { useState } from "react"

var SingleProductFormElm = () => {
  const { state }: { product: Product } | any = useLocation()
  const product: Product = state?.product

  console.log(state)
  return (
    <div className='container mx-auto p4-10'>
      <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl'>
        <div className='md:flex'>
          <div className='w-full px-6 py-8 md:p-8'>
            <h2 className='text-2xl font-bold text-gray-800'>اطلاعات محصول</h2>
            <form className='mt-6'>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>نام</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  placeholder='سنسور'
                  defaultValue={product.name}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>قیمت</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='email'
                  placeholder='۳۵۰۰۰'
                  defaultValue={product.price}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>عکس</label>
                <img src={product.picture} className='h-40 mb-6' alt='' />
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='file'
                />
              </div>
              <button
                className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:outline'
                type='button'>
                ذخیره
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductFormElm
