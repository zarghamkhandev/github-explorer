import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [ReposComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule],
})
export class ReposModule {}
