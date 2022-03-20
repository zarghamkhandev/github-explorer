import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorListItemComponent } from './contributor-list-item.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ContributorListItemComponent],
  imports: [CommonModule, TuiAvatarModule],
  exports: [ContributorListItemComponent],
})
export class ContributorListItemModule {}
