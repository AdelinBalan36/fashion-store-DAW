import { Component, OnInit, ViewChild } from '@angular/core';
import { ClothingItem, Gender } from '../clothingItemInterface';
import { TableService } from '../table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClothingItemComponent } from '../add-clothing-item/add-clothing-item.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public clothingItems : ClothingItem[]=[];
  public genderList=Gender;
  public searchValue:string="";
  public displayedColumns: string[]=['name','size','gender','brand','price']
 
  constructor(private tableService:TableService,public dialog:MatDialog) { }
  
  @ViewChild(MatTable) table!: MatTable<ClothingItem>;
  
  ngOnInit(): void {
    this.getDataTable();
  
  }
  getDataTable(){
    this.clothingItems = this.tableService.getTableList();
  }

  
  openModal(){
   
   const dialogRef = this.dialog.open(AddClothingItemComponent)
   console.log(this.clothingItems)
   this.table.renderRows();
  }
  sortByPrice(){
    this.tableService.sortByPrice();
  }
  search(){
   this.clothingItems=this.tableService.searchedName(this.searchValue);
  }
  showData(){
    this.getDataTable();
  }
  addData(){}
  removeData(){}
}
