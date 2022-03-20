import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorDetailsComponent } from './contributor-details.component';
import { TuiIslandModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ContributorDetailsComponent],
  imports: [CommonModule, TuiIslandModule],
  exports: [ContributorDetailsComponent],
})
export class ContributorDetailsModule {}
