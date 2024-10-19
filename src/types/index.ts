export interface Product {
    name: string
    // code: string
    picture: string // picture url
    price: number
}

export interface Order {
    product: string
    date: string
    group: number
    number: number
}

export interface Material {
    name: string
    // code: string
    price: number
    picture: string
}

export interface PersonnelActivity {
    productionCode: string
    assignedAt: string
    activity: string
    number: string
    price: string
    finsishedAt: string
    borrowedTool: Array<string>
    personnelCode: string
    wasteMaterials: Array<string>
}

export interface PersonnelData {
    firstName: string
    lastName: string
    payed: number
    notPayed: number
    phone: string
    nationalCode: string
    personnelCode: string
}

export interface PersonnelPayment {
    date: string
    amount: number
}

export interface Activity {
    order: number
    name: string
    description: string
    unit_price: number
}
