import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { Material } from "../../types"
import MaterialsTableElm from "./ActivitiesTable"

const materials: Array<Material> = [
  { name: "غلاف", picture: "products/p2.png", price: 0 },
  { name: "درب", picture: "products/p2.png", price: 0 },
  { name: "مدار", picture: "products/p2.png", price: 0 },
  { name: "پین", picture: "products/p2.png", price: 0 },
  { name: "سیم کوتاه", picture: "products/p2.png", price: 0 },
  { name: "سیم بلند", picture: "products/p2.png", price: 0 },
  { name: "وارنیش", picture: "products/p2.png", price: 0 },
  { name: "سر سیم Tiba", picture: "products/p2.png", price: 0 },
  { name: "سر سیم ABS", picture: "products/p2.png", price: 0 },
  { name: "سر سیم CBS", picture: "products/p2.png", price: 0 },
  { name: "ورق برنجی", picture: "products/p2.png", price: 0 },
  { name: "سیم لحیم", picture: "products/p2.png", price: 0 },
  { name: "کارتون", picture: "products/p2.png", price: 0 },
  { name: "نایلون", picture: "products/p2.png", price: 0 },
  { name: "چسب", picture: "products/p2.png", price: 0 },
]

const MaterialsElm = () => {
  return (
    <>
      <Breadcrumb pageName='مواد اولیه' />

      <MaterialsTableElm materials={materials} />
    </>
  )
}

export default MaterialsElm
