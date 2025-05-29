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