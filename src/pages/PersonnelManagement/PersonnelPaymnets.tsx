import { PersonnelPayment } from "../../types"

const PersonnelPaymentsTableElm = () => {
  const payments: Array<PersonnelPayment> = [
    {
      date: "1403/07/23",
      amount: 350000,
    },
    {
      date: "1402/07/09",
      amount: 680000,
    },
    {
      date: "1403/07/23",
      amount: 350000,
    },
    {
      date: "1403/08/23",
      amount: 900000,
    },
    {
      date: "1403/10/11",
      amount: 879000,
    },
  ]

  return (
    <>
      <div className='flex justify-start bg-slate-100  border-b hover:[&>div]:bg-slate-400 hover:[&>div]:text-white'>
        <div className='text-center p-4 flex justify-center content-start w-full sm:w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>پرداخت</h5>
        </div>

        <div className='flex text-center p-4 justify-center content-start w-full sm:w-40'>
          <h5 className='text-sm font-medium xsm:text-base'>تاریخ</h5>
        </div>
      </div>

      {payments.map((item, key) => (
        <div
          className={`hover:bg-slate-200 flex justify-start ${
            key === payments.length - 1 ? "" : "border-b border-stroke "
          }  gap-0`}
          key={key}>
          <div className='p-2 text-start py-4 w-full sm:w-30'>
            <p className='text-black text-center'>{item.amount}</p>
          </div>

          <div className='p-2 text-start py-4 w-full sm:w-40'>
            <p className='text-black text-center'>{item.date}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PersonnelPaymentsTableElm
