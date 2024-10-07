import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import Loader from "./common/Loader"
import PageTitle from "./components/PageTitle"
import DefaultLayout from "./layout/DefaultLayout"
import SignIn from "./pages/Authentication/SignIn"
import MaterialsElm from "./pages/Materials"
import PersonnelActivities from "./pages/PersonnelAtivities"
import PersonnelManagementElm from "./pages/PersonnelManagement"
import Products from "./pages/Products"
import { Modals } from "./pages/UiElements/Modals"
import AvailableActivitiesElm from "./pages/AvailableAtivities"

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
          path='/materials'
          element={
            <>
              <PageTitle title='مواد اولیه' />
              <MaterialsElm />
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
          path='/personnel-management'
          element={
            <>
              <PageTitle title='مدیریت پرسنل' />
              <PersonnelManagementElm />
            </>
          }
        />

<Route
          path='/available-activities'
          element={
            <>
              <PageTitle title='فعالیت‌های موجود' />
              <AvailableActivitiesElm />
            </>
          }
        />

        <Route
          path='/profile'
          element={
            <>
              <PageTitle title='Profile' />
              <Modals />
            </>
          }
        />
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
