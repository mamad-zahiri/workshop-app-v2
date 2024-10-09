import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import AddPersonnelActivityFormElm from "./AddPersonnelActivityForm"

const AddPersonnelActivityForm = () => {
  return (
    <>
      <Breadcrumb pageName='اضافه کردن فعالیت پرسنل' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-transparent sm:bg-slate-50 dark:bg-black shadow-lg'>
        <AddPersonnelActivityFormElm />
      </div>
    </>
  )
}

export default AddPersonnelActivityForm
