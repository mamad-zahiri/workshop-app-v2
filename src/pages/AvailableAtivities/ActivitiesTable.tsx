import { latinToPersianDigit } from "../../common/helpers"
import { Activity } from "../../types"

const ActivitiesTableElm = ({ activities = [] }: { activities: Array<Activity> }) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-20'>
          <h5 className='text-sm font-medium xsm:text-base'>شماره</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-80'>
          <h5 className='text-sm font-medium xsm:text-base'>نام</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-80'>
          <h5 className='text-sm font-medium xsm:text-base'>ملاحظات</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-50'>
          <h5 className='text-sm font-medium xsm:text-base'>دستمزد</h5>
        </div>
      </div>

      {activities.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === activities.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}
          key={key}>
          <div className='p-2 text-start py-4 w-20'>
            <p className='text-black '>{item.order}</p>
          </div>

          <div className='p-2 text-start py-4 w-80'>
            <p className='text-black '>{item.name}</p>
          </div>

          <div className='p-2 text-start py-4 w-80'>
            <p className='text-black '>{item.description}</p>
          </div>

          <div className='p-2 text-center py-4 w-50'>
            <p className='text-black '>
              {latinToPersianDigit(item.unit_price.toLocaleString())} تومان
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ActivitiesTableElm
