import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './repo-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [RepoCardComponent],
  imports: [CommonModule, TuiIslandModule],
  exports: [RepoCardComponent],
})
export class RepoCardModule {}
