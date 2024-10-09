const AddAvailableActivityFormElm = () => {
  return (
    <div className='rounded-lg bg-white shadow-default  p-4 w-125'>
      <h3 className='mb-6 text-center font-semibold text-lg text-black '>
        ثبت محصول جدید
      </h3>

      <form action='#' className='mx-2'>
        <div className='mb-5'>
          <label className='mb-2.5 block text-black '>نام محصول</label>
          <input
            type='text'
            placeholder='سنسور'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter'
          />
        </div>

        <div className='mb-5'>
          <label className='mb-4.5 block text-black '>کد محصول</label>
          <input
            type='text'
            placeholder='T'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter'
          />
        </div>

        <div className='mb-5'>
          <label className='mb-4.5 block text-black '>
            قیمت واحد (تومان)
          </label>
          <input
            type='number'
            placeholder='35000'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter'
          />
        </div>

        <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
          ثبت
        </button>
      </form>
    </div>
  )
}

export default AddAvailableActivityFormElm
