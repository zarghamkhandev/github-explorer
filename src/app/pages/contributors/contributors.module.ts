import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorsRoutingModule } from './contributors-routing.module';
import { ContributorsComponent } from './contributors.component';
import { TuiNotificationModule, TuiLoaderModule } from '@taiga-ui/core';
import { HeadingSectionModule } from '../../components/heading-section/heading-section.module';

@NgModule({
  declarations: [ContributorsComponent],
  imports: [
    CommonModule,
    ContributorsRoutingModule,
    TuiNotificationModule,
    TuiLoaderModule,
    HeadingSectionModule,
  ],
})
export class ContributorsModule {}
