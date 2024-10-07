import { datetimeToStr, latinToPersianDigit } from "../../common/helpers"
import { PersonnelActivity } from "../../types"

const PersonnelActivitiesTableElm = ({
  activities = [],
}: {
  activities: Array<PersonnelActivity>
}) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100 dark:bg-meta-4 border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='p-2 text-center xl:p-4 flex justify-center content-start w-30'>
          <h5 className='text-sm font-medium xsm:text-base'>کد تولید</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-35'>
          <h5 className='text-sm font-medium xsm:text-base'>زمان دریافت</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-25'>
          <h5 className='text-sm font-medium xsm:text-base'>فعالیت</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-22'>
          <h5 className='text-sm font-medium xsm:text-base'>تعداد</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-35'>
          <h5 className='text-sm font-medium xsm:text-base'>زمان تحویل</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-64'>
          <h5 className='text-sm font-medium xsm:text-base'>
            ابزار و مواد امانت داده شده
          </h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-26'>
          <h5 className='text-sm font-medium xsm:text-base'>کد پرسنلی</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>ضایعات</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start flex-grow'>
          <h5 className='text-sm font-medium xsm:text-base'>عمیلات ها</h5>
        </div>
      </div>

      {activities.map((item, key) => (
        <div
          className={`hover:bg-slate-200 dark:hover:bg-slate-700 flex justify-start ${
            key === activities.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }  gap-0`}
          key={key}>
          <div className='p-2 text-center py-4 w-30'>
            <p className='text-black dark:text-white'>
              {item.productionCode.toUpperCase()}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-35'>
            <p className='text-black dark:text-white' dir='ltr'>
              {latinToPersianDigit(datetimeToStr(item.assignedAt))}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-25'>
            <p className='text-black dark:text-white'>{item.activity}</p>
          </div>

          <div className='p-2 text-center py-4 w-22'>
            <p className='text-black dark:text-white'>
              {latinToPersianDigit(item.number)}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-35'>
            <p className='text-black dark:text-white' dir='ltr'>
              {latinToPersianDigit(datetimeToStr(item.finsishedAt))}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-64'>
            <p className='text-black dark:text-white'>
              {(item.borrowedTool.length > 0 && item.borrowedTool.join("، ")) || "-"}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-26'>
            <p className='text-black dark:text-white'>
              {item.personnelCode.toUpperCase()}
            </p>
          </div>

          <div className='p-2 text-center py-4 w-40'>
            <p className='text-black dark:text-white'>
              {item.wasteMaterials.join("، ") || "-"}
            </p>
          </div>

          <div className='p-2 text-center py-4 max-w-fit flex gap-4'>
            <button className='rounded-lg bg-lime-600 text-white px-2 py-1 text-sm'>
              پایان کار
            </button>
            <button className='rounded-lg bg-red-600 text-white px-2 py-1 text-sm'>
              افزودن ضایعات
            </button>
            <button className='rounded-lg bg-amber-600 text-white px-2 py-1 text-sm'>
              ویرایش
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default PersonnelActivitiesTableElm
