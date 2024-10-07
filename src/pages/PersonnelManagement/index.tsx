import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import PersonnelActivitiesTableElm from "./PersonnelTable"
import { PersonnelData } from "../../types/index"

const personnel: Array<PersonnelData> = [
  {
    firstName: "علی",
    lastName: "رضایی",
    payed: 589000,
    notPayed: 589000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
  {
    firstName: "ماهان",
    lastName: "احمدیان",
    payed: 253000,
    notPayed: 253000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
  {
    firstName: "داود",
    lastName: "میرعلایی",
    payed: 742000,
    notPayed: 742000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
  {
    firstName: "رسول",
    lastName: "امینی",
    payed: 689000,
    notPayed: 689000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
  {
    firstName: "اسماعیل",
    lastName: "پوریعقوب",
    payed: 18000,
    notPayed: 18000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
  {
    firstName: "امیر",
    lastName: "آرزومند",
    payed: 351000,
    notPayed: 351000,
    phone: "09158760123",
    nationalCode: "1234567890",
    personnelCode: "h9p49m",
  },
]

const PersonnelManagementElm = () => {
  return (
    <>
      <Breadcrumb pageName='مدیریت پرسنل' />

      <div className='flex flex-col p-2 rounded-md overflow-hidden bg-slate-50 dark:bg-black shadow-lg'>
        <PersonnelActivitiesTableElm personnel={personnel} />
      </div>
    </>
  )
}

export default PersonnelManagementElm
