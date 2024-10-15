import { Link } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { Product } from "../../types"
import ProductListTableElm from "./ProductsTable"

const products: Array<Product> = [
  {
    name: "سوییچ سنسور Tiba",
    picture: "/products/p1.png",
    price: 35000,
  },
  {
    name: "سوییچ سنسور ABS",
    picture: "/products/p2.png",
    price: 22000,
  },
  {
    name: "سوییچ سنسور CBS",
    picture: "/products/p3.png",
    price: 28000,
  },
]

const Products = () => {
  return (
    <>
      <Breadcrumb pageName='محصولات' />

      <ProductListTableElm products={products} />

      <Link to='/products/add'>
        <div className='fixed bottom-10 left-10 rounded-lg w-10 h-10 bg-cyan-600 flex justify-center p-1.5 hover:cursor-pointer'>
          <img src='/plus.png' alt='' />
        </div>
      </Link>
    </>
  )
}

export default Products
