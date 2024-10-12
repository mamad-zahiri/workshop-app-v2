import { useLocation } from "react-router-dom"
import { PersonnelActivity } from "../../types"

var SinglePersonActivityFormElm = () => {
  const { state }: { personnelActivity: PersonnelActivity } | any = useLocation()
  const personnelActivity: PersonnelActivity = state?.personnelActivity

  console.log(state)
  return (
    <div className='container mx-auto p4-10'>
      <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl'>
        <div className='md:flex'>
          <div className='w-full px-6 py-8 md:p-8'>
            <h2 className='text-2xl font-bold text-gray-800'>اطلاعات فعالیت کارمند</h2>
            <form className='mt-6'>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>کد تولید</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  placeholder='سنسور'
                  defaultValue={personnelActivity.productionCode}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>قیمت</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='email'
                  placeholder='۳۵۰۰۰'
                  defaultValue={personnelActivity.price}
                />
              </div>
              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>زمان تحویل</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.assignedAt}
                />
              </div>

              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>زمان دریافت</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.finsishedAt}
                />
              </div>

              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>
                  ابزار و مواد امانت داده شده
                </label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.borrowedTool.toString()}
                />
              </div>

              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>ضایعات</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.wasteMaterials.toString()}
                />
              </div>

              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>فعالیت</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.activity}
                />
              </div>

              <div className='mb-6'>
                <label className='block text-gray-800 font-bold mb-2'>تعداد</label>
                <input
                  className='appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline'
                  type='text'
                  defaultValue={personnelActivity.number}
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

export default SinglePersonActivityFormElm
