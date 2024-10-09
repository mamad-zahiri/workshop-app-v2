import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { Product } from "../../types"
import AddProductFormElm from "./AddProductForm"

const AddProductForm = () => {
  return (
    <>
      <Breadcrumb pageName='اضافه کردن محصول' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-slate-50  shadow-lg'>
        <AddProductFormElm />
      </div>
    </>
  )
}

export default AddProductForm
