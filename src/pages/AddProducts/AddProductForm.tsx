const AddProductFormElm = () => {
  return (
    <div className='rounded-lg bg-white shadow-default dark:bg-boxdark p-4 w-125'>
      <form action='#' className='mx-2'>
        <div className='mb-5'>
          <label className='mb-2.5 block text-black dark:text-white'>نام محصول</label>
          <input
            type='text'
            placeholder='سنسور'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />
        </div>

        <div className='mb-5'>
          <label className='mb-4.5 block text-black dark:text-white'>کد محصول</label>
          <input
            type='text'
            placeholder='T'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />
        </div>

        <div className='mb-5'>
          <label className='mb-4.5 block text-black dark:text-white'>
            قیمت واحد (تومان)
          </label>
          <input
            type='number'
            placeholder='35000'
            className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />
        </div>

        <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
          ثبت
        </button>
      </form>
    </div>
  )
}

export default AddProductFormElm
