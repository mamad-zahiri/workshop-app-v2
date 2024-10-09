import { datetimeToStr, latinToPersianDigit } from "../../common/helpers"
import { PersonnelActivity } from "../../types"

const PersonnelActivitiesTableElm = ({
  activities = [],
}: {
  activities: Array<PersonnelActivity>
}) => {
  return (
    <>
      <div className='hidden sm:flex justify-start bg-transparent sm:bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
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
          className={`flex-col sm:flex-row mb-10 sm:mb-0 hover:bg-slate-200 flex justify-start ${
            key === activities.length - 1
              ? ""
              : "border-b border-slate-400 pb-4 sm:pb-0 sm:border-stroke "
          }  gap-0`}
          key={key}>
          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-30'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>کد تولید:</span>
              {item.productionCode.toUpperCase()}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-35'>
            <p className='text-black ' dir='ltr'>
              {latinToPersianDigit(datetimeToStr(item.assignedAt))}
              <span className='inline-block sm:hidden me-2' dir='rtl'>
                زمان دریافت:
              </span>
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-25'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>فعالیت:</span>
              {item.activity}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-22'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>تعداد:</span>
              {latinToPersianDigit(item.number)}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-35'>
            <p className='text-black ' dir='ltr'>
              {latinToPersianDigit(datetimeToStr(item.finsishedAt))}
              <span className='inline-block sm:hidden me-2' dir='rtl'>
                زمان تحویل:
              </span>
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-64'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>
                ابزار و مواد امانت داده شده:
              </span>
              {(item.borrowedTool.length > 0 && item.borrowedTool.join("، ")) || "-"}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-26'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>کد پرسنلی:</span>

              {item.personnelCode.toUpperCase()}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-40'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>ضایعات:</span>
              {item.wasteMaterials.join("، ") || "-"}
            </p>
          </div>

          <div className='p-2 text-center sm:py-4 max-w-fit flex gap-4'>
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
