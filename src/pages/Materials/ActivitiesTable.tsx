import { latinToPersianDigit } from "../../common/helpers"
import { Material } from "../../types"

const MaterialsTableElm = ({ materials = [] }: { materials: Array<Material> }) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-full sm:w-30'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>نام</h5>
        </div>
        <div className='text-center p-4 flex justify-center content-start w-full sm:w-30'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>قیمت</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-80'>
          <h5 className='text-sm font-medium uppercase xsm:text-base'>عکس</h5>
        </div>
      </div>

      {materials.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === materials.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}
          key={key}>
          <div className='p-2 text-start py-4 w-full sm:w-30'>
            <p className='text-black text-center'>{item.name}</p>
          </div>

          <div className='p-2 text-start py-4 w-full sm:w-30'>
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

export default MaterialsTableElm
