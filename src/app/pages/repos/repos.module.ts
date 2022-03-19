import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { HeaderModule } from '../../components/header/header.module';
import { TuiNotificationModule } from '@taiga-ui/core';
import { RepoCardModule } from './components/repo-card/repo-card.module';
import { TuiPaginationModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    TuiNotificationModule,
    RepoCardModule,
    TuiPaginationModule,
  ],
  exports: [],
})
export class ReposModule {}
