export enum Gender{
     M,
     F
}

export interface ClothingItem{
    name?:string,
    size:number,
    brand:string,
    gender:Gender,
    price:number,
}

