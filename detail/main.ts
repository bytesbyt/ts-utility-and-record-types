// Utility type
//1. Omit

interface User3 {
    id:number;
    email: string;
    password: string;
    age: number;
}

type PublicUser = Omit<User3, "password" | "age">

//2. Pick

type BasicUserInfo = Pick<User3, "id" | "email">

//3. Partial ?

interface Address {
    street: string;
    city: string;
    country: string;
}

const updateAddress = (address: Partial<Address>) => {
    console.log (address)
}

updateAddress({street:"123"})

// record type

type StringNumberMap = Record<string,number>

const example: StringNumberMap = {
    apple: 3,
    orange: 4,
    mango:4,
};

type FruitColor = Record <'apple' | 'orange', string>;

const fruitColor: FruitColor = {
    apple: "red",
    orange: "ornage",
};

type UserRole = "admin" | "user" | "guest"

type RolePermission = {
    admin: string,
    user: string,
    guest: string,
}

type RolePermission2 = Record<UserRole, string>


//

type Product = {
    id: string;
    name: string;
    price: number;
}

type ProductInventory = Record<string, Product>

type ProductIventory = Record<string, Product>

const inventoryResponse: ProductInventory = {
    apple: {id: "1", name: "Fuji", price: 10,},
    orange: {id: "2", name: "California", price: 10,}
}
