import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import FormLayout from "./FormLayout"

const MaterialsElm = () => {
  return (
    <>
      <Breadcrumb pageName='مواد اولیه' />

      <div className='flex flex-col'>
        <FormLayout />
      </div>
    </>
  )
}

export default MaterialsElm
