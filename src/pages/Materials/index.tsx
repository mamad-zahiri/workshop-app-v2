import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import FormLayout from "./FormLayout"
import MaterialsTableElm from "./ActivitiesTable"

const MaterialsElm = () => {
  return (
    <>
      <Breadcrumb pageName='مواد اولیه' />

      <MaterialsTableElm materials={materials} />
    </>
  )
}

export default MaterialsElm
