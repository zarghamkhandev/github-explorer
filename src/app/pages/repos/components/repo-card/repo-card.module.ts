import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './repo-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';

@NgModule({
  declarations: [RepoCardComponent],

  imports: [CommonModule, TuiIslandModule, TuiSvgModule],
  exports: [RepoCardComponent],
})
export class RepoCardModule {}
