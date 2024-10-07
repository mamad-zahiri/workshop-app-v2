import { useRef, useState } from "react"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, { DatePickerRef } from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker"

const productCodes: Array<string> = ["14000523T1-1500"]
const AddPersonnelActivityFormElm = () => {
  const [showProductCodeMenu, setShowProductCodeMenu] = useState(false)
  const [showActivitiesMenu, setShowActivitiesMenu] = useState(false)
  const [showPersonnelMenu, setShowPersonnelMenu] = useState(false)
  const ReceiveDatepickerRef = useRef<DatePickerRef>()
  const DeliveryDatepickerRef = useRef<DatePickerRef>()

  return (
    <div className='rounded-lg bg-white shadow-default dark:bg-boxdark p-4 w-150'>
      <h3 className='mb-6 text-center font-semibold text-lg text-black dark:text-white'>
        اضافه کردن فعالیت پرسنل
      </h3>

      <form action='#' className='mx-2 overflow-scroll'>
        <div className='flex gap-x-2 flex-col sm:flex-row'>
          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>کد تولید</label>
            <div className='relative group'>
              <button
                type='button'
                onClick={() => setShowProductCodeMenu((old) => !old)}
                className='inline-flex justify-center rounded w-full border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'>
                <span className='mr-2'>انتخاب</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>

              {showProductCodeMenu && (
                <div className='absolute left-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-9999'>
                  {/* Search input */}
                  <input
                    className='block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none'
                    type='text'
                    placeholder='Search items'
                    autoComplete='off'
                  />
                  {/* Dropdown content goes here */}

                  {productCodes.map((item, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>
              ابزار و مواد
            </label>
            <div className='relative group'>
              <button
                type='button'
                onClick={() => setShowActivitiesMenu((old) => !old)}
                className='inline-flex justify-center rounded w-full border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'>
                <span className='mr-2'>انتخاب</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>

              {showActivitiesMenu && (
                <div className='absolute left-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-9999'>
                  {/* Search input */}
                  <input
                    className='block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none'
                    type='text'
                    placeholder='Search items'
                    autoComplete='off'
                  />
                  {/* Dropdown content goes here */}

                  {productCodes.map((item, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='flex gap-x-2 flex-col sm:flex-row'>
          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>پرسنل</label>
            <div className='relative group'>
              <button
                type='button'
                onClick={() => setShowPersonnelMenu((old) => !old)}
                className='inline-flex justify-center rounded w-full border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'>
                <span className='mr-2'>انتخاب</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>

              {showPersonnelMenu && (
                <div className='absolute left-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-9999'>
                  {/* Search input */}
                  <input
                    className='block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none'
                    type='text'
                    placeholder='Search items'
                    autoComplete='off'
                  />
                  {/* Dropdown content goes here */}

                  {productCodes.map((item, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>تعداد</label>
            <input
              type='number'
              placeholder='۱۲'
              className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
            />
          </div>

          {/* <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>ساعت دریافت</label>

            <DatePicker
              containerClassName='rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 w-full text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary [&>input]:border-none'
              disableDayPicker
              format='HH:mm:ss'
              value={new Date()}
              plugins={[<TimePicker position='bottom' />]}
            />
          </div> */}
        </div>

        <div className='flex gap-x-2 flex-col sm:flex-row'>
          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>
              تاریخ دریافت
            </label>

            <DatePicker
              ref={ReceiveDatepickerRef}
              containerClassName='rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 w-full text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary [&>input]:border-none'
              calendar={persian}
              locale={persian_fa}
              value={new Date()}
            />
          </div>

          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>ساعت دریافت</label>

            <DatePicker
              containerClassName='rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 w-full text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary [&>input]:border-none'
              disableDayPicker
              format='HH:mm:ss'
              value={new Date()}
              plugins={[<TimePicker position='bottom' />]}
            />
          </div>
        </div>

        <div className='flex gap-x-2 flex-col sm:flex-row'>
          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>تاریخ تحویل</label>

            <DatePicker
              ref={DeliveryDatepickerRef}
              containerClassName='rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 w-full text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary [&>input]:border-none'
              calendar={persian}
              locale={persian_fa}
              value={new Date()}
            />
          </div>

          <div className='mb-5 w-full'>
            <label className='mb-2.5 block text-black dark:text-white'>ساعت تحویل</label>

            <DatePicker
              containerClassName='rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 w-full text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary [&>input]:border-none'
              disableDayPicker
              format='HH:mm:ss'
              value={new Date()}
              plugins={[<TimePicker position='bottom' />]}
            />
          </div>
        </div>

        <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
          ثبت
        </button>
      </form>
    </div>
  )
}

export default AddPersonnelActivityFormElm
