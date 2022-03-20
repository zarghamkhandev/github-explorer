import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorListItemComponent } from './contributor-list-item.component';



@NgModule({
  declarations: [
    ContributorListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContributorListItemComponent
  ]
})
export class ContributorListItemModule { }
