import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './repo-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [RepoCardComponent],

  imports: [CommonModule, TuiIslandModule, TuiSvgModule, PipesModule],
  exports: [RepoCardComponent],
})
export class RepoCardModule {}
