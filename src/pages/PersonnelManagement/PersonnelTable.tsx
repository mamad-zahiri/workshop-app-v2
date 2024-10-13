import { Link } from "react-router-dom"
import { latinToPersianDigit } from "../../common/helpers"
import { PersonnelData } from "../../types"

const PersonnelActivitiesTableElm = ({
  personnel = [],
}: {
  personnel: Array<PersonnelData>
}) => {
  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-full sm:w-30'>
          <h5 className='text-sm font-medium xsm:text-base'>کد پرسنلی</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-full sm:w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>نام خانوادگی</h5>
        </div>

        <div className='text-center p-4 flex justify-center content-start w-full sm:w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>نام</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>دریافت شده</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>بستانکاری</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>شماره تماس</h5>
        </div>

        <div className='hidden sm:flex text-center p-4 justify-center content-start w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>کد ملی</h5>
        </div>
      </div>

      {personnel.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === personnel.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}
          key={key}>
          <Link
            to='/personnel-management/edit'
            state={{ personnelData: item }}
            className='p-2 text-start py-4 w-full sm:w-30'>
            {/* <div className='p-2 text-start py-4 w-full sm:w-30'> */}
            <p className='text-black text-center'>{item.personnelCode.toUpperCase()}</p>
            {/* </div>i */}
          </Link>

          <div className='p-2 text-start py-4 w-full sm:w-40'>
            <p className='text-black text-center'>{item.lastName}</p>
          </div>

          <div className='p-2 text-start py-4 w-full sm:w-40'>
            <p className='text-black text-center'>{item.firstName}</p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-40'>
            <p className='text-black text-center'>
              {latinToPersianDigit(String(item.payed))}
            </p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-40'>
            <p className='text-black text-center'>
              {latinToPersianDigit(String(item.notPayed))}
            </p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-full sm:w-40'>
            <p className='text-black text-center'>{item.phone}</p>
          </div>

          <div className='hidden sm:block p-2 text-start py-4 w-40'>
            <p className='text-black text-center'>{item.nationalCode}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PersonnelActivitiesTableElm
