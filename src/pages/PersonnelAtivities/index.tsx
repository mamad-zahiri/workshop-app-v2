import { Modal } from "@mui/material"
import { useState } from "react"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { PersonnelActivity } from "../../types"
import { userTasks } from "../AvailableAtivities/server"
import PersonnelActivitiesTableElm from "./ActivitiesTable"
import AddPersonnelActivityFormElm from "./AddPersonnelActivityForm"

const res = await userTasks()
console.log(res)

const activities: Array<PersonnelActivity> = [
  {
    productionCode: "14000323T1-1500",
    assignedAt: "2020-08-05T13:17:27Z",
    activity: "لحیم کاری",
    number: "5,768",
    finsishedAt: "2020-08-05T13:17:27Z",
    borrowedTool: ["هویه 40w", "برس"],
    personnelCode: "h9p49m",
    wasteMaterials: [],
  },
  {
    productionCode: "14000323T1-1500",
    assignedAt: "2020-12-13T13:17:27.853707Z",
    activity: "وارنیش",
    number: "4,635",
    finsishedAt: "2020-12-13T13:17:27.853707Z",
    borrowedTool: [],
    personnelCode: "dhff97",
    wasteMaterials: [],
  },
  {
    productionCode: "14000323T1-1500",
    assignedAt: "2020-03-22T13:17:27.853707Z",
    activity: "پرس سرسیم",
    number: "4,290",
    finsishedAt: "2020-03-22T13:17:27.853707Z",
    borrowedTool: [],
    personnelCode: "h7cths",
    wasteMaterials: [],
  },
  {
    productionCode: "14000323T1-1500",
    assignedAt: "2020-03-22T13:17:27.853707Z",
    activity: "بسته بندی",
    number: "3,580",
    finsishedAt: "2020-03-22T13:17:27.853707Z",
    borrowedTool: ["کاتر"],
    personnelCode: "gzmk9z",
    wasteMaterials: [],
  },
  {
    productionCode: "14000323T1-1500",
    assignedAt: "2020-03-22T13:17:27.853707Z",
    activity: "لحیم کاری",
    number: "6,768",
    finsishedAt: "2020-03-22T13:17:27.853707Z",
    borrowedTool: ["هویه 40W"],
    personnelCode: "xn73gq",
    wasteMaterials: [],
  },
]

const PersonnelActivities = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Breadcrumb pageName='فعالیت پرسنل' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-transparent sm:bg-slate-50 dark:bg-black shadow-lg'>
        <PersonnelActivitiesTableElm activities={activities} />
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
        <AddPersonnelActivityFormElm />
      </Modal>
    </>
  )
}

export default PersonnelActivities
