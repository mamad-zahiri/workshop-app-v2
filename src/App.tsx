import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Loader from "./common/Loader"
import PageTitle from "./components/PageTitle"
import DefaultLayout from "./layout/DefaultLayout"
import AddAvailableActivities from "./pages/AddAvailableAtivities"
import AddPersonnelActivityForm from "./pages/AddPersonnelAtivities"
import AddProductForm from "./pages/AddProducts"
import SignIn from "./pages/Authentication/SignIn"
import AvailableActivitiesElm from "./pages/AvailableAtivities"
import MaterialsElm from "./pages/Materials"
import PersonnelActivities from "./pages/PersonnelAtivities"
import PersonnelManagementElm from "./pages/PersonnelManagement"
import Products from "./pages/Products"
import SingleProductFormElm from "./pages/Products/SingleProductForm"
import SingleMaterialmElm from "./pages/Materials/SingleMaterialForm"
import SinglePersonActivityFormElm from "./pages/PersonnelAtivities/SinglePersonActivityForm"
import SinglePersonFormElm from "./pages/PersonnelManagement/SinglePersonForm"

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          path='/products'
          element={
            <>
              <PageTitle title='محصولات' />
              <Products />
            </>
          }
        />

        <Route
          path='/products/add'
          element={
            <>
              <PageTitle title='اضافه کردن محصولات' />
              <AddProductForm />
            </>
          }
        />

        <Route
          path='/products/show'
          element={
            <>
              <PageTitle title='محصولات | نمایش' />
              <SingleProductFormElm />
            </>
          }
        />

        <Route
          path='/materials'
          element={
            <>
              <PageTitle title='مواد اولیه' />
              <MaterialsElm />
            </>
          }
        />

        <Route
          path='/materials/show'
          element={
            <>
              <PageTitle title='مواد اولیه | نمایش' />
              <SingleMaterialmElm />
            </>
          }
        />

        <Route
          path='/personnel-activities'
          element={
            <>
              <PageTitle title='فعالیت پرسنل' />
              <PersonnelActivities />
            </>
          }
        />

        <Route
          path='/personnel-activities/show'
          element={
            <>
              <PageTitle title='فعالیت پرسنل | نمایش' />
              <SinglePersonActivityFormElm />
            </>
          }
        />

        <Route
          path='/personnel-activities/add'
          element={
            <>
              <PageTitle title='اضافه کردن فعالیت پرسنل' />
              <AddPersonnelActivityForm />
            </>
          }
        />

        <Route
          path='/personnel-management'
          element={
            <>
              <PageTitle title='مدیریت پرسنل' />
              <PersonnelManagementElm />
            </>
          }
        />

        <Route
          path='/personnel-management/show'
          element={
            <>
              <PageTitle title='مدیریت پرسنل | نمایش' />
              <SinglePersonFormElm />
            </>
          }
        />

        <Route
          path='/available-activities'
          element={
            <>
              <PageTitle title='فعالیت‌های تولید سنسور' />
              <AvailableActivitiesElm />
            </>
          }
        />

        <Route
          path='/available-activities/add'
          element={
            <>
              <PageTitle title='فعالیت‌های تولید سنسور' />
              <AddAvailableActivities />
            </>
          }
        />
        {/* <Route
          path='/profile'
          element={
            <>
              <PageTitle title='Profile' />
              <Profile />
            </>
          }
        /> */}
        <Route
          path='/auth/signin'
          element={
            <>
              <PageTitle title='Signin' />
              <SignIn />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  )
}

export default App
