import { latinToPersianDigit } from "../../common/helpers"
import { Material } from "../../types"

const MaterialsTableElm = ({ materials = [] }: { materials: Array<Material> }) => {
  return (
    <>
      <div className='grid grid-cols-3 rounded-sm bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white sm:grid-cols-5'>
        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>نام</h5>
        </div>
        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>قیمت فروش</h5>
        </div>

        <div className='p-2.5 text-center xl:p-5'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>عکس</h5>
        </div>
      </div>

      {materials.map((item, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            key === materials.length - 1 ? "" : "border-b border-stroke "
          }`}
          key={key}>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>{item.name}</p>
          </div>

          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>
              {latinToPersianDigit(item.price.toLocaleString())} تومان
            </p>
          </div>

          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black '>
              <img src={item.picture} alt='' />
              {/* {latinToPersianDigit(item.price.toLocaleString())} تومان */}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default MaterialsTableElm
