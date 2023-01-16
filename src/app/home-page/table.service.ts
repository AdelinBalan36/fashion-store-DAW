import { Injectable } from '@angular/core';
import { ClothingItem, Gender } from './clothingItemInterface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
   private clothingItem: ClothingItem[]=[
    {name:"Bluza maneca lunga",size :2,gender:Gender.M,brand:"H&M",price:12},
    {name:"Blugi",size :3,gender:Gender.M, brand:"Bershka", price:200},
    {name:"Camasa caro",size :1,gender:Gender.F,brand:"PULL&BEAR", price:104},
    {name:"Tricou",size :4,gender:Gender.M,brand:"H&M",price:160},
  ];
  constructor() { }
  public getTableList():ClothingItem[]{
    return this.clothingItem;
  }
  public set(clothItems: ClothingItem[] ){
     this.clothingItem=clothItems;
 }
 
  public add(item: ClothingItem){
    
    this.clothingItem.push(item); 
    return this.clothingItem;
 }
 private clothComparer(clothingItem1:ClothingItem, clothingItem2:ClothingItem){
    return clothingItem1.price-clothingItem2.price;
 }
 public sortByPrice(){
  
  return this.clothingItem.sort(this.clothComparer)
  
 }
 public searchedName(name:string){
    return this.clothingItem.filter(clothingItem=>clothingItem.name?.includes(name));
     
 }
}
