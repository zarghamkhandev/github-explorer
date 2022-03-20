import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorDetailsComponent } from './contributor-details.component';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ContributorDetailsComponent],
  imports: [CommonModule, TuiIslandModule,TuiAvatarModule,TuiButtonModule],
  exports: [ContributorDetailsComponent],
})
export class ContributorDetailsModule {}
