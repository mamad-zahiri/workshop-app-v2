import { useState } from "react"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import ActivitiesTableElm from "./ActivitiesTable"
import { Modal } from "@mui/material"
import AddAvailableActivityFormElm from "./AddAvailableActivityForm"

const activities = [
  {
    name: "لحیم سیم کوتاه و بلند به مدار",
    description: "از هویه 40W استفاده می شود",
    order: 1,
    unit_price: 0,
  },
  {
    name: "نصب درب و وارنیش روی سیم ها",
    description: "به جهت درب پوش دقت شود",
    order: 2,
    unit_price: 0,
  },
  {
    name: "لحیم رله به مدار",
    description: "رله به مدار فیت شود",
    order: 3,
    unit_price: 0,
  },
  {
    name: "مونتاژ غلاف و پین روی مدار",
    description: "مدار داخل ریل غلاف باشد",
    order: 4,
    unit_price: 0,
  },
  {
    name: "پرس یک جفت سر سیم روی سیم کوتاه و بلند",
    description: "پرس سرسیم به سیم محکم باشد",
    order: 5,
    unit_price: 0,
  },
  {
    name: "مونتاژ سوکت روی سر سیم ها (تکمیل سوییچ سنسور)",
    description: "سوکت محکم و دقیق مونتاژ شود",
    order: 6,
    unit_price: 0,
  },
  {
    name: "تست On/Off سوییچ سنسور",
    description: "۳ بار آهنربا حرکت داده شود",
    order: 7,
    unit_price: 0,
  },
  {
    name: "شمارش / بسته بندی سوییچ سنسور ها داخل نایلون و کارتن",
    description: "شمارش و وزن دقیق باشد",
    order: 8,
    unit_price: 0,
  },
]

const AvailableActivitiesElm = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Breadcrumb pageName='فعالیت های تولید سنسور' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-slate-50 dark:bg-black shadow-lg'>
        <ActivitiesTableElm activities={activities} />
      </div>

      <div
        className='fixed bottom-10 left-10 rounded-lg w-10 h-10 bg-cyan-600 flex justify-center p-1.5 hover:cursor-pointer'
        onClick={handleOpen}>
        <img src='/plus.png' alt='' />
      </div>

      <Modal
        onClose={handleClose}
        open={open}
        className='absolute flex w-full h-full justify-center items-center'>
        <AddAvailableActivityFormElm />
      </Modal>
    </>
  )
}

export default AvailableActivitiesElm
