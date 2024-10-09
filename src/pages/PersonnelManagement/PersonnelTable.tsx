import { latinToPersianDigit } from "../../common/helpers"
import { PersonnelData } from "../../types"

const PersonnelActivitiesTableElm = ({
  personnel = [],
}: {
  personnel: Array<PersonnelData>
}) => {
  return (
    <>
      <div className=' hidden sm:flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-30'>
          <h5 className='text-sm font-medium xsm:text-base'>کد پرسنلی</h5>
        </div>

        <div className='p-2 text-center xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>نام خانوادگی</h5>
        </div>

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>نام</h5>
        </div>

        {/* <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>دریافت شده</h5>
        </div> */}

        {/* <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>بستانکاری</h5>
        </div> */}

        <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>شماره تماس</h5>
        </div>

        {/* <div className='p-2 text-center sm:block xl:p-4 flex justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>کد ملی</h5>
        </div> */}
      </div>

      {personnel.map((item, key) => (
        <div
          className={`flex-col sm:flex-row hover:bg-slate-200 flex justify-start ${
            key === personnel.length - 1
              ? ""
              : "border-b border-stroke "
          }  gap-0`}
          key={key}>
          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-30'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>کد پرسنلی:</span>

              {item.personnelCode.toUpperCase()}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-40'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>نام خانوادگی:</span>
              {item.lastName}
            </p>
          </div>

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-40'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>نام:</span>
              {item.firstName}
            </p>
          </div>

          {/* <div className='p-2 text-center py-4 w-40'>
            <p className='text-black '>
              {latinToPersianDigit(String(item.payed))}
            </p>
          </div> */}

          {/* <div className='p-2 text-center py-4 w-40'>
            <p className='text-black '>
              {latinToPersianDigit(String(item.notPayed))}
            </p>
          </div> */}

          <div className='p-2 sm:text-center sm:py-4 w-full text-right sm:w-40'>
            <p className='text-black '>
              <span className='inline-block sm:hidden me-2'>شماره تماس:</span>

              {item.phone}
            </p>
          </div>

          {/* <div className='p-2 text-center py-4 w-40'>
            <p className='text-black '>{item.nationalCode}</p>
          </div> */}
        </div>
      ))}
    </>
  )
}

export default PersonnelActivitiesTableElm
