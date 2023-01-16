import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBarComponent } from './home-bar/home-bar.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeBarComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[HomeBarComponent]
})
export class BarTypesModule { }
