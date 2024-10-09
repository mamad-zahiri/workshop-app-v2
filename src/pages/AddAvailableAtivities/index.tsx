import { Link } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import AddAvailableActivityFormElm from "./AddAvailableActivityForm"

const AddAvailableActivities = () => {
  return (
    <>
      <Breadcrumb pageName='اضافه کردن فعالیت های تولید سنسور' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-slate-50  shadow-lg'>
        <AddAvailableActivityFormElm />
      </div>
    </>
  )
}

export default AddAvailableActivities
