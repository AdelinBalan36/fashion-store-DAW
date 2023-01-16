import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySignatureComponent } from './company-signature/company-signature.component';
import { TitleComponent } from './title/title.component';
import { Header1Component } from './header1/header1.component';



@NgModule({
  declarations: [
    CompanySignatureComponent,
    TitleComponent,
    Header1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Header1Component
  ]
 
})
export class PageHeaderModule { }
