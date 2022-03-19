import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { HeaderModule } from '../../components/header/header.module';
import { TuiNotificationModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { RepoCardModule } from './components/repo-card/repo-card.module';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    TuiNotificationModule,
    RepoCardModule,
  ],
  exports: [],
})
export class ReposModule {}
